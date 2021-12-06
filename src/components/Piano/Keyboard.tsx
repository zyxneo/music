// From https://github.com/kevinsqi/react-piano

import React from "react";

import classNames from "classnames";

import Key from "./Key";
import MidiNumbers from "./MidiNumbers";
import { NoteClasses, MidiNumber } from "utils/types";

type Props = {
  noteRange: typeof noteRangePropType;
  activeNotes?: number[];
  onPlayNoteInput: (midiNumber: MidiNumber) => void;
  onStopNoteInput: (midiNumber: MidiNumber) => void;
  renderNoteLabel: ({ keyboardShortcut, midiNumber, isActive, isAccidental, }: { keyboardShortcut: any; midiNumber: any; isActive: any; isAccidental: any; }) => JSX.Element;
  keyWidthToHeight: number;
  className?: string;
  noteClasses?: NoteClasses;
  disabled?: boolean;
  gliss?: boolean;
  useTouchEvents?: boolean;
  // If width is not provided, must have fixed width and height in parent container
  width?: number;
};

function isNaturalMidiNumber(value) {
  if (typeof value !== "number") {
    return false;
  }
  return MidiNumbers.NATURAL_MIDI_NUMBERS.includes(value);
}

function noteRangePropType(props, propName, componentName) {
  const { first, last } = props[propName];
  if (!first || !last) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. ${propName} must be an object with .first and .last values.`
    );
  }
  if (!isNaturalMidiNumber(first) || !isNaturalMidiNumber(last)) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. ${propName} values must be valid MIDI numbers, and should not be accidentals (sharp or flat notes).`
    );
  }
  if (first >= last) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. ${propName}.first must be smaller than ${propName}.last.`
    );
  }
}

const Keyboard = ({
  disabled = false,
  gliss = false,
  useTouchEvents = false,
  keyWidthToHeight = 0.33,
  renderNoteLabel = () => null,
  noteRange,
  activeNotes,
  onPlayNoteInput,
  onStopNoteInput,
  className,
  noteClasses = [],
  // If width is not provided, must have fixed width and height in parent container
  width,
}: Props) => {
  // Range of midi numbers on keyboard
  function getMidiNumbers() {
    const range = (start: number, stop: number, step = 1) =>
      Array(Math.ceil((stop - start) / step))
        .fill(start)
        .map((x, y) => x + y * step);

    return range(noteRange.first, noteRange.last + 1);
  }

  function getNaturalKeyCount() {
    return getMidiNumbers().filter((number) => {
      const { isAccidental } = MidiNumbers.getAttributes(number);
      return !isAccidental;
    }).length;
  }

  // Returns a ratio between 0 and 1
  function getNaturalKeyWidth() {
    return 1 / getNaturalKeyCount();
  }

  function getWidth() {
    return width ? width : "100%";
  }

  function getHeight() {
    if (!width) {
      return "100%";
    }
    const keyWidth = width * getNaturalKeyWidth();
    return `${keyWidth / keyWidthToHeight}px`;
  }

  console.log("noteClasses", noteClasses);
  const naturalKeyWidth = getNaturalKeyWidth();
  return (
    <div
      className={classNames("Piano__Keyboard", className)}
      style={{ width: getWidth(), height: getHeight() }}
    >
      {getMidiNumbers().map((midiNumber) => {
        const { note, isAccidental } = MidiNumbers.getAttributes(midiNumber);
        const isActive =
          !disabled && activeNotes && activeNotes.includes(midiNumber);
        const className = noteClasses.find(
          (item) => item.midiNumber === midiNumber
        )?.className;
        return (
          <Key
            naturalKeyWidth={naturalKeyWidth}
            midiNumber={midiNumber}
            noteRange={noteRange}
            active={isActive}
            accidental={isAccidental}
            disabled={disabled}
            onPlayNoteInput={onPlayNoteInput}
            onStopNoteInput={onStopNoteInput}
            gliss={gliss}
            useTouchEvents={useTouchEvents}
            key={midiNumber}
            className={className}
          >
            {disabled
              ? null
              : renderNoteLabel({
                  isActive,
                  isAccidental,
                  midiNumber,
                })}
          </Key>
        );
      })}
    </div>
  );
};

export default Keyboard;
