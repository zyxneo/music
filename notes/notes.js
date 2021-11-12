// https://commons.wikimedia.org/wiki/Category:Musical_score_components
// https://commons.wikimedia.org/wiki/Template:Music

const staffUnit = 5;
const minIndex = 6;
const maxIndex = 18;

const keyNames = [
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

const keyboardKeyNames = octaves
  .map((octave) => {
    return keyNames.map((key) => {
      return key + octave;
    });
  })
  .flat();

console.log(keyboardKeyNames);
WebMidi.enable(function (err) {
  if (err) {
    console.log("WebMidi could not be enabled.", err);
  } else {
    console.log("WebMidi enabled!");
  }
  // Viewing available inputs and outputs
  console.log(WebMidi.inputs);
  console.log(WebMidi.outputs);

  // Reacting when a new device becomes available
  WebMidi.addListener("connected", function (e) {
    console.log(e);
  });

  // Reacting when a device becomes unavailable
  WebMidi.addListener("disconnected", function (e) {
    console.log(e);
  });

  // Display the current time
  console.log(WebMidi.time);

  const note = document.getElementById("note");
  function createTask() {
    const randomIndex = Math.floor(
      Math.random() * (maxIndex - minIndex + 1) + minIndex
    );

    note.setAttribute("y", staffUnit * randomIndex);
  }

  const lastKeyName = document.getElementsByClassName("lastKeyName")[0];
  function setInput(inputName) {
    var input = WebMidi.getInputByName(inputName);

    input.addListener("noteon", "all", function (e) {
      // console.log(e);
      const keyName = e.note.name + e.note.octave;

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
