import api from "../api/todo.api";
const initialState = { tasks: [] };
export const todoReducer = async (state = initialState, action) => {
  console.log('state', state)
  switch (action.type) {
    case "todo/getAll":
      return {
        ...state,
        tasks: await api.getAllTask(action.payload.token),
      };
    case "todo/get":
      return state;
    // case "todo/beginAdd":
    //   return {
    //     ...state,
    //     isFetchingData: true,
    //   };
    // case "todo/endAdd":
    //   return {
    //     ...state,
    //     isFetchingData: false,
    //   };
    default:
      return state;
  }
};
