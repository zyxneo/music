import { FormattedMessage } from "gatsby-plugin-intl";
import React, { useEffect, useRef, useState } from "react";
import Vex from "vexflow";

import { Layout, SEO, PianoKeyboard } from "components";

const IndexPage = () => {
  const VF = Vex.Flow;
  const refContainer = useRef(null);
  const [context, setContext] = useState(null);
  const [stave, setStave] = useState(null);
  const [note, setNote] = useState("c/4");

  useEffect(() => {
    if (!!refContainer) {
      console.log(refContainer.current);
      refContainer.current.innerHTML = "";

      // Create an SVG renderer and attach it to the DIV element named "vf".
      const renderer = new VF.Renderer(
        refContainer.current,
        VF.Renderer.Backends.SVG
      );

      // Configure the rendering context.
      renderer.resize(500, 500);
      const cntx = renderer.getContext();
      setContext(cntx);
      cntx.setFont("Arial", 10);

      // Create a stave of width 400 at position 10, 40 on the canvas.
      const stv = new VF.Stave(10, 40, 400);
      setStave(stv);

      // Add a clef and time signature.
      stv.addClef("treble").addKeySignature("E").addTimeSignature("4/4");

      // Connect it to the rendering context and draw!
      stv.setContext(cntx).draw();
    }
  }, [note]);

  useEffect(() => {
    if (context && stave) {
      // if (document.getElementsByClassName('vf-stavenote')) {
      //   document.getElementsByClassName('vf-stavenote')[0].
      // }
      var notes = [
        // A quarter-note C.
        new VF.StaveNote({ clef: "treble", keys: [note], duration: "q" }),
      ];
      // notes.setAttribute('id', 'xyz');
      // Create a voice in 4/4 and add the notes from above
      var voice = new VF.Voice({ num_beats: 1, beat_value: 4 });
      voice.addTickables(notes);

      // Format and justify the notes to 400 pixels.
      var formatter = new VF.Formatter()
        .joinVoices([voice])
        .format([voice], 400);

      // Render voice
      voice.draw(context, stave);
    }
  }, [context, note]);

  console.log(note);

  function renderNote() {
    setNote(
      ["a/5", "b/5", "c/5", "d/5", "e/5", "f/5", "g/5"][
        Math.floor(Math.random() * 7)
      ]
    );
  }
  return (
    <Layout className="home">
      <SEO title="TODO" />

      <section className="home__intro">
        <div className="container intro">
          <div className="intro__logo">hi</div>
          <h1 className="intro__title">TODO</h1>
        </div>

        <div id="vf" ref={refContainer}></div>
        <button onClick={() => renderNote()}>renderNote</button>
        <PianoKeyboard startOctave={3} octaves={5} />
      </section>
    </Layout>
  );
};

export default IndexPage;
