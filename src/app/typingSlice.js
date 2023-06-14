import { createSlice } from "@reduxjs/toolkit";

const displayKeyArr = [
  { value: "a" },
  { value: "s" },
  { value: "d" },
  { value: "f" },
  { value: "j" },
  { value: "k" },
  { value: "l" },
  { value: ";" },
];

const generateWord = (length) => {
  const characters = "asdfjkl;";
  let word = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    word += characters[randomIndex];
  }

  return word;
};

const initialState = {
  displayChar: generateWord(5),
  totalChar: 0,
  typedChar: "",
  typedCorrectChar:"",
  displayKeys: displayKeyArr,
  nextChar: "",
  totalTyped: 0,
  correctTyped: 0,
  nextCharPointer:0,
};

export const typingSlice = createSlice({
  name: "typing",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    handleTypeBoxChange: (state, action) => {
      const { value, backspace } = action.payload;
      console.log(value, backspace);
      if (backspace == null) {
        if (state.typedChar.length <= state.correctTyped) {
        } else {
          state.typedChar = value;
        }
        return;
      }
      state.typedChar = value;
      state.totalTyped += 1;
      //   cheking for correctType
      if (backspace == state.nextChar) {
        state.correctTyped += 1;
        state.typedCorrectChar+= backspace
        state.nextCharPointer+=1;
        state.nextChar =
          state.displayChar[state.nextCharPointer];
      }

      // Check Weather display word finished or not
      if (state.correctTyped == state.totalChar) {
        let newWord = generateWord(5);
        state.displayChar = newWord;
        state.totalChar += newWord.length;
        state.nextChar = state.displayChar[0];
        state.nextCharPointer=0;
      }
    },

    initialNextChar: (state) => {
      state.nextChar = state.displayChar[0];
      state.totalChar = state.displayChar.length;
    },
  },
});

export const { handleTypeBoxChange, initialNextChar } = typingSlice.actions;

export default typingSlice.reducer;
