import React, { useEffect } from "react";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import keySlice from "./redux/keySlice";
import Root from "./Root";

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
