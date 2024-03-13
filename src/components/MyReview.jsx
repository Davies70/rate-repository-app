import ReviewItem from './ReviewItem';
import { View, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backGroundColor.white,
    padding: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    height: 70,
    gap: 20,
  },
  redButton: {
    backgroundColor: theme.colors.error,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
  },
  blueButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
  },
});

const MyReview = ({ item, handleViewRepo, handleDeleteReview }) => {
  return (
    <View style={styles.container}>
      <ReviewItem isMyReviews={true} review={item} />
      <View style={styles.buttons}>
        <Pressable
          style={styles.blueButton}
          onPress={() => handleViewRepo(item.repository.id)}
        >
          <Text color='white' fontWeight='bold'>
            View repository
          </Text>
        </Pressable>
        <Pressable
          style={styles.redButton}
          onPress={() => handleDeleteReview(item.id)}
        >
          <Text color='white' fontWeight='bold'>
            Delete review
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MyReview;
