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
  const [randomMidiIndex, setRandomMidiIndex] = useState(null);
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


  useEffect(() => {
    renderNote()
  },[]);
  console.log(note);

  function renderNote() {
    const randomMidiIndex = Math.floor(
      Math.random() * (lastNote - firstNote + 1) + firstNote
    );

    setRandomMidiIndex(randomMidiIndex)
    const octave = Math.floor(randomMidiIndex / 12) - 1;
    const noteKeyName = midiKeyNames[randomMidiIndex % 12];

    setNoteClasses([
      {midiNumber: randomMidiIndex, className: 'Piano__Key--toPress'}
    ])
    setNote(
      `${noteKeyName}${octave}/w`
      /*
      ["A/4", "B/4", "C/4", "D/4", "E/4", "F/4", "G/4"][
        Math.floor(Math.random() * 7)
      ]*/
    );
  }

  function handleKeyDown(midiNumber: number) {
    const newNotesDown = [...notesDown, midiNumber]
    setNotesDown(newNotesDown)
    console.log("playNote", midiNumber, newNotesDown, randomMidiIndex);

    if(newNotesDown.sort().toString() === [randomMidiIndex].sort().toString()) {
      renderNote()
    }
  }

  function handleKeyUp(midiNumber: number) {
    setNotesDown([...notesDown].filter((item) => {return item !== midiNumber}))
    console.log("stopNote", midiNumber);

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

{notesDown.map((note) => <b>{note}, </b>)}
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

export default IndexPage;
