import React, {useLayoutEffect} from 'react';
import {Button, FlatList} from 'react-native';
import {RootStackParamList} from '../screens/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {MEALS} from '../data/api_data';
import FoodInfoListItem from '../listDataItems/FoodInfoListitem';
type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'FoodSubCategory'
>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'FoodSubCategory'>;

type Props = {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
};

const FoodInfoScreen: React.FC<Props> = ({navigation, route}) => {
  const data = route.params;
  const categoryId = data.id.toString();

  const handleGoBack = () => {
    navigation.goBack();
  };
  const foodList = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(categoryId);
  });

  // function onpressHandler(itemData: Meal) {
  //   return navigation.navigate('DetailsScreen', itemData);
  // }
  function addToFav() {
    console.log('header button is pressed');
  }

  // add button in header layout
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="press" onPress={addToFav} />;
        // return <IconicButton />;
      },
    });
  });

  return (
    <FlatList
      data={foodList}
      keyExtractor={item => item.id}
      // onEndReached={}
      // onEndReachedThreshold={}
      renderItem={itemData => <FoodInfoListItem meal={itemData.item} />}
    />
  );
};

export default FoodInfoScreen;
