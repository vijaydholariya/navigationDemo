import {Text, View} from 'react-native';
import {RootStackParamList} from './types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MealsOverview'
>;

type DetailsScreen = {
  navigation: DetailsScreenNavigationProp;
};

const DetailsScreen: React.FC<DetailsScreen> = ({navigation}) => {
  return (
    <View>
      <Text>wellcome to details</Text>
    </View>
  );
};

export default DetailsScreen;
