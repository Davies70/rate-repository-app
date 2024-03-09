import { FlatList, View, Text, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, loading, error } = useRepositories();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    console.error('something went wrong getting repositories', error.message);
  }


  const repositoryNodes = data.repositories
    ? data.repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={(repository) => <RepositoryItem repository={repository} />}
      keyExtractor={(repository) => repository.id}
    />
  );
};

export default RepositoryList;
