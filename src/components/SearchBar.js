import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = ({term, handleInputText}) => {
  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={term}
        onChangeText={handleInputText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f0eeef',
    borderRadius: 5,
    margin: 15,
  },
  input: {
    fontSize: 16,
  },
});

export default SearchBar;
