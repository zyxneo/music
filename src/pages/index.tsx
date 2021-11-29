import { FormattedMessage } from "gatsby-plugin-intl";
import React, { useEffect, useRef, useState } from "react";
import Vex from "vexflow";
import { Piano, KeyboardShortcuts, MidiNumbers, PITCH_INDEXES } from "components";
import "../components/Piano/Piano.css";
import { Layout, SEO, PianoKeyboard } from "components";
import { midiKeyNames } from "utils/midi";

const IndexPage = () => {
  const VF = Vex.Flow;
  const refContainer = useRef(null);
  const [context, setContext] = useState(null);
  const [stave, setStave] = useState(null);
  const [note, setNote] = useState("c4/w");


  const firstNote = MidiNumbers.fromNote("c3");
  const lastNote = MidiNumbers.fromNote("c5");
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  useEffect(() => {
    if (!!refContainer) {
      refContainer.current.innerHTML = "";

      var vf = new Vex.Flow.Factory({renderer: {elementId: refContainer.current, width: 800, height: 260}});
      var score = vf.EasyScore();
      var system = vf.System({
        x: 20,
        width: 760
      });
      system.addStave({
        voices: [score.voice(score.notes(note))]
      }).addClef('treble').addTimeSignature('4/4');
      
      system.addStave({
        //voices: [score.voice(score.notes(note, {clef: 'bass', stem: 'up'}))
      // ]
      voices: [score.voice(score.notes('B3/1/r', {clef: 'bass', stem: 'up'}))
      ]
      }).addClef('bass').addTimeSignature('4/4');
      
      system.addConnector('singleLeft')
      system.addConnector('boldDoubleRight')
      system.addConnector('brace')

      vf.draw();
    }
  }, [note]);

  console.log(note);

  function renderNote() {
    const randomMidiIndex = Math.floor(
      Math.random() * (lastNote - firstNote + 1) + firstNote
    );

    console.log(randomMidiIndex)
    const octave = Math.floor(randomMidiIndex / 12) - 1;
    const noteKeyName = midiKeyNames[randomMidiIndex % 12];

    setNote(
      `${noteKeyName}${octave}/w`
      /*
      ["A/4", "B/4", "C/4", "D/4", "E/4", "F/4", "G/4"][
        Math.floor(Math.random() * 7)
      ]*/
    );
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

        <Piano
          noteRange={{ first: firstNote, last: lastNote }}
          playNote={(midiNumber) => {
            console.log("playNote", midiNumber);
            // Play a given note - see notes below
          }}
          stopNote={(midiNumber) => {
            console.log("stopNote", midiNumber);
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
          activeNotes={[44, 47, 54, 60]}
        />
      </section>
    </Layout>
  );
};

export default IndexPage;
