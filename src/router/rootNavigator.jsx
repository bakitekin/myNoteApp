import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MYNOTES, ADDNOTES, EDIT_NOTE, NOTEDETAIL} from '../utils/routes';
import MyNotes from '../screens/myNote';
import AddNote from '../screens/addNote';
import {AppColors} from '../theme/appColors';
import HeaderRightButton from '../components/ui/headerRightButton';
import EditNote from '../screens/editNote';
import NoteDetail from '../screens/noteDetail/noteDetail';

const Stack = createNativeStackNavigator();

const HeaderRight = () => <HeaderRightButton />;

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen
        options={{
          headerBackTitle: 'Back',
          headerTintColor: AppColors.black,
        }}
        name={ADDNOTES}
        component={AddNote}
      />
      <Stack.Screen
        options={{
          headerBackTitle: 'Back',
          headerTintColor: AppColors.black,
          headerRight: HeaderRight,
        }}
        name={EDIT_NOTE}
        component={EditNote}
      />
      <Stack.Screen
        options={{
          headerBackTitle: 'Back',
          headerTintColor: AppColors.black,
          headerRight: HeaderRight,
        }}
        name={NOTEDETAIL}
        component={NoteDetail}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
