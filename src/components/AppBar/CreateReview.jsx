import { View } from 'react-native';
import Text from '../Text';
import { Link } from 'react-router-native';

const CreateReview = () => {
  return (
    <View>
      <Link to='/createReview'>
        <Text fontWeight='bold' color='white' fontSize='subheading'>
          Create a review
        </Text>
      </Link>
    </View>
  );
};

export default CreateReview;
