import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import Repositories from './Repositories';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { ScrollView } from 'react-native';
import useUserReducer from '../../hooks/useUserReducer';
import { useEffect } from 'react';
import useAuthStorage from '../../hooks/useAuthStorage';
import CreateReview from './CreateReview';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 8,
    backgroundColor: theme.backGroundColor.appBar,
    height: 100,
    paddingLeft: 10,
  },
  scrollview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginTop: 24,
  },
});

const AppBar = () => {
  const { user, dispatch } = useUserReducer();
  const authStorage = useAuthStorage();
  useEffect(() => {
    const fetchUser = async () => {
      const token = await authStorage.getAccessToken();
      if (!user && token) {
        dispatch({
          type: 'SIGN_IN',
          payload: { authenticate: { accessToken: token } },
        });
      }
    };
    fetchUser();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollview}>
        <Repositories />
        {user && <CreateReview />}
        {!user && <SignIn />}
        {user && <SignOut />}
      </ScrollView>
    </View>
  );
};

export default AppBar;
