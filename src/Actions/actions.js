import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
  TOGGLE_EDIT
} from "./actionType";

export const addtask = payload => {
  return { type: ADD_TASK, payload };
};
export const deletetask = payload => {
  return { type: DELETE_TASK, payload };
};

export const completetask = payload => {
  return { type: COMPLETE_TASK, payload };
};
export const edittask = payload => {
  return { type: EDIT_TASK, payload };
};
export const toggleedit = payload => {
  return { type: TOGGLE_EDIT, payload };
};
