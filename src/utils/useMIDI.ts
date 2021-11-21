import { useState } from "react";
import WebMidi, {Input, Output} from "webmidi";

export const useMIDI = () => {
  const [inputs, setInputs] = useState([] as Input[]);
  const [outputs, setOutputs] = useState([] as Output[]);
  const [getOutputById, setGetOutputById] = useState({ getter: undefined });
  const [getInputById, setGetInputById] = useState({ getter: undefined });

  const [accessError, setAccessError] = useState(undefined);
  // @ts-ignore
  WebMidi.enable((err) => {
    if (err) {
      setAccessError(err);
      console.log(err);
    }
    
    setInputs(WebMidi.inputs);
    setOutputs(WebMidi.outputs);
    setGetOutputById({ getter: (id: string) => WebMidi.getOutputById(id) });
    setGetInputById({ getter: (id: string) => WebMidi.getInputById(id) });
  });

  return {
    getOutputById: getOutputById.getter,
    getInputById: getInputById.getter,
    inputs,
    outputs,
    accessError,
  };
};
