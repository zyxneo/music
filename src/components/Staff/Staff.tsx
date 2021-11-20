import React, { useEffect, useState } from "react";
import classNames from "classnames";

import TrebleClef from "components/SVGs/TrebleClef";
import BassCleff from "components/SVGs/BassCleff";
import GrandStaffBrace from "components/SVGs/GrandStaffBrace";
import WholeNote from "components/SVGs/WholeNote";
import Sharp from "components/SVGs/Sharp";
import Flat from "components/SVGs/Flat";

import "./staff.css";

type Props = { 
  note: {
    noteIndex: number; cleff: "treble" | "bass" 
  }};
// https://commons.wikimedia.org/wiki/Category:Musical_score_components
// https://commons.wikimedia.org/wiki/Template:Music

const Staff = (props: Props) => {
  const { note } = props;
  const { noteIndex = 0, cleff = "treble" } = note;
  console.log(noteIndex, cleff)
  const staffUnit = 5; // distance of note steps on the staff svg

  const noteX = 200; // 242;
  const noteWidth = staffUnit * 3;
  const braceWidth = staffUnit * 3;
  const lineX1 = braceWidth;
  const lineX2 = 500;
  const ledgerX1 = noteX - staffUnit;
  const ledgerX2 = noteX + noteWidth + staffUnit;

  const renderNote = function ({
    x,
    noteIndex,
    cleff,
  }: {
    x: number;
    noteIndex: number;
    cleff: "treble" | "bass";
  }) {
    // notes on the  bass staff are 50 unit lower
    const trebleCorrection = cleff === "bass" ? staffUnit * 10 : 0;
    const y = staffUnit * noteIndex + trebleCorrection;

    return (
      <>
        <use xlinkHref="#wholeNote" height={staffUnit * 2} x={x} y={y}></use>

        <use
          display="none"
          xlinkHref="#flat"
          className="flat"
          x={x - staffUnit * 3}
          y={y - staffUnit * 4}
        ></use>
      </>
    );
  };

  return (
    <div className="staff">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="staff"
        height="400"
        width="800"
        version="1.1"
        viewBox="200 0 100 250"
      >
        <symbol id="sharp">
          <Sharp />
        </symbol>
        <symbol id="flat">
          <Flat />
        </symbol>
        <symbol id="trebleCleff">
          <TrebleClef />
        </symbol>
        <symbol id="bassCleff">
          <BassCleff />
        </symbol>
        <symbol id="grandStaffBrace">
          <GrandStaffBrace />
        </symbol>
        <symbol id="wholeNote">
          <WholeNote />
        </symbol>
        <symbol id="signatures">
          <g className="sharp-signatures" display="none">
            <use
              xlinkHref="#sharp"
              className="sharp-1"
              x={0}
              y={staffUnit * 6}
            ></use>
            <use
              xlinkHref="#sharp"
              className="sharp-2"
              x={staffUnit * (10 / 6)}
              y={staffUnit * 9}
            ></use>
            <use
              xlinkHref="#sharp"
              className="sharp-3"
              x={staffUnit * (10 / 6) * 2}
              y={staffUnit * 5}
            ></use>
            <use
              xlinkHref="#sharp"
              className="sharp-4"
              x={staffUnit * (10 / 6) * 3}
              y={staffUnit * 8}
            ></use>
            <use
              xlinkHref="#sharp"
              className="sharp-5"
              x={staffUnit * (10 / 6) * 4}
              y={staffUnit * 11}
            ></use>
            <use
              xlinkHref="#sharp"
              className="sharp-6"
              x={staffUnit * (10 / 6) * 5}
              y={staffUnit * 7}
            ></use>
            <use
              xlinkHref="#sharp"
              className="sharp-7"
              x={staffUnit * 10}
              y={staffUnit * 10}
            ></use>
          </g>
          <g className="flat-signatures" display="none">
            <use
              xlinkHref="#flat"
              className="flat-1"
              x={0}
              y={staffUnit * 8}
            ></use>
            <use
              xlinkHref="#flat"
              className="flat-2"
              x={staffUnit * (10 / 6)}
              y={staffUnit * 5}
            ></use>
            <use
              xlinkHref="#flat"
              className="flat-3"
              x={staffUnit * (10 / 6) * 2}
              y={staffUnit * 9}
            ></use>
            <use
              xlinkHref="#flat"
              className="flat-4"
              x={staffUnit * (10 / 6) * 3}
              y={staffUnit * 6}
            ></use>
            <use
              xlinkHref="#flat"
              className="flat-5"
              x={staffUnit * (10 / 6) * 4}
              y={staffUnit * 10}
            ></use>
            <use
              xlinkHref="#flat"
              className="flat-6"
              x={staffUnit * (10 / 6) * 5}
              y={staffUnit * 7}
            ></use>
            <use
              xlinkHref="#flat"
              className="flat-7"
              x={staffUnit * 10}
              y={staffUnit * 11}
            ></use>
          </g>
        </symbol>
        <g className="treble">
          <g className="ledger">
            <line
              className="line l4"
              x1={ledgerX1}
              y1={staffUnit}
              x2={ledgerX2}
              y2={staffUnit}
            ></line>
            <line
              className="line l3"
              x1={ledgerX1}
              y1={staffUnit * 3}
              x2={ledgerX2}
              y2={staffUnit * 3}
            ></line>
            <line
              className="line l2"
              x1={ledgerX1}
              y1={staffUnit * 5}
              x2={ledgerX2}
              y2={staffUnit * 5}
            ></line>
            <line
              className="line l1"
              x1={ledgerX1}
              y1={staffUnit * 7}
              x2={ledgerX2}
              y2={staffUnit * 7}
            ></line>
          </g>
          <line
            className="line"
            x1={lineX1}
            y1={staffUnit * 9}
            x2={lineX2}
            y2={staffUnit * 9}
          ></line>
          <line
            className="line"
            x1={lineX1}
            y1={staffUnit * 11}
            x2={lineX2}
            y2={staffUnit * 11}
          ></line>
          <line
            className="line"
            x1={lineX1}
            y1={staffUnit * 13}
            x2={lineX2}
            y2={staffUnit * 13}
          ></line>
          <line
            className="line"
            x1={lineX1}
            y1={staffUnit * 15}
            x2={lineX2}
            y2={staffUnit * 15}
          ></line>
          <line
            className="line"
            x1={lineX1}
            y1={staffUnit * 17}
            x2={lineX2}
            y2={staffUnit * 17}
          ></line>
          <g className="ledger">
            <line
              className="line l-1"
              x1={ledgerX1}
              y1={staffUnit * 19}
              x2={ledgerX2}
              y2={staffUnit * 19}
            ></line>
            <line
              className="line l-2"
              x1={ledgerX1}
              y1={staffUnit * 21}
              x2={ledgerX2}
              y2={staffUnit * 21}
            ></line>
            <line
              className="line l-3"
              x1={ledgerX1}
              y1={staffUnit * 23}
              x2={ledgerX2}
              y2={staffUnit * 23}
            ></line>
          </g>
          <use
            xlinkHref="#trebleCleff"
            x={staffUnit * -2.5}
            y={staffUnit * 6 - (staffUnit / 5) * 1}
            height={staffUnit * 15}
          ></use>
          <use xlinkHref="#signatures" x={staffUnit * 12}></use>
        </g>
        <g className="bass">
          <g className="ledger">
            <line
              className="line l4"
              x1={ledgerX1}
              y1={staffUnit}
              x2={ledgerX2}
              y2={staffUnit}
            ></line>
            <line
              className="line l3"
              x1={ledgerX1}
              y1={staffUnit * 25}
              x2={ledgerX2}
              y2={staffUnit * 25}
            ></line>
            <line
              className="line l2"
              x1={ledgerX1}
              y1={staffUnit * 27}
              x2={ledgerX2}
              y2={staffUnit * 27}
            ></line>
            <line
              className="line l1"
              x1={ledgerX1}
              y1={staffUnit * 29}
              x2={ledgerX2}
              y2={staffUnit * 29}
            ></line>
          </g>
          <line
            className="line"
            x1={lineX1}
            y1={staffUnit * 31}
            x2={lineX2}
            y2={staffUnit * 31}
          ></line>
          <line
            className="line"
            x1={lineX1}
            y1={staffUnit * 33}
            x2={lineX2}
            y2={staffUnit * 33}
          ></line>
          <line
            className="line"
            x1={lineX1}
            y1={staffUnit * 35}
            x2={lineX2}
            y2={staffUnit * 35}
          ></line>
          <line
            className="line"
            x1={lineX1}
            y1={staffUnit * 37}
            x2={lineX2}
            y2={staffUnit * 37}
          ></line>
          <line
            className="line"
            x1={lineX1}
            y1={staffUnit * 39}
            x2={lineX2}
            y2={staffUnit * 39}
          ></line>
          <g className="ledger">
            <line
              className="line l-1"
              x1={ledgerX1}
              y1={staffUnit * 41}
              x2={ledgerX2}
              y2={staffUnit * 41}
            ></line>
            <line
              className="line l-2"
              x1={ledgerX1}
              y1={staffUnit * 43}
              x2={ledgerX2}
              y2={staffUnit * 43}
            ></line>
            <line
              className="line l-3"
              x1={ledgerX1}
              y1={staffUnit * 45}
              x2={ledgerX2}
              y2={staffUnit * 45}
            ></line>
          </g>

          <use
            xlinkHref="#bassCleff"
            height={staffUnit * 15}
            x={staffUnit * -2.5}
            y={staffUnit * 27}
          ></use>

          <use
            xlinkHref="#signatures"
            x={staffUnit * 12}
            y={staffUnit * 22}
          ></use>
        </g>
        <g className="bars">
          <use
            xlinkHref="#grandStaffBrace"
            height={staffUnit * 30}
            width={braceWidth}
            x={lineX1 - braceWidth}
            y={staffUnit * 9}
          ></use>
          <line
            className="line"
            x1={lineX1}
            y1={staffUnit * 9}
            x2={lineX1}
            y2={staffUnit * 39}
          ></line>
          <line
            className="line"
            x1={lineX2 - staffUnit}
            y1={staffUnit * 9}
            x2={lineX2 - staffUnit}
            y2={staffUnit * 39}
          ></line>
          <rect
            x={lineX2 - staffUnit / 2}
            y={staffUnit * 9}
            width={staffUnit / 2}
            height={staffUnit * 30}
            stroke="none"
          />
        </g>
        {renderNote({ x: noteX, noteIndex, cleff })}
      </svg>
    </div>
  );
};

export default Staff;
