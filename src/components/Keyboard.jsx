import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import keySlice from "../redux/keySlice";

const Keyboard = () => {
  const letters = [
    {
      letter: "q",
      isClicked: false,
      id: 0,
    },
    {
      letter: "w",
      isClicked: false,
      id: 1,
    },
    {
      letter: "e",
      isClicked: false,
      id: 2,
    },
    {
      letter: "r",
      isClicked: false,
      id: 3,
    },
    {
      letter: "t",
      isClicked: false,
      id: 4,
    },
    {
      letter: "y",
      isClicked: false,
      id: 5,
    },
    {
      letter: "u",
      isClicked: false,
      id: 6,
    },
    {
      letter: "i",
      isClicked: false,
      id: 7,
    },
    {
      letter: "o",
      isClicked: false,
      id: 8,
    },
    {
      letter: "p",
      isClicked: false,
      id: 9,
    },
    {
      letter: "a",
      isClicked: false,
      id: 10,
    },
    {
      letter: "s",
      isClicked: false,
      id: 11,
    },
    {
      letter: "d",
      isClicked: false,
      id: 12,
    },
    {
      letter: "f",
      isClicked: false,
      id: 13,
    },
    {
      letter: "g",
      isClicked: false,
      id: 14,
    },
    {
      letter: "h",
      isClicked: false,
      id: 15,
    },
    {
      letter: "j",
      isClicked: false,
      id: 16,
    },
    {
      letter: "k",
      isClicked: false,
      id: 17,
    },
    {
      letter: "l",
      isClicked: false,
      id: 18,
    },
    {
      letter: "z",
      isClicked: false,
      id: 19,
    },
    {
      letter: "x",
      isClicked: false,
      id: 20,
    },
    {
      letter: "c",
      isClicked: false,
      id: 21,
    },
    {
      letter: "v",
      isClicked: false,
      id: 22,
    },
    {
      letter: "b",
      isClicked: false,
      id: 23,
    },
    {
      letter: "n",
      isClicked: false,
      id: 24,
    },
    {
      letter: "m",
      isClicked: false,
      id: 25,
    },
  ];
  const dispatch = useDispatch();
  addEventListener("keyup", (e) => {
    for (let i in letters) {
      if (letters[i].letter == e.key.toLowerCase()) {
        dispatch(keySlice.actions.changeDisblead(e.key));
      }
    }
  });
  return (
    <div className="flex gap-3 flex-wrap">
      {letters.map((e, i) => (
        <Button {...e} key={i} />
      ))}
    </div>
  );
};

export default Keyboard;
