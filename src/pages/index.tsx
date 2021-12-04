import React from "react";

import Loadable from "react-loadable"
// import Page from "components/GuessTheNote";

export default Loadable({

  // this "./VexflowDemo" component loads Vexflow and draws the sheet music

  loader: () => import("components/GuessTheNote"),

  loading() {

    return <div>Loading...</div>

  }

})