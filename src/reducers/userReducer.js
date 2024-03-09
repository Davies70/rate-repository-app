import { useReducer } from 'react';

const userReducer = () => {
  const initialState = { user: null };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return {
          user: action.payload,
        };
      case 'SIGN_OUT':
        return initialState;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const user = state.user;
  return { user, dispatch };
};

export default userReducer;
