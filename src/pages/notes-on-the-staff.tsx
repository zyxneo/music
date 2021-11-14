import { FormattedMessage } from "gatsby-plugin-intl";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import WebMidi, { Input } from "webmidi";

import { Layout, SEO } from "components";
import { midiKeyNames } from "utils/midi";
import classNames from "classnames";

import trebleClef from "images/staff/trebleClef.svg";
import wholeNote from "images/staff/wholeNote.svg";

import "./notes-on-the-staff.css";

// https://commons.wikimedia.org/wiki/Category:Musical_score_components
// https://commons.wikimedia.org/wiki/Template:Music

const IndexPage = () => {
  const [inputDeviceList, setInputDeviceList] = useState([] as Input[]);
  const [selectedInputDevice, setSelectedInputDevice] = useState(
    Cookies.get("selectedMidiInputDevice")
  );
  const [midiEnabled, setMidiEnabled] = useState(false);
  const [midiNote, setMidiNote] = useState("");
  const [requestedKey, setRequestedKey] = useState("");
  const [randomIndex, setRandomIndex] = useState(0);
  const [successState, setSuccessState] = useState(false);
  const [practiceCount, setPracticeCount] = useState(0);

  const staffUnit = 5; // distance of note steps on the staff svg
  const minIndex = 6; // index of the note on the staff svg, from top to bottom
  const maxIndex = 18;
  const startIndex = 53;

  const scaleCMajor = {
    midiKey: "C",
    steps: [2, 2, 1, 2, 2, 2, 1],
  };
  const scaleGMajor = {
    midiKey: "G",
    steps: [2, 2, 1, 2, 2, 2, 1],
  };

  function getOrderedKeyNames(midiKey) {
    const sliceIndex = midiKeyNames.indexOf(midiKey);
    const endindex = midiKeyNames.length;
    const orderedKeyNames = midiKeyNames.slice(sliceIndex, endindex);
    return orderedKeyNames.concat(...midiKeyNames.slice(0, sliceIndex));
  }

  function getScaleKeyNames(scale) {
    const keys = [scale.midiKey]; // TODO add proper indexing
    const orderedKeyNames = getOrderedKeyNames(scale.midiKey);
    scale.steps.reduce((previousValue, currentValue) => {
      keys.push(orderedKeyNames[previousValue]);
      return previousValue + currentValue;
    });
    return keys;
  }

  function getRandomNote() {
    const randomIndex = Math.floor(
      Math.random() * (maxIndex - minIndex + 1) + minIndex
    );
    const scale = getScaleKeyNames(scaleCMajor); // TODO make it dynamic
    const keyIndex = startIndex - randomIndex;
    const octave = Math.floor(keyIndex / 7) - 1;
    const noteKeyName = scale[keyIndex % 7];
    setRequestedKey(noteKeyName + octave);
    setRandomIndex(randomIndex);
  }

  function createTask() {
    setPracticeCount(practiceCount + 1);
    getRandomNote();
  }

  useEffect(() => {
    // TODO if the random note is the same, no update happens
    if (requestedKey === midiNote) {
      createTask();
      setSuccessState(true);
    } else {
      setSuccessState(false);
    }
  }, [midiNote, practiceCount]);

  useEffect(() => {
    WebMidi.enable(function (err) {
      if (err) {
        console.log("WebMidi could not be enabled.", err);
      } else {
        console.log("WebMidi enabled!");
        setMidiEnabled(true);
        createTask();
      }
      // Viewing available inputs and outputs
      if (WebMidi.inputs.length) {
        // TODO temp
        setInputDeviceList(WebMidi.inputs);
      }
      // console.log(WebMidi.outputs);

      // Reacting when a new device becomes available
      WebMidi.addListener("connected", function (e) {
        if (selectedInputDevice) {
          setInput(selectedInputDevice);
        }
        // console.log("connected", e.port.name);
      });

      // Reacting when a device becomes unavailable
      WebMidi.addListener("disconnected", function (e) {
        // TODO display warning
        // console.log(e);
      });

      // Display the current time
      // console.log(WebMidi.time);
    });
  }, [inputDeviceList]);

  function setInput(inputId: string) {
    Cookies.set("selectedMidiInputDevice", inputId, { expires: 365 });

    var input = WebMidi.getInputById(inputId);
    setSelectedInputDevice(inputId);

    if (input && midiEnabled) {
      input.addListener("noteon", "all", function (e) {
        console.log(e);
        // TODO all props, array of keys
        // keyName = e.note.name + e.note.octave;
        setMidiNote(e.note.name + e.note.octave);
      });
    }
  }

  if (!midiEnabled) {
    return <div>Error TODO</div>;
  }

  return (
    <Layout className="home">
      <SEO title="TODO" />
      <h1>learn notes</h1>

      <section className="staff">
        <div className="requestedKeyName">
          <FormattedMessage
            id="staff.requestedKey"
            defaultMessage="Requested Key"
          />
          <span className="keyName">{requestedKey}</span>
        </div>
        <div className="lastKeyName">
          <FormattedMessage
            id="staff.pressedKey"
            defaultMessage="Pressed Key"
          />
          <span className="keyName">{midiNote}</span>
        </div>
        <div className="practiceCount">
          <FormattedMessage
            id="staff.pressedKey"
            defaultMessage="Pressed Key"
          />
          <span className="counter">{practiceCount}</span>
        </div>
        <div className="staff">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            id="bassClef"
            height="400"
            width="100%"
            version="1.1"
            viewBox="200 0 100 250"
          >
            <line className="line" x1="0" y1="45" x2="500" y2="45"></line>
            <line className="line" x1="0" y1="55" x2="500" y2="55"></line>
            <line className="line" x1="0" y1="65" x2="500" y2="65"></line>
            <line className="line" x1="0" y1="75" x2="500" y2="75"></line>
            <line className="line" x1="0" y1="85" x2="500" y2="85"></line>
            <image
              xlinkHref={trebleClef}
              height="75"
              width="44"
              x="0"
              y="30"
            ></image>
            <image
              id="note"
              xlinkHref={wholeNote}
              height="10"
              width="15"
              x="242"
              y={staffUnit * randomIndex}
            ></image>
          </svg>
        </div>
        <div
          className={classNames(
            "result",
            successState ? "success" : "result error"
          )}
        >
          {successState ? "success" : "error"}
        </div>
      </section>
      <section className="devices">
        <h3>Available devices</h3>
        <div className="inputDeviceList">
          {inputDeviceList.map((device) => {
            return (
              <div
                className="inputDeviceList__item"
                key={device.id}
                id={device.id}
              >
                <input
                  type="radio"
                  id={device.name}
                  name="midiInput"
                  value={device.id}
                  checked={device.id === selectedInputDevice}
                  onChange={() => setInput(device.id)}
                />
                <label htmlFor={device.name}>{device.name}</label>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
