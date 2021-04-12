import React, {useState} from 'react';
import {View} from 'react-native';

// Components
import SearchBar from '../components/SearchBar';

const Restaurant = () => {
  const [term, setTerm] = useState('');
  console.log(term);
  return (
    <View>
      <SearchBar
        term={term}
        handleInputText={changedTerm => {
          setTerm(changedTerm);
        }}
      />
    </View>
  );
};
export default Restaurant;
