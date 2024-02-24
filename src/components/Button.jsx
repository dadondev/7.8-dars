import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import keySlice from "../redux/keySlice";

const Button = ({ letter, isClicked }) => {
  const myBtnDisb = useSelector((state) => state.disbleadLet);
  const disb = myBtnDisb.find((e) => e == letter);
  const dispatch = useDispatch();
  const handleCLick = (e) => {
    dispatch(keySlice.actions.changeDisblead(e.target.textContent));
    // dispatch(keySlice.actions.pushKey(e.target.textContent));
  };

  return (
    <button
      className={
        disb
          ? "bg-slate-300 w-10 h-10 border border-black"
          : "w-10 h-10 bg-cyan-400 border border-black"
      }
      onClick={handleCLick}
    >
      {letter}
    </button>
  );
};

export default Button;
