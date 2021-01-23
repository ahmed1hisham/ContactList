import React from 'react';
import {View, StyleSheet, Text, SectionList, SafeAreaView} from 'react-native';
import ContactListItem from '../components/ContactListItem';
import {formatDataForSectionList} from '../utils/DataManager';
import {connect} from 'react-redux';

const FavoritesScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {props.favorites.length > 0 ? (
          <SectionList
            sections={formatDataForSectionList(props.favorites)}
            data={formatDataForSectionList(props.favorites)}
            renderItem={({item}) => {
              return (
                <ContactListItem
                  contact={item}
                  selectionMode={false}
                  setSelectionMode={() => {}}
                  setContactSelected={() => {}}
                  setContactDeselected={() => {}}
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
        ) : (
          <Text style={styles.emptyText}>No Favorites Added</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  sectionHeaderStyle: {
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    width: '100%',
    marginTop: 20,
  },
});
export default connect(mapStateToProps)(FavoritesScreen);
