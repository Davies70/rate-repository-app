import { CREATE_REVIEW } from '../graphql/mutation';
import { useMutation } from '@apollo/client';

const useReview = () => {
  // eslint-disable-next-line no-unused-vars
  const [addReview, { data }] = useMutation(CREATE_REVIEW);

  const createReview = async (review) => {
    try {
      const { data } = await addReview({
        variables: {
          review,
        },
      });
      return data.createReview;
    } catch (e) {
      console.error('error adding review', e);
    }
  };
  return { createReview };
};

export default useReview;
