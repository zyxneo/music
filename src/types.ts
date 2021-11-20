export type Cleff = "treble" | "bass";

export type Sheet = {
  tempo: number; // bpm
};
export type Staff = {
  cleff: Cleff;
};

export type Bar = {
  tempo?: "4/4" | "2/4" | "3/6";
};

export type Note = {
  noteIndex: number;
};

export type MidiKeyNumber = number;

export type MidiKeyName =
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"
  | "A"
  | "A#"
  | "B";