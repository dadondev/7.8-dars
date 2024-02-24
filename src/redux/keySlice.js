import { configureStore, createSlice } from "@reduxjs/toolkit";

const keySlice = createSlice({
  name: "appSlice",
  initialState: {
    currentWordLetters: [],
    clickedLetters: [],
    heart: 8,
    currentWord: [],
    disbleadLet: [],
    words: [{ name: "Australia", selected: false }],
  },
  reducers: {
    getCurrentLetters: (state, { payload }) => {
      if (!state.currentWord[0]) {
        state.currentWord = state.words[0].name.split("");
      }
      const arr = state.currentWord.map((e, i) => {
        return {
          letter: e,
          id: i,
          isDisblead: false,
        };
      });
      state.currentWordLetters = arr;
    },
    changeDisblead: (state, { payload }) => {
      if (state.heart > 1) {
        const obj = state.currentWordLetters.find(
          (e) => !e.isDisblead && e.letter.toLowerCase() == payload
        );
        if (obj) {
          obj.isDisblead = true;
        } else {
          let letObj = state.currentWordLetters.find(
            (e) => e.letter.toLowerCase() == payload.toLowerCase()
          );
          if (letObj && letObj.letter) {
            state.disbleadLet.push(letObj.letter.toLowerCase());
          }
          state.heart = state.heart - 1;
        }
      }
    },
  },
});

export default keySlice;
