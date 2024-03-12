import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutation';
import useAuthStorage from './useAuthStorage';
import { useApolloClient } from '@apollo/client';
import useUserReducer from './useUserReducer';

export const useSignIn = () => {
  const { dispatch } = useUserReducer();

  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: { credentials: { username, password } },
      });
      dispatch({
        type: 'SIGN_IN',
        payload: data,
      });
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
      return data;
    } catch (e) {
      console.error('error saving token to local storage', e);
    }
  };

  return [signIn, result];
};
