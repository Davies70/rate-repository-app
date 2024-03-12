import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { Text } from 'react-native';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useNavigate } from 'react-router-native';

const RepositoryList = () => {
  const [repoSortType, setRepoSortType] = useState();
  const [keyword, setKeyword] = useState('');
  const [searchKeyword] = useDebounce(keyword, 500);

  const navigate = useNavigate();

  const onPress = (id) => {
    navigate(`/repository/${id}`);
  };

  const { repositories, loading, error } = useRepositories(
    repoSortType,
    searchKeyword
  );

  if (loading) {
    return <Text>Loading...</Text>;
  } else if (error) {
    console.error('something went wrong getting repositories', error.message);
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      repoSortType={repoSortType}
      setRepoSortType={setRepoSortType}
      setKeyword={setKeyword}
      keyword={keyword}
      onPress={onPress}
    />
  );
};

export default RepositoryList;
