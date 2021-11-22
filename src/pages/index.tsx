import { FormattedMessage } from "gatsby-plugin-intl";
import React from "react";

import { Layout, SEO, PianoKeyboard } from "components";

const IndexPage = () => {
  return (
    <Layout className="home">
      <SEO title="TODO" />

      <section className="home__intro">
        <div className="container intro">
          <div className="intro__logo">hi</div>
          <h1 className="intro__title">TODO</h1>
        </div>

        <PianoKeyboard startOctave={3} octaves={5} />
      </section>
    </Layout>
  );
};

export default IndexPage;
