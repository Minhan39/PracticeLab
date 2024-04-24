import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ContactTabs from './ContactTabs';
import FavoriteTabs from './FavoriteTabs';
import UserTabs from './UserTabs';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="ContactTabs"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="ContactTabs"
        component={ContactTabs}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="format-list-checkbox"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteTabs"
        component={FavoriteTabs}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="star" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="UserTabs"
        component={UserTabs}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="human-greeting"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
