import {FlatList, View, Text, ScrollView, Image} from 'react-native';
import {CATEGORIES, MEALS} from '../data/api_data';
import {mealImageUrls} from '../data/api_data';
import CategoryGridTile from '../listDataItems/CategoryListItem';
import {RootStackParamList} from '../screens/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ImageSlider} from 'react-native-image-slider-banner';
import React from 'react';
type CategoryScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CategoryScreen'
>;

type CategoryScreenProps = {
  navigation: CategoryScreenNavigationProp;
};

const CategoryScreen: React.FC<CategoryScreenProps> = ({navigation}) => {
  function onpressHandler(data1: String) {
    return navigation.navigate('FoodSubCategory', {id: data1});
  }

  const mealImageUrls: any[] = MEALS.map(meal => ({img: meal.imageUrl}));
  return (
    <>
      <FlatList
        data={CATEGORIES}
        renderItem={itemData => (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={() => onpressHandler(itemData.item.id)}
          />
        )}
        ListHeaderComponent={
          <ImageSlider
            data={mealImageUrls}
            autoPlay={false}
            onItemChanged={item => console.log('item', item)}
            caroselImageStyle={{resizeMode: 'cover'}}
            closeIconColor="#fff"
          />
        }
        numColumns={2}
      />
    </>
  );
};

export default CategoryScreen;
