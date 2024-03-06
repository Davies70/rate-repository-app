import { View, Text, Image, StyleSheet } from 'react-native';
import theme from './theme';

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
  fullName: {
    fontWeight: theme.fontWeights.bold,
  },
  descriptionContainer: {
    gap: 6,
    flexShrink: 1,
  },
  description: {
    fontWeight: theme.fontWeights.light,
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
  statText: {
    fontWeight: theme.fontWeights.light,
  },
  statValue: {
    fontWeight: theme.fontWeights.bold,
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
          <Text style={styles.fullName}>{fullName}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.language}>{language}</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{convertStat(stargazersCount)}</Text>
          <Text style={styles.statText}>Stars</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{convertStat(forksCount)}</Text>
          <Text style={styles.statText}>Forks</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}> {convertStat(reviewCount)}</Text>
          <Text style={styles.statText}>Reviews</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{convertStat(ratingAverage)}</Text>
          <Text style={styles.statText}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
