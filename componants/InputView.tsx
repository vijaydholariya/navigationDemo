import {FC} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

interface props {
  onChangeText: (text: string) => void;
  onPress: any;
}

const InputView: FC<props> = input => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name:"
        onChangeText={input.onChangeText}
        multiline
        numberOfLines={3}
      />
      <Button title="submit" onPress={input.onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 5,
    padding: 5,
  },
});

export default InputView;
