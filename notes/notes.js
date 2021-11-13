// https://commons.wikimedia.org/wiki/Category:Musical_score_components
// https://commons.wikimedia.org/wiki/Template:Music

const note = document.getElementById("note");
const requestedKeyName = document.getElementsByClassName("requestedKeyName")[0];
const result = document.getElementsByClassName("result")[0];
let requestedKey = "";

const staffUnit = 5; // distance of note steps on the staff svg
const minIndex = 6; // index of the note on the staff svg, from top to bottom
const maxIndex = 18;
const startIndex = 53;

const midiKeyNames = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

const octaves = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const scaleCMajor = {
  midiKey: "C",
  steps: [2, 2, 1, 2, 2, 2, 1],
};
const scaleGMajor = {
  midiKey: "G",
  steps: [2, 2, 1, 2, 2, 2, 1],
};

// const keyboardKeyNames = octaves
//   .map((octave) => {
//     return midiKeyNames.map((key) => {
//       return key + octave;
//     });
//   })
//   .flat();

function getOrderedKeyNames(midiKey) {
  const sliceIndex = midiKeyNames.indexOf(midiKey);
  const endindex = midiKeyNames.length;
  const orderedKeyNames = midiKeyNames.slice(sliceIndex, endindex);
  return orderedKeyNames.concat(...midiKeyNames.slice(0, sliceIndex));
}

function getScaleKeyNames(scale) {
  const keys = [scale.midiKey]; // TODO add proper indexing
  const orderedKeyNames = getOrderedKeyNames(scale.midiKey);
  scale.steps.reduce((previousValue, currentValue, currentIndex, array) => {
    keys.push(orderedKeyNames[previousValue]);
    return previousValue + currentValue;
  });
  return keys;
}
console.log(getScaleKeyNames(scaleCMajor));
console.log(getScaleKeyNames(scaleGMajor));

function getRandomNote() {
  const randomIndex = Math.floor(
    Math.random() * (maxIndex - minIndex + 1) + minIndex
  );
  const scale = getScaleKeyNames(scaleCMajor); // TODO make it dynamic
  const keyIndex = startIndex - randomIndex;
  const octave = Math.floor(keyIndex / 7) - 1;
  const keyName = scale[keyIndex % 7];
  requestedKey = keyName + octave;
  requestedKeyName.innerHTML = requestedKey;
  note.setAttribute("y", staffUnit * randomIndex);
}

function createTask() {
  getRandomNote();
}
createTask();

WebMidi.enable(function (err) {
  if (err) {
    console.log("WebMidi could not be enabled.", err);
  } else {
    console.log("WebMidi enabled!");
    createTask();
  }
  // Viewing available inputs and outputs
  console.log(WebMidi.inputs);
  console.log(WebMidi.outputs);

  // Reacting when a new device becomes available
  WebMidi.addListener("connected", function (e) {
    // console.log(e);
  });

  // Reacting when a device becomes unavailable
  WebMidi.addListener("disconnected", function (e) {
    // console.log(e);
  });

  // Display the current time
  // console.log(WebMidi.time);

  const lastKeyName = document.getElementsByClassName("lastKeyName")[0];
  function setInput(inputName) {
    var input = WebMidi.getInputByName(inputName);

    input.addListener("noteon", "all", function (e) {
      // console.log(e);
      const keyName = e.note.name + e.note.octave;
      console.log(requestedKey === keyName);
      result.innerHTML = requestedKey === keyName ? "success" : "error";
      result.className =
        requestedKey === keyName ? "result success" : "result error";
      lastKeyName.innerHTML = keyName;
      createTask();
    });
  }

  const devices = [];
  const deviceList = document.getElementsByClassName("deviceList")[0];

  WebMidi.inputs.map((device) => {
    const deviceWrapper = document.createElement("div");
    const deviceTitle = document.createTextNode(device.name);
    deviceWrapper.appendChild(deviceTitle);
    deviceWrapper.addEventListener(
      "click",
      function () {
        setInput(device.name);
      },
      false
    );
    deviceList.appendChild(deviceWrapper);
  });
});
