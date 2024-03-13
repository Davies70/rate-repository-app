import { DELETE_REVIEW } from '../graphql/mutation';
import { useMutation } from '@apollo/client';

const useDeleteReview = () => {
  // eslint-disable-next-line no-unused-vars

  const [deleteMutation] = useMutation(DELETE_REVIEW);

  const deleteReview = async (deleteReviewId) => {
    try {
      const { data } = await deleteMutation({
        variables: { deleteReviewId },
      });
      return data.deleteReview;
    } catch (e) {
      console.error('error deleting review', e);
    }
  };
  return deleteReview;
};

export default useDeleteReview;
