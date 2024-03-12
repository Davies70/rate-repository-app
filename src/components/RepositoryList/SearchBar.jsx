import { Searchbar } from 'react-native-paper';
import theme from '../../theme';

const SearchBar = ({ setKeyword, keyword }) => {
  return (
    <Searchbar
      placeholder='Search'
      onChangeText={(value) => setKeyword(value)}
      value={keyword}
      style={{ backgroundColor: theme.backGroundColor.white }}
    />
  );
};

export default SearchBar;
