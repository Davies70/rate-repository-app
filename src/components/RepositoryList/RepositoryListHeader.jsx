import { View, StyleSheet } from 'react-native';
import Sorter from './Sorter';
import SearchBar from './SearchBar';


const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingTop: 7,
  },
});

const RepositoryListHeader = ({
  searchKeyword,
  setKeyword,
  repoSortType,
  setRepoSortType,
  keyword,
}) => {
  return (
    <View style={styles.container}>
      <SearchBar
        searchKeyword={searchKeyword}
        setKeyword={setKeyword}
        keyword={keyword}
      />
      <Sorter repoSortType={repoSortType} setRepoSortType={setRepoSortType} />
    </View>
  );
};

export default RepositoryListHeader;
