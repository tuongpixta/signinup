export const addToken = (payload) => ({
  type: "token/add",
  payload,
});

export const getToken = (payload) => ({
  type: "token/get",
  payload,
});
