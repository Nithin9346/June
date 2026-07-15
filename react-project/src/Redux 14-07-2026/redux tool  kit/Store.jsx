import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice";
import studentReducer from "../reducer";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    student: studentReducer,
  },
});