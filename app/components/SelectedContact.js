import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SelectedContact = (props) => {
  const {item} = props;
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => {
          props.setContactDeselected(item);
        }}>
        <Icon name="close" size={20} color="#FFFFFF" />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={
          item.hasThumbnail
            ? {uri: item.thumbnailPath}
            : require('../assets/images/defaultImage.jpg')
        }
      />
      <Text style={styles.name} numberOfLines={1}>
        {item.givenName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 65,
    width: 65,
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    width: 65,
    textAlign: 'center',
  },
  closeIcon: {
    backgroundColor: '#C3C3C3',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 3,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
export default SelectedContact;
