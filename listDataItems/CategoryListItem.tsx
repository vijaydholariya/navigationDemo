import {FC, PropsWithChildren, VoidFunctionComponent} from 'react';
import {
  ColorValue,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type SectionProps = {
  title: string;
  color: ColorValue;
  onPress: () => void;
};
interface sectionProps2 extends SectionProps {}

const CategoryGridTile: React.FC<SectionProps> = ({title, color, onPress}) => {
  return (
    <View style={styles.mainGrid}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}>
        <View style={[styles.listItemContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>category: {title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  mainGrid: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  listItemContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
