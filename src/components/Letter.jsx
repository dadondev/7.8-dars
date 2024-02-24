import React from "react";
import { useDispatch, useSelector } from "react-redux";
import keySlice from "../redux/keySlice";

const Letter = ({ letter, id, isDisblead }) => {
  // const dispatch = useDispatch();
  // dispatch(keySlice.actions.selectWord());
  // const currentWord = useSelector((currentWord) => currentWord.currentWord);
  // const wordArr = currentWord.name.split("");
  return (
    <h1 className="flex items-center text-white justify-center text-center bg-black h-10 w-8">
      <span
        className={isDisblead ? `text-inherit block` : "hidden text-inherit"}
      >
        {letter}
      </span>
    </h1>
  );
};

export default Letter;
