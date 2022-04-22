const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return {
        ...action.payload,
      }
    }
    case "SIGN_OUT":{
      return null
    }
    default:
      return state;
  }
};

export default userReducer;
