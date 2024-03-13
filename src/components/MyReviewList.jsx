import { View, FlatList, StyleSheet, Text, Alert } from 'react-native';
import MyReview from './MyReview';
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-native';
import useDeleteReview from '../hooks/useDeleteReview';

const MyReviewList = () => {
  const navigate = useNavigate();
  const deleteReview = useDeleteReview();
  const [data, loading, error, refetch] = useUser(true);
  const handleViewRepo = (id) => {
    navigate(`/repository/${id}`);
  };

  const handleDeleteReview = (deleteReviewId) => {
    Alert.alert(
      'Delete Review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await deleteReview(deleteReviewId);
            refetch();
          },
        },
      ]
    );
  };

  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  const ItemSeparator = () => <View style={styles.separator} />;

  if (loading) return <Text>Loading...</Text>;
  if (error) console.error('error getting repo', error.message);

  const reviews = data.me.reviews.edges.map((edge) => edge.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <MyReview
          item={item}
          handleViewRepo={handleViewRepo}
          handleDeleteReview={handleDeleteReview}
        />
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviewList;
