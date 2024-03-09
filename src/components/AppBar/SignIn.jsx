import { View } from 'react-native';
import Text from '../Text';
import { Link } from 'react-router-native';

const SignInTab = () => {
  return (
    <View>
      <Link to='/signin'>
        <Text fontWeight='bold' color='white' fontSize='subheading'>
          Sign in
        </Text>
      </Link>
    </View>
  );
};

export default SignInTab;
