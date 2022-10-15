import {  textAction } from "./actions";

const textState = {
    textValue: "Started"
}

// const commentTriggerState = {
//   commentTrigger: true,
// }

const textReducer = (state, action) => {
    if (action.type === textAction) {
      return {
        ...state,
        textValue: action.payload,
      };
    }
    return state;
  };

// const commentTriggerReducer = (state, action) => {
//   if (action.type === commentAction) {
//     return {
//       ...state,
//       commentTrigger: false,
//     }
//   }
// }

export {textState, textReducer}