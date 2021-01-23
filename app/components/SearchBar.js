import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {setContactList} from '../actions/actions';

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    search();
  }, [searchText]);

  const filterList = (list) => {
    return list.filter(
      (item) =>
        item.givenName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.familyName.toLowerCase().includes(searchText.toLowerCase()),
    );
  };
  const search = () => {
    let result = filterList(props.originalList);
    props.dispatch(setContactList(result));
  };

  return (
    <TextInput
      style={styles.container}
      value={searchText}
      placeholderTextColor="#D3D3D3"
      placeholder="Search"
      onChangeText={setSearchText}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    contactList: state.contactList,
    favorites: state.favorites,
    selectedContacts: state.selectedContacts,
    originalList: state.originalList,
  };
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: '100%',
    borderRadius: 10,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    fontSize: 20,
  },
});
export default connect(mapStateToProps)(SearchBar);
