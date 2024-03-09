import { View } from 'react-native';
import Text from '../Text';
import { Link } from 'react-router-native';

const AppBarTab = () => {
  return (
    <View>
      <Link to='/'>
        <Text fontWeight='bold' color='white' fontSize='subheading'>
          Repositories
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
