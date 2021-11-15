import { FormattedMessage } from "gatsby-plugin-intl";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import WebMidi, { Input } from "webmidi";

import { Layout, SEO, Staff } from "components";
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

  const minIndex = 6; // index of the note on the staff svg, from top to bottom
  const maxIndex = 18;
  const startIndex = 60; // For MIDI, middle C is always note number 60 even though it may be another pitch or described by a different octave designation - C3, C4 or C5.
  // MIDI standard is only that note 60 is middle C
  // TODO use midi note numbers instead of note names (octave numbering can differ by manufacturers
  // limit are the 128 notes of MIDI range of 0-127

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
    const octave = Math.floor(keyIndex / 7) - 2;
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

      <section>
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
        <Staff noteIndex={randomIndex} />
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
