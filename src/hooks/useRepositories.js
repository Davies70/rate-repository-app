import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = (repoSortType, searchKeyword, first) => {
  const { loading, error, data, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: 'cache-and-network',
      variables: {
        orderBy: repoSortType?.orderBy,
        orderDirection: repoSortType?.orderDirection,
        searchKeyword,
      },
    }
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      console.error('cant fetch')
      return;
    }
    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderBy: repoSortType?.orderBy,
        orderDirection: repoSortType?.orderDirection,
        searchKeyword,
        first,
      },
    });
  };

  return {
    repositories: data?.repositories,
    loading,
    error,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepositories;
