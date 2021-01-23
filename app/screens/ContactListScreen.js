import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import ListOfSelectedContacts from '../components/ListOfSelectedContacts';
import ListOfAllContacts from '../components/ListOfAllContacts';
import SearchBar from '../components/SearchBar';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import {connect} from 'react-redux';
import {
  setContactList,
  setOriginalContacts,
  setSelectedContacts,
  setFavoriteContacts,
} from '../actions/actions';

const ContactListScreen = (props) => {
  const [selectionMode, setSelectionMode] = useState(false);

  useEffect(() => {
    fetchAllContacts();
  }, []);

  const fetchAllContacts = async () => {
    if (Platform.OS === 'android') {
      let status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      if (status === 'denied' || status === 'never_ask_again') {
        Alert.alert('Permissions not granted to access Contacts');
      } else {
        Contacts.getAll().then((contacts) => {
          props.dispatch(setContactList(contacts));
          props.dispatch(setOriginalContacts(contacts));
        });
      }
    } else {
      Contacts.getAll().then((contacts) => {
        props.dispatch(setContactList(contacts));
        props.dispatch(setOriginalContacts(contacts));
      });
    }
  };

  async function requestPermissions() {
    let status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    );
    console.log('status', status);
  }

  const setContactSelected = (contact) => {
    let newContacts = props.contactList;
    newContacts.find((cont) => {
      return cont.recordID === contact.recordID;
    }).selected = true;
    props.dispatch(setContactList(newContacts));
    addToSelectedContacts(contact);
  };

  const setContactDeselected = (contact) => {
    let newContacts = props.contactList;
    newContacts.find((cont) => {
      return cont.recordID === contact.recordID;
    }).selected = false;
    props.dispatch(setContactList(newContacts));
    removeFromSelectedContacts(contact);
  };

  const addToSelectedContacts = (contact) => {
    props.selectedContacts.push(contact);
    props.dispatch(setSelectedContacts([...props.selectedContacts]));
  };

  const removeFromSelectedContacts = (contact) => {
    let newSelected = props.selectedContacts.filter(
      (c) => c.recordID !== contact.recordID,
    );
    props.dispatch(setSelectedContacts(newSelected));
  };

  const addToFavorites = () => {
    setSelectionMode(false);
    let newFavs = [...props.favorites];
    props.selectedContacts.forEach((item) => {
      if (!props.favorites.includes(item)) {
        newFavs.push(item);
      }
    });
    props.dispatch(setFavoriteContacts([...newFavs]));
    props.contactList.forEach((item) => {
      setContactDeselected(item);
    });
    props.dispatch(setSelectedContacts([]));
    Alert.alert(
      'Added ' + props.selectedContacts.length + ' contants to favorites',
    );
  };

  const cancel = () => {
    setSelectionMode(false);
    props.contactList.forEach((item) => {
      setContactDeselected(item);
      props.dispatch(setSelectedContacts([]));
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContentView}>
        {selectionMode ? (
          <View style={styles.cancelView}>
            <TouchableOpacity onPress={cancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={addToFavorites}>
              <Text style={styles.cancelText}>Add to favorites</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <SearchBar />
      </View>
      <View style={styles.subContainer}>
        {selectionMode && props.selectedContacts.length > 0 ? (
          <ListOfSelectedContacts
            contacts={props.selectedContacts}
            setContactDeselected={setContactDeselected}
          />
        ) : null}
        <ListOfAllContacts
          contacts={props.contactList}
          selectionMode={selectionMode}
          setSelectionMode={setSelectionMode}
          setContactSelected={setContactSelected}
          setContactDeselected={setContactDeselected}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    contactList: state.contactList,
    favorites: state.favorites,
    selectedContacts: state.selectedContacts,
    originalContacts: state.originalContacts,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  cancelView: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancelText: {
    fontSize: 16,
    color: '#147EFB',
    fontWeight: '600',
  },
  topContentView: {
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
    marginBottom: 10,
  },
});

export default connect(mapStateToProps)(ContactListScreen);
