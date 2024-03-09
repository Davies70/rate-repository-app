import UserContext from '../context/UserContext';
import { useContext } from 'react';

const useUserReducer = () => {
  return useContext(UserContext);
};

export default useUserReducer;
