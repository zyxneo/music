import React from "react";
import classNames from "classnames";
import { midiKeyNames } from "utils/midi";
import { MidiKeyName } from "utils/types";

import "./PianoKeyboard.css";

// These 6 values can be changed
export const whiteKeyHeight = 400; // squeze keyboard with this value
export const whiteKeyWidth = 80;
export const blackKeyHeight = whiteKeyHeight * (5 / 8);
const rX = 10;
const rY = 10;
export const strokeWidth = 2; // correction for viewBox, but value must be changed in CSS
const blackPaddingX = 10;
const blackPaddingY = 10;

// The rest is calculated.
export const blackKeyWidth = (whiteKeyWidth * 4) / 7; // From "F" to "B" ther is 4 white and within that 3 black keys. So the width of the 7 white-black units must be the same like 4 white keys. whiteKeyWidth * 4 = 7x where x is the blackKeyWidth;

const CSharpXTranspose = (whiteKeyWidth * 3) / 5;
const FSharpXTranspose = whiteKeyWidth * 3 + blackKeyWidth;
const GSharpXTranspose = whiteKeyWidth * 3 + blackKeyWidth * 3;
const ASharpXTranspose = whiteKeyWidth * 3 + blackKeyWidth * 5;

const keyProportions = [
  whiteKeyWidth / 2, // C
  CSharpXTranspose + blackKeyWidth / 2, // C#
  whiteKeyWidth + whiteKeyWidth / 2, // D
  CSharpXTranspose * 3 + blackKeyWidth / 2, // D#
  whiteKeyWidth * 2 + whiteKeyWidth / 2, // E
  whiteKeyWidth * 3 + whiteKeyWidth / 2, // F
  whiteKeyWidth * 3 + blackKeyWidth + blackKeyWidth / 2, // F#
  whiteKeyWidth * 4 + whiteKeyWidth / 2, // G
  whiteKeyWidth * 3 + blackKeyWidth * 3 + blackKeyWidth / 2, // G#
  whiteKeyWidth * 5 + whiteKeyWidth / 2, // A
  whiteKeyWidth * 3 + blackKeyWidth * 5 + blackKeyWidth / 2, // A#
  whiteKeyWidth * 6 + whiteKeyWidth / 2, // B
];

const dotMarkerRadius = blackKeyWidth * 0.7;

const BlackKey = ({
  octave = 3,
  x = 0,
  noteName = "C#",
}: {
  octave: number;
  x?: number;
  noteName: string;
}) => {
  return (
    <g className={`${noteName + octave}`}>
      <rect
        className="key--black"
        x={x}
        y="0"
        width={blackKeyWidth}
        height={blackKeyHeight}
      ></rect>
      <path
        d={`M ${x + blackPaddingX} 0
        L ${x - blackPaddingX + blackKeyWidth} 0
        L ${x - blackPaddingX + blackKeyWidth} ${
          blackKeyHeight - rY - blackPaddingY
        }
        Q ${x - blackPaddingX + blackKeyWidth} ${
          blackKeyHeight - blackPaddingY
        }, ${x - blackPaddingX + blackKeyWidth - rX} ${
          blackKeyHeight - blackPaddingY
        }
        L ${x + blackPaddingX + rX} ${blackKeyHeight - blackPaddingY}
        Q ${x + blackPaddingX} ${blackKeyHeight - blackPaddingY}, ${
          x + blackPaddingX
        } ${blackKeyHeight - rY - blackPaddingY}
        Z`}
        className="key--blackGlow"
      />
    </g>
  );
};

const PianoKeyboardOctave = ({ octave = 3 }) => {
  return (
    <g
      className="octave"
      transform={`translate(${(octave - 1) * 7 * whiteKeyWidth}, 0)`}
    >
      <PianoKey octave={octave} noteName="C" />
      <PianoKey octave={octave} noteName="D" x={whiteKeyWidth} />
      <PianoKey octave={octave} noteName="E" x={whiteKeyWidth * 2} />
      <PianoKey octave={octave} noteName="F" x={whiteKeyWidth * 3} />
      <PianoKey octave={octave} noteName="G" x={whiteKeyWidth * 4} />
      <PianoKey octave={octave} noteName="A" x={whiteKeyWidth * 5} />
      <PianoKey octave={octave} noteName="B" x={whiteKeyWidth * 6} />
      <BlackKey noteName={`C#`} octave={octave} x={CSharpXTranspose} />
      <BlackKey noteName={`D#`} octave={octave} x={CSharpXTranspose * 3} />
      <BlackKey noteName={`F#`} octave={octave} x={FSharpXTranspose} />
      <BlackKey noteName={`G#`} octave={octave} x={GSharpXTranspose} />
      <BlackKey noteName={`A#`} octave={octave} x={ASharpXTranspose} />
    </g>
  );
};

