import {Text, View, StyleSheet, Pressable, Image} from 'react-native';
import Meal from '../models/meal';

type itemData = {
  meal: Meal;
  // onPress: () => void;
};

interface itemData1 extends itemData {
  navigation: any;
}
const FoodInfoListItem: React.FC<itemData> = ({meal}, navigation) => {
  function selectFoodItemHandler() {
    return navigation.navigate('FoodDetailsScreen', {meal: meal});
  }

  return (
    <View>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={selectFoodItemHandler}>
        <View style={styles.mainContainer}>
          <Image style={styles.image} source={{uri: meal.imageUrl}} />
          <View style={styles.dataContainer}>
            <Text style={styles.title}> {meal.title}</Text>
            <View style={styles.dataInfo}>
              <Text style={styles.title}>
                Vegetarian:{meal.isVegetarian ? 'true' : 'false'}
              </Text>
              <Text style={[styles.title, {marginLeft: 20}]}>
                GlutenFree:{meal.isGlutenFree ? 'true' : 'false'}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 8,
    margin: 10,
    shadowColor: 'black',
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  dataContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'black',
    width: '100%',
    opacity: 0.6,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
  dataInfo: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },
});

export default FoodInfoListItem;
