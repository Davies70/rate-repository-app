import { View, Pressable } from 'react-native';
import Text from '../Text';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import useUserReducer from '../../hooks/useUserReducer';

const SignOut = () => {
  const { dispatch, state } = useUserReducer();
  console.log(state)
  const authStorage = useAuthStorage();

  const apolloClient = useApolloClient();
  const signOut = async () => {
    await authStorage.removeAccessToken();
    dispatch({
      type: 'SIGN_OUT',
    });

    apolloClient.resetStore();
    console.log('signed out');
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
