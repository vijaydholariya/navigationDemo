import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {Pressable} from 'react-native';
import * as Font from 'expo-font';
const IconButton: React.FC = () => {
  //   const handleIconPress = () => {
  //     // Handle the press event here
  //     console.log('Icon pressed!');
  //   };
  return (
    // <Pressable onPress={handleIconPress}>
    <Ionicons name="star" size={24} color="white" />
    // </Pressable>
  );
};
export default IconButton;
