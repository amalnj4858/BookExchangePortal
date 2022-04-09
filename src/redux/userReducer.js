const initialState = null;

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
