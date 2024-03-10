import { View, Pressable, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryList/RepositoryItem';
import Text from './Text';
import theme from '../theme';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backGroundColor.white,
    height: 70,
    padding: 5,
    paddingTop: 10,
    paddingLeft: 12,
    paddingRight: 12,
  },
  button: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    height: 50,
  },
  main: {
    backgroundColor: theme.backGroundColor.white,
  },
});

const RepositoryInfo = ({ repository }) => {
  const handlePress = async () => {
    Linking.openURL(repository.url);
  };

  return (
    <View style={styles.main}>
      <RepositoryItem repository={repository} />
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={handlePress}>
          <Text color='white' fontWeight='bold'>
            Open in GitHub
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RepositoryInfo;
