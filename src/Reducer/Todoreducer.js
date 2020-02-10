import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
  TOGGLE_EDIT
} from "../Actions/actionType";

const initState = {
  todolist: [
    {
      id: Math.random(),
      task: "go to the cinema",
      checked: false,
      edited: false
    },
    { id: Math.random(), task: "read a book", checked: false, edited: false }
  ]
};

export const Todoreducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, todolist: [...state.todolist, action.payload] };
  
      
    case DELETE_TASK:
      return {
        ...state,
        todolist: state.todolist.filter(el => el.id !== action.payload)
      };
    case COMPLETE_TASK:
      return {
        ...state,
        todolist: state.todolist.map(el =>
          el.id === action.payload ? { ...el, checked: !el.checked } : el
        )
      };
    case EDIT_TASK:
      return {
        ...state,
        todolist: state.todolist.map(el =>
          el.id === action.payload.id
            ? { ...el, task: action.payload.newTask }
            : el
        )
      };
    case TOGGLE_EDIT:
      return {
        ...state,
        todolist: state.todolist.map(el =>
          el.id === action.payload ? { ...el, edited: !el.edited } : el
        )
      };

    default:
      return state;
  }
};
