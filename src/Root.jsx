import React from "react";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import { useDispatch, useSelector } from "react-redux";
import keySlice from "./redux/keySlice";

const Root = () => {
  const dispatch = useDispatch();
  const heart = useSelector((state) => state.heart);
  dispatch(keySlice.actions.getCurrentLetters());
  return (
    <div className="grid grid-rows-2 gap-7">
      <span>urinishlar {heart > 0 ? heart : 0}</span>
      <Word />
      <Keyboard />
    </div>
  );
};

export default Root;
