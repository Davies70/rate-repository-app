import { View, FlatList, StyleSheet, Text } from 'react-native';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';

const SingleRepository = () => {
  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  const ItemSeparator = () => <View style={styles.separator} />;
  let { id } = useParams();
  const { repository, loading, error } = useRepository(id);

  if (loading) return <Text>Loading...</Text>;
  if (error) console.error('error getting repo', error.message);

  const reviews = repository.reviews.edges.map((edge) => edge.node);
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <>
          <RepositoryInfo repository={repository} />
          <ItemSeparator />
        </>
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;
