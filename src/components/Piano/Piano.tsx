// From https://github.com/kevinsqi/react-piano

import React from "react";
import ControlledPiano from "./ControlledPiano";

import { NoteClasses, MidiNumber } from "utils/types";

type Props = {
  noteRange: object;
  activeNotes?: number[];
  playNote: (midiNumber: MidiNumber) => void;
  stopNote: (midiNumber: MidiNumber) => void;
  onPlayNoteInput?: () => void;
  onStopNoteInput?: () => void;
  renderNoteLabel?: ({ keyboardShortcut, midiNumber, isActive, isAccidental, }: { keyboardShortcut: any; midiNumber: any; isActive: any; isAccidental: any; }) => JSX.Element;
  className?: string;
  noteClasses?: NoteClasses;
  disabled?: boolean;
  width?: number;
  keyWidthToHeight?: number;
  keyboardShortcuts?: {
    key: string;
    midiNumber: number;
  }[];
};

class Piano extends React.Component<Props> {
  state = {
    activeNotes: this.props.activeNotes || [],
  };

  componentDidUpdate(prevProps) {
    // Make activeNotes "controllable" by using internal
    // state by default, but allowing prop overrides.
    if (
      prevProps.activeNotes !== this.props.activeNotes &&
      this.state.activeNotes !== this.props.activeNotes
    ) {
      this.setState({
        activeNotes: this.props.activeNotes || [],
      });
    }
  }

  handlePlayNoteInput = (midiNumber: MidiNumber) => {
    this.setState((prevState) => {
      // Need to be handled inside setState in order to set prevActiveNotes without
      // race conditions.
      if (this.props.onPlayNoteInput) {
        this.props.onPlayNoteInput(midiNumber, {
          prevActiveNotes: prevState.activeNotes,
        });
      }

      // Don't append note to activeNotes if it's already present
      if (prevState.activeNotes.includes(midiNumber)) {
        return null;
      }
      return {
        activeNotes: prevState.activeNotes.concat(midiNumber),
      };
    });
  };

  handleStopNoteInput = (midiNumber: MidiNumber) => {
    this.setState((prevState) => {
      // Need to be handled inside setState in order to set prevActiveNotes without
      // race conditions.
      if (this.props.onStopNoteInput) {
        this.props.onStopNoteInput(midiNumber, {
          prevActiveNotes: this.state.activeNotes,
        });
      }
      return {
        activeNotes: prevState.activeNotes.filter(
          (note) => midiNumber !== note
        ),
      };
    });
  };

  render() {
    const {
      activeNotes,
      onPlayNoteInput,
      onStopNoteInput,
      noteClasses,
      ...otherProps
    } = this.props;
    return (
      <ControlledPiano
        activeNotes={this.state.activeNotes}
        noteClasses={noteClasses}
        onPlayNoteInput={this.handlePlayNoteInput}
        onStopNoteInput={this.handleStopNoteInput}
        {...otherProps}
      />
    );
  }
}

export default Piano;
