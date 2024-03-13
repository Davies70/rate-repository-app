import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';
import React from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export default class RepositoryListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHeader = () => {
    const props = this.props;
    const {
      repoSortType,
      setRepoSortType,
      searchKeyword,
      setKeyword,
      keyword,
    } = props;

    return (
      <RepositoryListHeader
        repoSortType={repoSortType}
        setRepoSortType={setRepoSortType}
        searchKeyword={searchKeyword}
        setKeyword={setKeyword}
        keyword={keyword}
      />
    );
  };

  get repositoryNodes() {
    return this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];
  }

  render() {
    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        data={this.repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={(repository) => (
          <Pressable onPress={() => this.props.onPress(repository.item.id)}>
            <RepositoryItem repository={repository.item} />
          </Pressable>
        )}
        keyExtractor={(repository) => repository.id}
        onEndReached={this.props.onEndReached}
      />
    );
  }
}
