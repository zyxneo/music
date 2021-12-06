// From https://github.com/kevinsqi/react-piano

import React, {ReactNode} from "react";
import classNames from "classnames";

import MidiNumbers from "./MidiNumbers";

type MidiNumber = number;

type Props = {
    midiNumber: MidiNumber;
    naturalKeyWidth: number; // Width as a ratio between 0 and 1
    gliss: boolean;
    useTouchEvents: boolean;
    accidental: boolean;
    active: boolean;
    disabled: boolean;
    onPlayNoteInput: (midiNumber: MidiNumber) => void;
    onStopNoteInput: (midiNumber: MidiNumber) => void;
    accidentalWidthRatio: number;
    pitchPositions: object;
    noteRange: {
      first: number,
      last: number,
    };
    children?: ReactNode;
    className?: string;
}

const Key = ({
  onPlayNoteInput,
  midiNumber,
  onStopNoteInput,
  accidentalWidthRatio = 0.65,
  pitchPositions = {
    C: 0,
    Db: 0.55,
    D: 1,
    Eb: 1.8,
    E: 2,
    F: 3,
    Gb: 3.5,
    G: 4,
    Ab: 4.7,
    A: 5,
    Bb: 5.85,
    B: 6,
  },
  naturalKeyWidth,
  gliss,
  useTouchEvents,
  accidental,
  active,
  disabled,
  children,
  className,
  noteRange,
}: Props) => {

  function handleOnPlayNoteInput () {
    onPlayNoteInput(midiNumber);
  };

  function handleOnStopNoteInput () {
    onStopNoteInput(midiNumber);
  };

  // Key position is represented by the number of natural key widths from the left
  function getAbsoluteKeyPosition(midiNumber: MidiNumber) {
    const OCTAVE_WIDTH = 7;
    const { octave, pitchName } = MidiNumbers.getAttributes(midiNumber);
    const pitchPosition = pitchPositions[pitchName];
    const octavePosition = OCTAVE_WIDTH * octave;
    return pitchPosition + octavePosition;
  }

  function getRelativeKeyPosition(midiNumber: MidiNumber) {
    return (
      getAbsoluteKeyPosition(midiNumber) -
      getAbsoluteKeyPosition(noteRange.first)
    );
  }


    // Need to conditionally include/exclude handlers based on useTouchEvents,
    // because otherwise mobile taps double fire events.
    return (
      <div
        className={classNames("Piano__Key", {
          "Piano__Key--accidental": accidental,
          "Piano__Key--natural": !accidental,
          "Piano__Key--disabled": disabled,
          "Piano__Key--active": active,
        }, className)}
        style={{
          left: ratioToPercentage(
            accidental
              ? getRelativeKeyPosition(midiNumber) * naturalKeyWidth: 0
          ),
          width: ratioToPercentage(
            accidental
              ? accidentalWidthRatio * naturalKeyWidth
              : naturalKeyWidth
          ),
        }}
        onMouseDown={useTouchEvents ? null : handleOnPlayNoteInput}
        onMouseUp={useTouchEvents ? null : handleOnStopNoteInput}
        onMouseEnter={gliss ? handleOnPlayNoteInput : null}
        onMouseLeave={handleOnStopNoteInput}
        onTouchStart={useTouchEvents ? handleOnPlayNoteInput : null}
        onTouchCancel={useTouchEvents ? handleOnStopNoteInput : null}
        onTouchEnd={useTouchEvents ? handleOnStopNoteInput : null}
      >
        <div className="Piano__NoteLabelContainer">{children}</div>
      </div>
    );
}

function ratioToPercentage(ratio) {
  return `${ratio * 100}%`;
}

export default Key;
