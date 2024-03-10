import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { Text } from 'react-native';


const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();

  if (loading) {
    return <Text>Loading...</Text>;
  } else if (error) {
    console.error('something went wrong getting repositories', error.message);
  }

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
