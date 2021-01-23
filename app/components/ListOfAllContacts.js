import React from 'react';
import {View, StyleSheet, Text, SectionList} from 'react-native';
import ContactListItem from './ContactListItem';
import {formatDataForSectionList} from '../utils/DataManager';
import {connect} from 'react-redux';

const ListOfAllContacts = (props) => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={formatDataForSectionList(props.contacts)}
        data={formatDataForSectionList(props.contacts)}
        renderItem={({item}) => {
          return (
            <ContactListItem
              contact={item}
              selectionMode={props.selectionMode}
              setSelectionMode={props.setSelectionMode}
              setContactSelected={props.setContactSelected}
              setContactDeselected={props.setContactDeselected}
            />
          );
        }}
        keyExtractor={(item) => {
          return item.recordID;
        }}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeaderStyle}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    contactList: state.contactList,
    favorites: state.favorites,
    selectedContacts: state.selectedContacts,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeaderStyle: {
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default connect(mapStateToProps)(ListOfAllContacts);
