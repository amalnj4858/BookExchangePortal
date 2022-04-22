export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const signOutUser = () => {
  return {
    type: "SIGN_OUT"
  };
};
