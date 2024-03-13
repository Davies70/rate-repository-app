import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const useUser = (includeReviews) => {
  const { loading, data, error, refetch } = useQuery(GET_USER, {
    variables: {
      includeReviews,
    },
    fetchPolicy: 'cache-and-network',
  });

  return [data, loading, error, refetch];
};

export default useUser;
