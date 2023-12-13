import { combineReducers } from "redux";
import counter from "./modules/counterStore";
import colorPrint from "./modules/colorPrintStore";
import todos from "./modules/todosStore";

export default combineReducers({
  counter,
  colorPrint,
  todos,
});
