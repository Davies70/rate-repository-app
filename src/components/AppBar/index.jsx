import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import Repositories from './Repositories';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { ScrollView } from 'react-native';
import useUserReducer from '../../hooks/useUserReducer';

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
    margin: 5,
  },
});

const AppBar = () => {
  const { user} = useUserReducer();
  console.log('state in tab,', user);
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollview}>
        <Repositories />
        {!user && <SignIn />}
        {user && <SignOut />}
      </ScrollView>
    </View>
  );
};

export default AppBar;
