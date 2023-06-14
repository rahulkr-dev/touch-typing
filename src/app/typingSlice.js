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
const initialState = {
  displayChar:"asdfjkl;",
  typedChar:"",
  displayKeys:displayKeyArr,
  nextChar:'',
  totalTyped:0,
  correctTyped:0
};

export const typingSlice = createSlice({
  name: "typing",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    handleTypeBoxChange: (state,action) => {
      state.typedChar = action.payload;
      state.totalTyped+=1;
    //   cheking for correctType
    if(action.payload===state.displayChar.slice(0,action.payload.length)){
        state.correctTyped+=1;
        state.nextChar = state.displayChar[state.correctTyped]
    }

    },

    initialNextChar:(state)=>{
        state.nextChar = state.displayChar[0]
    }
  },
});

export const {handleTypeBoxChange,initialNextChar} = typingSlice.actions;

export default typingSlice.reducer;
