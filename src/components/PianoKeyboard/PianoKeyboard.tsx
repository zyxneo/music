import React from "react";

import "./PianoKeyboard.css";

// These 3 values can be changed
const whiteKeyHeight = 400;
const whiteKeyWidth = 80;
const blackKeyHeight = whiteKeyHeight * (5 / 8);

// The rest is calculated.
const blackKeyWidth = (whiteKeyWidth * 4) / 7; // From "F" to "B" ther is 4 white and within that 3 black keys. So the width of the 7 white-black units must be the same like 4 white keys. whiteKeyWidth * 4 = 7x;

const CSharpXTranspose = (whiteKeyWidth * 3) / 5;
const DSharpXTranspose = ((whiteKeyWidth * 3) / 5) * 3;
const FSharpXTranspose = whiteKeyWidth * 3 + blackKeyWidth;
const GSharpXTranspose = whiteKeyWidth * 3 + blackKeyWidth * 3;
const ASharpXTranspose = whiteKeyWidth * 3 + blackKeyWidth * 5;

const dotMarkerRadius = blackKeyWidth * 0.7;

const PianoKeyboardOctave = ({ octave = 3 }) => {
  return (
    <g transform={`translate(${(octave - 1) * 7 * whiteKeyWidth}, 0)`}>
      <PianoKeyboardC octave={3} />
      <rect
        data-doubleFlatName={`Ebb${octave}`}
        data-doubleSharpName={`C##${octave}`}
        data-noteName={`D${octave}`}
        x={whiteKeyWidth}
        y="0"
        width={whiteKeyWidth}
        height={whiteKeyHeight}
        className="key--white"
      ></rect>
      <rect
        data-doubleSharpName={`D##${octave}`}
        data-enharmonicName={`Fb${octave}`}
        data-noteName={`E${octave}`}
        x={whiteKeyWidth * 2}
        y="0"
        width={whiteKeyWidth}
        height={whiteKeyHeight}
        className="key--white"
      ></rect>
      <rect
        data-doubleFlatName={`Gbb${octave}`}
        data-enharmonicName={`E#${octave}`}
        data-noteName={`F${octave}`}
        x={whiteKeyWidth * 3}
        y="0"
        width={whiteKeyWidth}
        height={whiteKeyHeight}
        className="key--white"
      ></rect>
      <rect
        data-doubleFlatName={`Abb${octave}`}
        data-doubleSharpName={`F##${octave}`}
        data-noteName={`G${octave}`}
        x={whiteKeyWidth * 4}
        y="0"
        width={whiteKeyWidth}
        height={whiteKeyHeight}
        className="key--white"
      ></rect>
      <rect
        data-doubleFlatName={`Bbb${octave}`}
        data-doubleSharpName={`G##${octave}`}
        data-noteName={`A${octave}`}
        x={whiteKeyWidth * 5}
        y="0"
        width={whiteKeyWidth}
        height={whiteKeyHeight}
        className="key--white"
      ></rect>
      <rect
        data-doubleSharpName={`A##${octave}`}
        data-enharmonicName={`Cb${octave + 1}`}
        data-noteName={`B${octave}`}
        x={whiteKeyWidth * 6}
        y="0"
        width={whiteKeyWidth}
        height={whiteKeyHeight}
        className="key--white"
      ></rect>
      <rect
        data-flatName={`Db${octave}`}
        data-sharpName={`C#${octave}`}
        data-noteName={`C#${octave}`}
        x={CSharpXTranspose}
        y="0"
        width={blackKeyWidth}
        height={blackKeyHeight}
        className="key--black"
      ></rect>
      <rect
        data-flatName={`Eb${octave}`}
        data-sharpName={`D#${octave}`}
        data-doubleFlatSpecial={`Fbb${octave}`}
        data-noteName={`D#${octave}`}
        x={DSharpXTranspose}
        y="0"
        width={blackKeyWidth}
        height={blackKeyHeight}
        className="key--black"
      ></rect>
      <rect
        data-flatName={`Gb${octave}`}
        data-sharpName={`F#${octave}`}
        data-noteName={`F#${octave}`}
        x={FSharpXTranspose}
        y="0"
        width={blackKeyWidth}
        height={blackKeyHeight}
        className="key--black"
      ></rect>
      <rect
        data-flatName={`Ab${octave}`}
        data-sharpName={`G#${octave}`}
        data-noteName={`G#${octave}`}
        x={GSharpXTranspose}
        y="0"
        width={blackKeyWidth}
        height={blackKeyHeight}
        className="key--black"
      ></rect>
      <rect
        data-flatName={`Bb${octave}`}
        data-sharpName={`A#${octave}`}
        data-doubleFlatSpecial={`Cbb${octave + 1}`}
        data-noteName={`A#${octave}`}
        x={ASharpXTranspose}
        y="0"
        width={blackKeyWidth}
        height={blackKeyHeight}
        className="key--black"
      ></rect>
    </g>
  );
};

const PianoKeyboardC = ({ octave = 3 }) => {
  return (
      <rect
        data-doubleFlatName={`Dbb${octave}`}
        data-enharmonicName={`B#${octave}`}
        data-noteName={`C${octave}`}
        x="0"
        y="0"
        width={whiteKeyWidth}
        height={whiteKeyHeight}
        className="key--white"
        rx="15"
        ry="5"
      ></rect>
  );
};

const DotMarker = ({
  label,
  position = 60,
}: {
  label: string;
  position: number;
}) => {
  return (
    <g transform="translate(1160, 360)" className="key__dotMarker">
      <circle r={dotMarkerRadius}></circle>
      <text text-anchor="middle" dominant-baseline="central">
        {label}
      </text>
    </g>
  );
};

const PianoKeyboard = ({
  startOctave = 1,
  octaves = 6,
}: {
  startOctave: number;
  octaves: number;
}) => {
  const viewBoxX = whiteKeyWidth * 7 * (startOctave - 1);
  const viewBoxWidth = whiteKeyWidth * 7 * octaves + whiteKeyWidth; // 7 white keys per octave * x octave + one white "C" key
  return (
    <div>
      <svg
        className="PianoKeyboard"
        viewBox={`${viewBoxX} 0 ${viewBoxWidth} ${whiteKeyHeight}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="piano">
          {[...Array(octaves)].map((e, octave) => {
            return <PianoKeyboardOctave octave={startOctave + octave} />;
          })}
          <g transform={`translate(${(startOctave + octaves - 1) * 7 * whiteKeyWidth}, 0)`}>
          <PianoKeyboardC octave={octaves} />
          </g>
        </g>
        <DotMarker label="C" />
        <g transform="translate(1200, 210)" className="dot">
          <circle
            r="32"
            fill="#58D68D"
            stroke="#28B463"
            stroke-width="4"
          ></circle>
          <text
            text-anchor="middle"
            dominant-baseline="central"
            style={{
              fontSize: "32px",
              fill: "rgb(85, 85, 85)",
            }}
          >
            Db
          </text>
        </g>
      </svg>
    </div>
  );
};

export default PianoKeyboard;
