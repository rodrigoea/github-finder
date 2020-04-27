import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import routes from "./routes";

/** Store */
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>{routes()}</BrowserRouter>
    </Provider>
  );
}

export default App;
