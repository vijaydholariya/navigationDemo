import Meal from '../models/meal';

type RootStackParamList = {
  CategoryScreen: undefined;
  FoodSubCategory: {id: String};
  DetailsScreen: {};
  navigate: (scene: string) => void;
};

export type {RootStackParamList};
