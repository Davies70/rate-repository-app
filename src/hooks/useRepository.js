import { GET_REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepository = (id, first) => {
  const { loading, error, data, fetchMore, ...result } = useQuery(
    GET_REPOSITORY,
    {
      fetchPolicy: 'network-only',
      variables: { repositoryId: id, },
    }
  );

  console.log(data?.repository.reviews.edges.length);
  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      console.error('cant fetch reviews');
      return;
    }

    fetchMore({
      variables: {
        after: data?.repository.reviews.pageInfo.endCursor,
        repositoryId: id,
        first,
      },
    });
  };

  return {
    repository: data?.repository,
    loading,
    error,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepository;
