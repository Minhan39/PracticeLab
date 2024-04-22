import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactList from '../screens/ContactList';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const ContactTabs = () => {
  return (
    <Stack.Navigator
      initialRouteName="ContactList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ContactList" component={ContactList} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ContactTabs;
