import React, { useEffect, useState } from "react";
import classNames from "classnames";

import trebleClef from "images/staff/trebleClef.svg";
import bassClef from "images/staff/bassClef.svg";
import grandStaffBrace from "images/staff/grandStaffBrace.svg";
import wholeNote from "images/staff/wholeNote.svg";

import "./staff.css";

type Props = {
  noteIndex?: number;
};
// https://commons.wikimedia.org/wiki/Category:Musical_score_components
// https://commons.wikimedia.org/wiki/Template:Music

const Staff = (props: Props) => {
  const { noteIndex = 0 } = props;
  const staffUnit = 5; // distance of note steps on the staff svg

  const noteX = 200; // 242;
  const noteWidth = staffUnit * 3;
  const braceWidth = staffUnit * 3;
  const lineX1 = braceWidth;
  const lineX2 = 500;
  const ledgerX1 = noteX - staffUnit;
  const ledgerX2 = noteX + noteWidth + staffUnit;
  return (
    <div className="staff">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="bassClef"
        height="400"
        width="800"
        version="1.1"
        viewBox="200 0 100 250"
      >
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
          <image
            xlinkHref={trebleClef}
            height={staffUnit * 15}
            x={lineX1}
            y={staffUnit * 6 - (staffUnit / 5) * 1}
          ></image>
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
          <image
            xlinkHref={bassClef}
            height={staffUnit * 15}
            x={lineX1}
            y={staffUnit * 27}
          ></image>
        </g>
        <g className="bars">

            <image
            className="grandStaffBrace"
            xlinkHref={grandStaffBrace}
            height={staffUnit * 30}
            width={braceWidth}
            x={lineX1 - braceWidth}
            y={staffUnit * 9}
            ></image>
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
          />
        </g>
        <image
          className="note"
          xlinkHref={wholeNote}
          height={staffUnit * 2}
          width={noteWidth}
          x={noteX}
          y={staffUnit * noteIndex}
        ></image>
      </svg>
    </div>
  );
};

export default Staff;
