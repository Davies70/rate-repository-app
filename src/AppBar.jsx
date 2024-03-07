import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from './theme';
import AppBarTab from './AppBarTab';
import SignInTab from './SignInTab';
import { ScrollView } from 'react-native';

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollview}>
        <AppBarTab />
        <SignInTab />
      </ScrollView>
    </View>
  );
};

export default AppBar;
