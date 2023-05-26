import React from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabScreens from '../BottomTab/TabScreens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type drawerType = {
  CategoryScreen: undefined;
  Home: undefined;
  FlatListView: undefined;
  TabScreens: undefined;
};
const Drawer = createDrawerNavigator<drawerType>();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../screens/types';

type screenType = {
  CategoryScreen: undefined;
  FoodInfoListItem: undefined;
};
const Tab = createBottomTabNavigator<screenType>();

const Stack = createNativeStackNavigator<RootStackParamList>();

const Dashboard = () => {
  return (
    <TabScreens />

    /* <Drawer.Navigator initialRouteName="TabScreens">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={{
            headerStyle: {backgroundColor: '#3c0a6b'},
            headerTintColor: 'white',
          }}
        />
        <Drawer.Screen name="FlatListView" component={FlatListView} />
        <Drawer.Screen name="TabScreens" component={TabScreens} />
      </Drawer.Navigator> */
    // </>
  );
};

export default Dashboard;
