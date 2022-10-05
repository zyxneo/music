import { FormattedMessage } from "gatsby-plugin-intl";
import React, { useEffect, useRef, useState } from "react";
import Vex, { Factory, Registry, StaveNote } from "vexflow";
import {
  Piano,
  KeyboardShortcuts,
  MidiNumbers,
  PITCH_INDEXES,
} from "components";
import "../Piano/Piano.css";
import { Layout, SEO, PianoKeyboard } from "components";
import { midiKeyNames } from "utils/midi";
import { NoteClasses, MidiNumber } from "utils/types";

const GuessTheNote = () => {
  const refContainer = useRef(null as unknown as HTMLDivElement);
  const [randomMidiIndex, setRandomMidiIndex] = useState(0);
  const [note, setNote] = useState("c4/w");
  const [noteClasses, setNoteClasses] = useState([]);
  const [notesDown, setNotesDown] = useState([] as number[]);

  const firstNote = MidiNumbers.fromNote("c3");
  const lastNote = MidiNumbers.fromNote("c5");
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  useEffect(() => {
    if (!!refContainer && refContainer.current) {
      refContainer.current.innerHTML = "";

      const registry = new Registry();
      Registry.enableDefaultRegistry(registry);
      const id = (id: string) => registry.getElementById(id) as StaveNote;
      const vf: Factory = new Vex.Flow.Factory({
        renderer: { elementId: refContainer.current, width: 800, height: 260 },
      });
      const score = vf.EasyScore();

      // Bind these three functions so the code looks cleaner.
      // Instead of score.voice(...), just call voice(...).
      const voice = score.voice.bind(score);
      const notes = score.notes.bind(score);
      const beam = score.beam.bind(score);
      const tuplet = score.tuplet.bind(score);

      let x = 20;
      let y = 0;
      let width = 760;
      let spaceBetweenStaves = 10;
      let time = "4/4";
      let keySignature = ""; // e.g.: 'G'

      function appendSystem({
        x,
        y,
        width,
        spaceBetweenStaves,
      }: {
        x: number;
        y: number;
        width: number;
        spaceBetweenStaves: number;
      }) {
        const system = vf.System({ x, y, width, spaceBetweenStaves });
        x += width;
        return system;
      }

      score.set({ time });

      let system = appendSystem({
        x,
        y,
        width: 300,
        spaceBetweenStaves,
      });

      var bar1 = voice(notes("C4/4, D4/4, E4/4, A4/8, E4"));

      // BEAMS, autobeam
      // https://github.com/0xfe/vexflow/wiki/Automatic-Beaming
      // https://github.com/0xfe/vexflow/wiki/Beams
      // https://github.com/acidjunk/react-vexflow-components/blob/master/src/components/stave.jsx
      // https://github.com/0xfe/vexflow/issues/625
      var beams1 = Vex.Flow.Beam.applyAndGetBeams(bar1); // autobeam a voice

      const trebleStave = system
        .addStave({
          voices: [bar1],
          // voices: [score.voice(score.notes(note))],
        })
        .addClef("treble");

      time && trebleStave.addTimeSignature(time);
      keySignature && trebleStave.addKeySignature(keySignature);

      //
      // system = appendSystem({width: 150});
      // system = appendSystem({
      //   x,
      //   y,
      //   width,
      //   spaceBetweenStaves,
      // });
      // system.addStave({ voices: [voice(notes("C4/4, D4/4, E4/4, A4/8, E4"))] });
      // system.addConnector('singleLeft');
      //

      const bassStave = system
        .addStave({
          //voices: [score.voice(score.notes(note, {clef: 'bass', stem: 'up'}))
          // ]
          voices: [
            voice(notes('(G3 B3 D4)/h, A3/h[id="m1a"]', { clef: "bass" })),
          ],
          // voices: [
          //   score.voice(score.notes("F3/1/r", { clef: "bass", stem: "up" })),
          // ],
        })
        .addClef("bass");

      time && bassStave.addTimeSignature(time);
      keySignature && bassStave.addKeySignature(keySignature);



      system.addConnector("brace");
      system.addConnector("singleLeft");
      system.addConnector("boldDoubleRight");

      id("m1a").addModifier(
        vf.Fingering({ number: "5", position: "above" }),
        0
      );
      vf.draw();
      beams1.forEach(function (beam) {
        return beam.setContext(vf.getContext()).draw();
      });
    }
  }, [note]);

  useEffect(() => {
    renderNote();
  }, []);

  function renderNote() {
    const randomMidiIndex = Math.floor(
      Math.random() * (lastNote - firstNote + 1) + firstNote
    );

    setRandomMidiIndex(randomMidiIndex);
    const octave = Math.floor(randomMidiIndex / 12) - 1;
    const noteKeyName = midiKeyNames[randomMidiIndex % 12];

    setNoteClasses([
      { midiNumber: randomMidiIndex, className: "Piano__Key--toPress" },
    ]);
    setNote(
      `${noteKeyName}${octave}/w`
      /*
      ["A/4", "B/4", "C/4", "D/4", "E/4", "F/4", "G/4"][
        Math.floor(Math.random() * 7)
      ]*/
    );
  }

  function handleKeyDown(midiNumber: MidiNumber) {
    const newNotesDown = [...notesDown, midiNumber];
    setNotesDown(newNotesDown);
    // console.log("playNote", midiNumber, newNotesDown, randomMidiIndex);

    if (
      newNotesDown.sort().toString() === [randomMidiIndex].sort().toString()
    ) {
      renderNote();
    }
  }

  function handleKeyUp(midiNumber: MidiNumber) {
    setNotesDown(
      [...notesDown].filter((item) => {
        return item !== midiNumber;
      })
    );
    // console.log("stopNote", midiNumber);
  }

  return (
    <Layout className="home">
      <SEO title="TODO" />

      <section className="home__intro">
        <div className="container intro">
          <div className="intro__logo">hi</div>
          <h1 className="intro__title">TODO</h1>
        </div>

        <div className="staff" ref={refContainer}></div>
        <button onClick={() => renderNote()}>renderNote</button>

        {notesDown.map((note) => (
          <b>{note}, </b>
        ))}
        <div className="Piano__wrapper">
          <Piano
            noteRange={{ first: firstNote, last: lastNote }}
            playNote={(midiNumber) => {
              handleKeyDown(midiNumber);
              // Play a given note - see notes below
            }}
            stopNote={(midiNumber) => {
              handleKeyUp(midiNumber);
              // Stop playing a given note - see notes below
            }}
            width={600}
            keyboardShortcuts={keyboardShortcuts}
            renderNoteLabel={({
              keyboardShortcut,
              midiNumber,
              isActive,
              isAccidental,
            }) => (
              <div
                className={`Piano__NoteLabel ${
                  isAccidental
                    ? "Piano__NoteLabel--accidental"
                    : "Piano__NoteLabel--natural"
                } ${isActive && "Piano__NoteLabel--active"}`}
              >
                {/* {isActive ? "yes" : "no"} */}
                {midiNumber}
              </div>
            )}
            // activeNotes={[44, 47, 54, 60]}
            noteClasses={noteClasses}
          />
        </div>
      </section>
    </Layout>
  );
};

export default GuessTheNote;
