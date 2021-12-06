// From https://github.com/kevinsqi/react-piano

import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import Keyboard from "./Keyboard";

import { NoteClasses, MidiNumber } from "utils/types";
import { usePrevious } from "utils/usePrevious";

type Props = {
  noteRange: object;
  activeNotes?: number[];
  playNote: (midiNumber: MidiNumber) => void;
  stopNote: (midiNumber: MidiNumber) => void;
  onPlayNoteInput: (midiNumber: MidiNumber, activeNotes: number[]) => void;
  onStopNoteInput: (midiNumber: MidiNumber, activeNotes: number[]) => void;
  renderNoteLabel: ({ keyboardShortcut, midiNumber, isActive, isAccidental, }: { keyboardShortcut: any; midiNumber: any; isActive: any; isAccidental: any; }) => JSX.Element;
  className?: string;
  disabled?: boolean;
  width?: number;
  keyWidthToHeight: number;
  keyboardShortcuts: {
    key: string;
    midiNumber: MidiNumber;
  }[];
  noteClasses?: NoteClasses;
};

const ControlledPiano = ({
  renderNoteLabel = ({
    keyboardShortcut,
    midiNumber,
    isActive,
    isAccidental,
  }) =>
    keyboardShortcut ? (
      <div
        className={classNames("Piano__NoteLabel", {
          "Piano__NoteLabel--active": isActive,
          "Piano__NoteLabel--accidental": isAccidental,
          "Piano__NoteLabel--natural": !isAccidental,
        })}
      >
        {keyboardShortcut}
      </div>
    ) : null,
  noteRange,
  activeNotes,
  playNote,
  stopNote,
  onPlayNoteInput,
  onStopNoteInput,
  className,
  disabled,
  width,
  keyWidthToHeight,
  keyboardShortcuts,
  noteClasses,
}: Props) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [useTouchEvents, setUseTouchEvents] = useState(false);
  const prevProps = usePrevious({ activeNotes });

  useEffect(() => {
    // componentDidMount
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
  }, []);

  useEffect(() => {
    // componentWillUnmount
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
    return;
  }, []);

  useEffect(() => {
    // componentDidUpdate
    if(prevProps && prevProps.activeNotes !== activeNotes) {
      handleNoteChanges({
        prevActiveNotes: prevProps.activeNotes || [],
        nextActiveNotes: activeNotes || [],
      });
     }

  }, [activeNotes]);

  // This function is responsible for diff'ing activeNotes
  // and playing or stopping notes accordingly.
  function handleNoteChanges({ prevActiveNotes, nextActiveNotes }) {
    if (disabled) {
      return;
    }
    const notesStopped = prevActiveNotes.filter(
      (x) => !nextActiveNotes.includes(x)
    ); // difference(prevActiveNotes, nextActiveNotes);
    const notesStarted = nextActiveNotes.filter(
      (x) => !prevActiveNotes.includes(x)
    ); // difference(nextActiveNotes, prevActiveNotes);
    notesStarted.forEach((midiNumber: MidiNumber) => {
      playNote(midiNumber);
    });
    notesStopped.forEach((midiNumber: MidiNumber) => {
      stopNote(midiNumber);
    });
  }

  function getMidiNumberForKey(key) {
    if (!keyboardShortcuts) {
      return null;
    }
    const shortcut = keyboardShortcuts.find((sh) => sh.key === key);
    return shortcut && shortcut.midiNumber;
  }

  function getKeyForMidiNumber(midiNumber: MidiNumber) {
    if (!keyboardShortcuts) {
      return null;
    }
    const shortcut = keyboardShortcuts.find(
      (sh) => sh.midiNumber === midiNumber
    );
    return shortcut && shortcut.key;
  }

  function onKeyDown(event) {
    // Don't conflict with existing combinations like ctrl + t
    if (event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }
    const midiNumber = getMidiNumberForKey(event.key);
    if (midiNumber) {
      onPlayNoteInput(midiNumber);
    }
  }

  function onKeyUp(event) {
    // This *should* also check for event.ctrlKey || event.metaKey || event.ShiftKey like onKeyDown does,
    // but at least on Mac Chrome, when mashing down many alphanumeric keystrokes at once,
    // ctrlKey is fired unexpectedly, which would cause onStopNote to NOT be fired, which causes problematic
    // lingering notes. Since it's fairly safe to call onStopNote even when not necessary,
    // the ctrl/meta/shift check is removed to fix that issue.
    const midiNumber = getMidiNumberForKey(event.key);
    if (midiNumber) {
      onStopNoteInput(midiNumber);
    }
  }

  function handleOnPlayNoteInput(midiNumber: MidiNumber) {
    if (disabled) {
      return;
    }
    // Pass in previous activeNotes for recording functionality
    onPlayNoteInput(midiNumber, activeNotes);
  }

  function handleOnStopNoteInput(midiNumber: MidiNumber) {
    if (disabled) {
      return;
    }
    // Pass in previous activeNotes for recording functionality
    onStopNoteInput(midiNumber, activeNotes);
  }

  function onMouseDown() {
    setIsMouseDown(true);
  }

  function onMouseUp() {
    setIsMouseDown(false);
  }

  function onTouchStart() {
    setUseTouchEvents(true);
  }

  function handleRenderNoteLabel({ midiNumber, isActive, isAccidental }) {
    const keyboardShortcut = getKeyForMidiNumber(midiNumber);
    return renderNoteLabel({
      keyboardShortcut,
      midiNumber,
      isActive,
      isAccidental,
    });
  }

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      data-testid="container"
    >
      <Keyboard
        noteRange={noteRange}
        onPlayNoteInput={handleOnPlayNoteInput}
        onStopNoteInput={handleOnStopNoteInput}
        activeNotes={activeNotes}
        className={className}
        disabled={disabled}
        width={width}
        keyWidthToHeight={keyWidthToHeight}
        gliss={isMouseDown}
        useTouchEvents={useTouchEvents}
        renderNoteLabel={handleRenderNoteLabel}
        noteClasses={noteClasses}
      />
    </div>
  );
};

export default ControlledPiano;
