import React, {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CategoryScreen from '../screens/CategoryScreen';
import DetailsScreen from '../screens/DetailsScreen';
import Login from './FlatListView';

const Home = () => {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};

// type drawerType = {
//   Home: undefined;
//   Login: undefined;
// };
// const Drawer = createDrawerNavigator<drawerType>();

// const Dashboard = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Login" component={Login} />
//     </Drawer.Navigator>
//   );
// };

export default Home;
