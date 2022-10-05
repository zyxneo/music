import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import { FormattedMessage } from "gatsby-plugin-intl";
import { Layout, SEO } from "components";
import Vex, { Factory, Registry, StaveNote } from "vexflow";

const TriadsPage = () => {
  const refContainer = useRef(null as unknown as HTMLDivElement);

  useEffect(() => {
    if (!!refContainer && refContainer.current) {
      refContainer.current.innerHTML = "";

      const registry = new Registry();
      Registry.enableDefaultRegistry(registry);
      const id = (id: string) => registry.getElementById(id) as StaveNote;
      // Create a VexFlow renderer attached to the DIV element with id="output".
      const vf: Factory = new Vex.Flow.Factory({
        renderer: { elementId: refContainer.current, width: 200, height: 140 },
      });
      const score = vf.EasyScore();
      const system = vf.System();

      const voice = score.voice.bind(score);
      const notes = score.notes.bind(score);
      const beam = score.beam.bind(score);
      const tuplet = score.tuplet.bind(score);

      // Create a 4/4 treble stave and add two parallel voices.
      system.addStave({
        voices: [
          // Top voice has 4 quarter notes with stems up.
          // score.voice(score.notes("C#5/q, B4, A4, G#4", { stem: "up" })),

          // Bottom voice has two half notes, with stems down.
          // score.voice(score.notes("C#4/h, C#4", { stem: "down" })),
          voice(notes("(G4 B4 D5)/1")),
        ],
      });
      // .addClef("treble")
      // .addTimeSignature("4/4");

      // Draw it!
      vf.draw();
    }
  }, []);

  return (
    <Layout>
      <main>
        <SEO title="Triads" />
        <h1>Triads</h1>

        <p>
          Something
          <Link to="/">Go home</Link>.
        </p>
        <FormattedMessage
          id="chords.triads"
          description=""
          defaultMessage="Hello, <b>Eric</b> {icon}"
          values={{
            b: (chunks: string) => <b>{chunks}</b>,
            p: (chunks: string) => <p>{chunks}</p>,
            h1: (chunks: string) => <h1>{chunks}</h1>,
            div: (chunks: string) => <div>{chunks}</div>,
            icon: <div className="staff" ref={refContainer}></div>,
          }}
        />
      </main>
    </Layout>
  );
};

export default TriadsPage;
