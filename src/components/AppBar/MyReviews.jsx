import { View } from 'react-native';
import Text from '../Text';
import { Link } from 'react-router-native';

const MyReviews = () => {
  return (
    <View>
      <Link to='/myReviews'>
        <Text fontWeight='bold' color='white' fontSize='subheading'>
          My reviews
        </Text>
      </Link>
    </View>
  );
};

export default MyReviews;
