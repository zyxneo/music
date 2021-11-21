import { FormattedMessage } from "gatsby-plugin-intl";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import WebMidi, { Input } from "webmidi";

import { Layout, SEO, Staff } from "components";
import { midiKeyNames } from "utils/midi";
import classNames from "classnames";

import "./notes-on-the-staff.css";

// https://commons.wikimedia.org/wiki/Category:Musical_score_components
// https://commons.wikimedia.org/wiki/Template:Music

const IndexPage = () => {
  const [inputDeviceList, setInputDeviceList] = useState([] as Input[]);
  const [selectedInputId, setSelectedInputId] = useState(
    Cookies.get("selectedMidiInputDevice")
  );
  const [input, setInput] = useState(false);
  const [midiEnabled, setMidiEnabled] = useState(false);
  const [midiNote, setMidiNote] = useState("");
  const [requestedKey, setRequestedKey] = useState("");
  const [randomNote, setRandomNote] = useState({});
  const [successState, setSuccessState] = useState(false);
  const [practiceCount, setPracticeCount] = useState(0);

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

  function getRandomNote({ scale, cleff }) {
    let minIndex = 6; // index of the note on the staff svg, from top to bottom
    let maxIndex = 18;

    if (cleff === "bass") {
      minIndex = 13; // index of the note on the staff svg, from top to bottom
      maxIndex = 34;
    }
    const randomIndex = Math.floor(
      Math.random() * (maxIndex - minIndex + 1) + minIndex
    );
    const keyIndex = startIndex - randomIndex;
    const octave = Math.floor(keyIndex / 7) - 2;
    const noteKeyName = scale[keyIndex % 7];
    setRequestedKey(noteKeyName + octave);
    setRandomNote({ noteIndex: randomIndex, cleff });
  }

  function createTask() {
    setPracticeCount(practiceCount + 1);

    const scale = getScaleKeyNames(scaleCMajor); // TODO make it dynamic

    const randomCleff = Math.random() > 0.5 ? "treble" : "bass";
    getRandomNote({ scale, cleff: randomCleff });
  }

  useEffect(() => {
    // TODO if the random note is the same, no update happens
    if (requestedKey === midiNote) {
      setSuccessState(true);
    } else {
      setSuccessState(false);
    }
  }, [successState]);

  useEffect(() => {
    // TODO if the random note is the same, no update happens
    if (requestedKey === midiNote) {
      createTask();
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

      // Reacting when a new device becomes available
      WebMidi.addListener("connected", function (e) {
        // console.log("connected", e.port.name, WebMidi.inputs);

        if (selectedInputId) {
          // console.log("setInputDevice on connected", selectedInputId);
          setInputDevice(selectedInputId);
        }

        setInputDeviceList((e) => {
          // console.log('setInputDeviceList', e)
          return WebMidi.inputs
        });
      });

      // Reacting when a device becomes unavailable
      WebMidi.addListener("disconnected", function (e) {
        // TODO display warning
        setInputDeviceList(WebMidi.inputs);
        // console.log("disconnected ");
        // console.log(e, WebMidi.inputs);
      });

    });
  }, []);

  function setInputDevice(inputId: string) {
    Cookies.set("selectedMidiInputDevice", inputId, { expires: 365 });
    setSelectedInputId(inputId);

    const input = WebMidi.getInputById(inputId);

    if (input) {
      setInput(input);
      // console.log("addListener set on ", input);
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
        <Staff note={randomNote} />
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
                  checked={device.id === selectedInputId}
                  onChange={() => setInputDevice(device.id)}
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
