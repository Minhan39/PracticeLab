import {createNativeStackNavigator} from '@react-navigation/native-stack';
import User from '../screens/User';
import Options from '../screens/Options';

const Stack = createNativeStackNavigator();

const UserTabs = () => {
  return (
    <Stack.Navigator
      initialRouteName="User"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Options" component={Options} />
    </Stack.Navigator>
  );
};

export default UserTabs;
