import { Text, Pressable, StyleSheet, View } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  text: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.white,
  },
  container: {
    marginLeft: 10,
    marginBottom: 10,
  },
});

const AppBarTab = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.text}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
