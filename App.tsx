import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './Drawer/Dashboard';
import CategoryScreen from './screens/CategoryScreen';
import FoodInfoScreen from './screens/FoodInfoScreen';
import {RootStackParamList} from './screens/types';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Dashboard />
        {/* <Stack.Navigator
        screenOptions={{
          title: 'All categories',
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#351401'},
        }}>
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="FoodSubCategory" component={FoodInfoScreen} />
      </Stack.Navigator> */}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
