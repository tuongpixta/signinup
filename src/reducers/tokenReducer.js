const initialState = { token: window.sessionStorage.getItem("token") || "" };
export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "token/get":
      return state;
    case "token/add":
      console.log("dispatched", action.payload);
      window.sessionStorage.setItem("token", action.payload);

      return {
        token: action.payload,
      };
    default:
      return state;
  }
};
