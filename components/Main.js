// import html from "html-literal";
// import * as views from "./views";

// export default () => html`
//   ${views["Home"]()}, ${views["Bio"]()}, ${views["Pizza"]()},
//   ${views["Order"]()}, ${views["Viewnotfound"]()}
// `;

import html from "html-literal";
import * as views from "./views";

export default state =>
  html`
    ${views[state.view](state)}
  `;
