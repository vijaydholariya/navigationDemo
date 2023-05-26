import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoryScreen from '../screens/CategoryScreen';
import FoodInfoScreen from '../screens/FoodInfoScreen';
import FlatListView from '../Drawer/FlatListView';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from '../screens/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const TabScreens = () => {
  function Root() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="FoodSubCategory" component={FoodInfoScreen} />
      </Stack.Navigator>
    );
  }
  return (
    <Tab.Navigator
      initialRouteName="login"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green',
        tabBarLabelStyle: {fontSize: 15},
        headerShown: false,
      }}>
      <Tab.Screen
        name="tabCategoryScreen"
        component={Root}
        options={{
          tabBarLabel: 'FoodCategory',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={16} />
          ),
        }}
      />
      <Tab.Screen
        name="login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={16} />
          ),
        }}
      />
      <Tab.Screen
        name="tabFoodInfoListItem"
        component={FlatListView}
        options={{
          tabBarLabel: 'FoodInfo',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={16} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabScreens;