export const PianoKey = ({
  octave = 3,
  x = 0,
  noteName = "Extra C",
}: {
  octave: number;
  x?: number;
  noteName?: MidiKeyName | "Extra C";
}) => {
  const position = 12 * (octave + 2) + midiKeyNames.indexOf(noteName);

  let path = `M ${x} 0
              L ${x + whiteKeyWidth} 0
              L ${x + whiteKeyWidth} ${whiteKeyHeight - rY}
              Q ${x + whiteKeyWidth} ${whiteKeyHeight}, ${
    x + whiteKeyWidth - rX
  } ${whiteKeyHeight}
              L ${x + rX} ${whiteKeyHeight}
              Q ${x} ${whiteKeyHeight}, ${x} ${whiteKeyHeight - rY}
              Z`;

  switch (noteName) {
    case "C":
      path = `M ${x} 0
              L ${x + CSharpXTranspose} 0
              L ${x + CSharpXTranspose} ${blackKeyHeight}
              L ${x + whiteKeyWidth} ${blackKeyHeight}
              L ${x + whiteKeyWidth} ${whiteKeyHeight - rY}
              Q ${x + whiteKeyWidth} ${whiteKeyHeight}, ${
        x + whiteKeyWidth - rX
      } ${whiteKeyHeight}
              L ${x + rX} ${whiteKeyHeight}
              Q ${x} ${whiteKeyHeight}, ${x} ${whiteKeyHeight - rY}
              Z`;
      break;
    case "D":
      path = `M ${x + (CSharpXTranspose + blackKeyWidth - whiteKeyWidth)} 0
              L ${x + CSharpXTranspose * 3 - whiteKeyWidth} 0
              L ${x + CSharpXTranspose * 3 - whiteKeyWidth} ${blackKeyHeight}
              L ${x + whiteKeyWidth} ${blackKeyHeight}
              L ${x + whiteKeyWidth} ${whiteKeyHeight - rY}
              Q ${x + whiteKeyWidth} ${whiteKeyHeight}, ${
        x + whiteKeyWidth - rX
      } ${whiteKeyHeight}
              L ${x + rX} ${whiteKeyHeight}
              Q ${x} ${whiteKeyHeight}, ${x} ${whiteKeyHeight - rY}
              L ${x} ${blackKeyHeight}
              L ${
                x + (CSharpXTranspose + blackKeyWidth - whiteKeyWidth)
              } ${blackKeyHeight}
              Z`;
      break;
    case "E":
      path = `M ${x + (whiteKeyWidth - CSharpXTranspose)} 0
              L ${x + whiteKeyWidth} 0
              L ${x + whiteKeyWidth} ${whiteKeyHeight - rY}
              Q ${x + whiteKeyWidth} ${whiteKeyHeight}, ${
        x + whiteKeyWidth - rX
      } ${whiteKeyHeight}
              L ${x + rX} ${whiteKeyHeight}
              Q ${x} ${whiteKeyHeight}, ${x} ${whiteKeyHeight - rY}
              L ${x} ${blackKeyHeight}
              L ${x + (whiteKeyWidth - CSharpXTranspose)} ${blackKeyHeight}
              Z`;
      break;
    case "F":
      path = `M ${x} 0
              L ${x + blackKeyWidth} 0
              L ${x + blackKeyWidth} ${blackKeyHeight}
              L ${x + whiteKeyWidth} ${blackKeyHeight}
              L ${x + whiteKeyWidth} ${whiteKeyHeight - rY}
              Q ${x + whiteKeyWidth} ${whiteKeyHeight}, ${
        x + whiteKeyWidth - rX
      } ${whiteKeyHeight}
              L ${x + rX} ${whiteKeyHeight}
              Q ${x} ${whiteKeyHeight}, ${x} ${whiteKeyHeight - rY}
              Z`;
      break;
    case "G":
      path = `M ${x + (blackKeyWidth * 2 - whiteKeyWidth)} 0
              L ${x + blackKeyWidth * 3 - whiteKeyWidth} 0
              L ${x + blackKeyWidth * 3 - whiteKeyWidth} ${blackKeyHeight}
              L ${x + whiteKeyWidth} ${blackKeyHeight}
              L ${x + whiteKeyWidth} ${whiteKeyHeight - rY}
              Q ${x + whiteKeyWidth} ${whiteKeyHeight}, ${
        x + whiteKeyWidth - rX
      } ${whiteKeyHeight}
              L ${x + rX} ${whiteKeyHeight}
              Q ${x} ${whiteKeyHeight}, ${x} ${whiteKeyHeight - rY}
              L ${x} ${blackKeyHeight}
              L ${x + (blackKeyWidth * 2 - whiteKeyWidth)} ${blackKeyHeight}
              Z`;
      break;
    case "A":
      path = `M ${x + (blackKeyWidth * 4 - whiteKeyWidth * 2)} 0
              L ${x + blackKeyWidth * 5 - whiteKeyWidth * 2} 0
              L ${x + blackKeyWidth * 5 - whiteKeyWidth * 2} ${blackKeyHeight}
              L ${x + whiteKeyWidth} ${blackKeyHeight}
              L ${x + whiteKeyWidth} ${whiteKeyHeight - rY}
              Q ${x + whiteKeyWidth} ${whiteKeyHeight}, ${
        x + whiteKeyWidth - rX
      } ${whiteKeyHeight}
              L ${x + rX} ${whiteKeyHeight}
              Q ${x} ${whiteKeyHeight}, ${x} ${whiteKeyHeight - rY}
              L ${x} ${blackKeyHeight}
              L ${x + (blackKeyWidth * 4 - whiteKeyWidth * 2)} ${blackKeyHeight}
              Z`;
      break;
    case "B":
      path = `M ${x + (whiteKeyWidth - blackKeyWidth)} 0
              L ${x + whiteKeyWidth} 0
              L ${x + whiteKeyWidth} ${whiteKeyHeight - rY}
              Q ${x + whiteKeyWidth} ${whiteKeyHeight}, ${
        x + whiteKeyWidth - rX
      } ${whiteKeyHeight}
              L ${x + rX} ${whiteKeyHeight}
              Q ${x} ${whiteKeyHeight}, ${x} ${whiteKeyHeight - rY}
              L ${x} ${blackKeyHeight}
              L ${x + (whiteKeyWidth - blackKeyWidth)} ${blackKeyHeight}
              Z`;
      break;

    default:
      break;
  }

  return (
    <g className={`${noteName + octave} num_${position}`}>
      <path d={path} className="key--white" />
    </g>
  );
};

