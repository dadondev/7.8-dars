import React, { useEffect, useState } from "react";
import Letter from "./Letter";
import { useDispatch, useSelector } from "react-redux";
import keySlice from "../redux/keySlice";

const Word = () => {
  let my = useSelector((state) => state.currentWordLetters);

  // dispatch(keySlice.actions.selectWord());
  //   let currentWord = useSelector((currentWord) => currentWord.currentLetters);
  return (
    <div className="flex gap-5 items-center ">
      {my.map((e) => (
        <Letter {...e} key={e.id} />
      ))}
    </div>
  );
};

export default Word;
