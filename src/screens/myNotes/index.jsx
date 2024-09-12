//import liraries
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../../components/router/header';
import {AppColors} from '../../theme/appColors';
import ScreenStyle from '../../styles/screenStyle';

// create a component
const MyNotes = () => {
  return (
    <SafeAreaView style={ScreenStyle.container}>
      <View style={styles.container}>
        <Header />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default MyNotes;
