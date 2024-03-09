import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const useUser = () => {
  const { loading, data } = useQuery(GET_USER);

  return [data, loading];
};

export default useUser;
