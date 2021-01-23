import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import SelectedContact from './SelectedContact';

const ListOfSelectedContacts = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.contacts}
        renderItem={({item}) => {
          return (
            <SelectedContact
              item={item}
              setContactDeselected={props.setContactDeselected}
            />
          );
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item) => {
          return item.recordID;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
  },
});
export default ListOfSelectedContacts;
