// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNOTES, MYNOTES} from '../utils/routes';
import MyNotes from '../screens/myNotes';
import AddNote from '../screens/addNote';
import ScreenStyle from '../styles/screenStyle';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      style={ScreenStyle.container}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={MYNOTES} component={MyNotes} />
      <Stack.Screen name={ADDNOTES} component={AddNote} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
