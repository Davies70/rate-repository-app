import { View, Image, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  container: {
    padding: 10,
    justifyContent: 'space-between',
    gap: 20,
    backgroundColor: theme.backGroundColor.white,
  },
  header: {
    flexDirection: 'row',
    gap: 15,
  },

  descriptionContainer: {
    gap: 6,
    flexShrink: 1,
  },

  language: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 5,
    padding: 5,
    color: theme.colors.white,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  stat: {
    alignItems: 'center',
  },
});

const convertStat = (number) => {
  const rating =
    number <= 1000 ? number : (number / 1000).toFixed(1).concat('k');
  return rating;
};

const RepositoryItem = ({ repository }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
  } = repository.item;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: ownerAvatarUrl,
          }}
          style={styles.avatar}
        />
        <View style={styles.descriptionContainer}>
          <Text fontWeight='bold'>{fullName}</Text>
          <Text color='textSecondary'>{description}</Text>
          <Text style={styles.language}>{language}</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{convertStat(stargazersCount)}</Text>
          <Text color='textSecondary'>Stars</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{convertStat(forksCount)}</Text>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'> {convertStat(reviewCount)}</Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{convertStat(ratingAverage)}</Text>
          <Text color='textSecondary'>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
