import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const FavoriteTabs = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default FavoriteTabs;
