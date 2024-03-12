import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = (repoSortType, searchKeyword) => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: repoSortType?.orderBy,
      orderDirection: repoSortType?.orderDirection,
      searchKeyword,
    },
  });

  const repositories = data?.repositories;

  return { repositories, loading, error };
};

export default useRepositories;
