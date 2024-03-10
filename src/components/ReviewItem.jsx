import { View, StyleSheet } from 'react-native';
import Text from './Text';
import { format } from 'date-fns';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backGroundColor.white,
    flexDirection: 'row',
    gap: 15,
    padding: 15,
  },
  rating: {
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flexShrink: 1,
  },
  text: {
    paddingTop: 5,
  },
});

const ReviewItem = ({ review }) => {
  const formattedDate = format(new Date(review.createdAt), 'dd.MM.yyyy');
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text fontWeight='bold' color='primary'>
          {review.rating}
        </Text>
      </View>
      <View style={styles.right}>
        <Text fontSize='subheading' fontWeight='bold'>
          {review.user.username}
        </Text>
        <View>
          <Text color='textSecondary'>{formattedDate}</Text>
        </View>
        <View style={styles.text}>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
