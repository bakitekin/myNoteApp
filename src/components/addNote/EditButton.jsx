//import liraries
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Buttons} from './Buttons';
// create a component
const EditButton = () => {
  return (
    <View style={styles.container}>
      {Buttons.map(item => {
        return (
          <TouchableOpacity key={item.id} onPress={item.onPress}>
            {item.icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

//make this component available to the app
export default EditButton;