const KeyMarker = ({
  label,
  position = 60,
  startOctave,
  isDot = false,
}: {
  label: string;
  position: number;
  startOctave: number;
  isDot?: boolean;
}) => {
  const octave = Math.floor(position / 12) - 1; // https://syntheway.com/MIDI_Keyboards_Middle_C_MIDI_Note_Number_60_C4.htm
  const noteNumberInOctave = position % 12;
  let y = whiteKeyHeight - dotMarkerRadius * 1.5;
  const octaveTranslate = (octave) * whiteKeyWidth * 7;

  const x = octaveTranslate + keyProportions[noteNumberInOctave];

  const isBlack = midiKeyNames[noteNumberInOctave].indexOf("#") !== -1;
  if (isBlack) {
    y -= whiteKeyHeight - blackKeyHeight;
  }

  return (
    <g
      transform={`translate(${x}, ${y})`}
      className={classNames("key__marker", {
        "key__marker--dot": isDot,
        "key__marker--black": isBlack,
      })}
    >
      {isDot && <circle r={dotMarkerRadius}></circle>}
      <text textAnchor="middle" dominantBaseline="central">
        {label}
      </text>
    </g>
  );
};

const PianoKeyboard = ({
  startOctave = 1,
  octaves = 3,
}: {
  startOctave?: number;
  octaves?: number;
}) => {
  const viewBoxX = whiteKeyWidth * 7 * (startOctave - 1);
  const viewBoxWidth = whiteKeyWidth * 7 * octaves + whiteKeyWidth; // 7 white keys per octave * x octave + one white "C" key
  return (
    <div>
      <svg
        className="pianoKeyboard"
        viewBox={`${viewBoxX} 0 ${viewBoxWidth} ${
          whiteKeyHeight + strokeWidth
        }`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="piano">
          {[...Array(octaves)].map((e, octave) => {
            return <PianoKeyboardOctave octave={startOctave + octave} />;
          })}
          <g
            transform={`translate(${
              (startOctave + octaves - 1) * 7 * whiteKeyWidth
            }, 0)`}
          >
            <PianoKey octave={octaves} />
          </g>
          <rect
            width={viewBoxWidth}
            height="4"
            className="pianoKeyboard__grandStroke"
            x={viewBoxX}
            y={0}
          ></rect>
        </g>
        <KeyMarker label="C" startOctave={startOctave} position={60} />
        <KeyMarker label="C#" startOctave={startOctave} position={61} />
        <KeyMarker label="D" startOctave={startOctave} position={62} />
        <KeyMarker label="D#" startOctave={startOctave} position={63} isDot/>
        <KeyMarker label="E" startOctave={startOctave} position={64} />
        <KeyMarker label="F" startOctave={startOctave} position={65} />
        <KeyMarker label="F#" startOctave={startOctave} position={66} />
        <KeyMarker label="G" startOctave={startOctave} position={67} isDot/>
        <KeyMarker label="G#" startOctave={startOctave} position={68} />
        <KeyMarker label="A" startOctave={startOctave} position={69} />
        <KeyMarker label="A#" startOctave={startOctave} position={70} />
        <KeyMarker label="B" startOctave={startOctave} position={71} />
      </svg>
    </div>
  );
};

export default PianoKeyboard;
