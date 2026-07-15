import { createStore } from "redux";
import studentReducer from "./reducer";

const store1 = createStore(studentReducer);

export default store1;