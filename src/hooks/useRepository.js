import { GET_REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepository = (id) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { repositoryId: id },
  });

  const repository = data?.repository;

  return { repository, loading, error };
};

export default useRepository;
