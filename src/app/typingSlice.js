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
  {value:' '}
];

const generateWord = (length, spaceAfter) => {
  const characters = 'asdfjkl;';
  let word = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    word += characters[randomIndex];

    // Add space after every specified number of characters
    if ((i + 1) % spaceAfter === 0 && i !== length - 1) {
      word += ' ';
    }
  }

  return word;
};


const initialState = {
  displayChar: generateWord(24,3),
  totalChar: 0,
  typedChar: "",
  typedCorrectChar: "",
  displayKeys: displayKeyArr,
  nextChar: "",
  totalTyped: 0,
  correctTyped: 0,
  nextCharPointer: 0,
  testStarted: false,
  totalTime: 300,
  averageWordLength:3
};

export const typingSlice = createSlice({
  name: "typing",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    handleTypeBoxChange: (state, action) => {
      const { value, backspace } = action.payload;
      // console.log(value, backspace);
      // After clicking we start the test
      state.testStarted = true;

      // logic when backspace is clicked
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
        // if(backspace==" "){
        //   state.totalWord+=1
        // }
        state.correctTyped += 1;
        state.typedCorrectChar += backspace;
        state.nextCharPointer += 1;
        state.nextChar = state.displayChar[state.nextCharPointer];
      }

      // Check Weather display word finished or not
      if (state.correctTyped == state.totalChar) {
        let newWord = generateWord(15,3);
        state.displayChar = newWord;
        state.totalChar += newWord.length;
        state.nextChar = state.displayChar[0];
        state.nextCharPointer = 0;
      }
    },
    // INITAL SETUP
    initialNextChar: (state) => {
      state.nextChar = state.displayChar[0];
      state.totalChar = state.displayChar.length;
    },
    // TOTA TIME
    setTime: (state) => {
      state.totalTime -= 1;
    },

    // WHEN TEST END
    testEnd: (state) => {
      // logic
      state.testStarted = false;
    },

    // RESET EVERYTHING
    resetTest: (state) => {
      const word = generateWord(15,3)
      state.displayChar = word;
      state.totalChar= 0;
      state.typedChar= "";
      state.typedCorrectChar= "";
      state.displayKeys = displayKeyArr;
      state.nextChar= word[0];
      state.totalTyped= 0;
      state.correctTyped= 0;
      state.nextCharPointer=0;
      state.testStarted=false;
      state.totalTime= 300
    },
  },
});

export const {
  handleTypeBoxChange,
  initialNextChar,
  setTime,
  testEnd,
  resetTest,
} = typingSlice.actions;

export default typingSlice.reducer;
