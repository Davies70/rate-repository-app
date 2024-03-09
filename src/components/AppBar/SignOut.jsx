import { View, Pressable } from 'react-native';
import Text from '../Text';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import useUserReducer from '../../hooks/useUserReducer';

const SignOut = () => {
  const { dispatch } = useUserReducer();

  const authStorage = useAuthStorage();

  const apolloClient = useApolloClient();
  const signOut = async () => {
    dispatch({
      type: 'SIGN_OUT',
    });
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };
  return (
    <View>
      <Pressable onPress={signOut}>
        <Text fontWeight='bold' color='white' fontSize='subheading'>
          Sign out
        </Text>
      </Pressable>
    </View>
  );
};

export default SignOut;
