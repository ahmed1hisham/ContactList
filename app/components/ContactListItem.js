import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactListItem = (props) => {
  const [selected, setSelected] = useState(false);
  const {contact} = props;

  useEffect(() => {
    setSelected(contact.selected);
  }, [contact.selected]);
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onLongPress={() => {
        props.setSelectionMode(true);
      }}>
      <View style={styles.imageAndName}>
        <Image
          style={styles.image}
          source={
            contact.hasThumbnail
              ? {uri: contact.thumbnailPath}
              : require('../assets/images/defaultImage.jpg')
          }
        />
        <Text style={styles.nameStyle}>
          {contact.givenName + ' ' + contact.familyName}
        </Text>
      </View>
      {props.selectionMode ? (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            contact.selected
              ? props.setContactDeselected(contact)
              : props.setContactSelected(contact);
            setSelected(contact.selected);
          }}>
          {contact.selected === true ? (
            <Icon name="check-circle" color="#147EFB" size={24} />
          ) : (
            <Icon name="circle" color="#D3D3D3" size={24} />
          )}
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  imageAndName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ContactListItem;
