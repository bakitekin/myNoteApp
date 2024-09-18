import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MYNOTES, ADDNOTES, CART} from '../utils/routes';
import MyNotes from '../screens/myNotes';
import AddNote from '../screens/addNote';
import Cart from '../components/cart/cart';
import {AppColors} from '../theme/appColors';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: AppColors.black,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen name={ADDNOTES} component={AddNote} />
      <Stack.Screen name={CART} component={Cart} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
