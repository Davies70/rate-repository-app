import { Picker } from '@react-native-picker/picker';

const Sorter = ({ setRepoSortType, repoSortType }) => {
  const latest = {
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
  };

  const highest = {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'DESC',
  };

  const lowest = {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'ASC',
  };

  const options = [
    { label: 'Latest repositories', value: latest },
    { label: 'Highest rated repositories', value: highest },
    { label: 'Lowest rated repositories', value: lowest },
  ];
  return (
    <Picker
      selectedValue={repoSortType}
      onValueChange={(itemValue) => setRepoSortType(itemValue)}
      prompt='Select an item'
    >
      {options.map((option, key) => {
        return (
          <Picker.Item label={option.label} value={option.value} key={key} />
        );
      })}
    </Picker>
  );
};

export default Sorter;
