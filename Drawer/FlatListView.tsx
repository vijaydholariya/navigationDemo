import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import InputView from '../componants/InputView';

const FlatListView = () => {
  // function FlatListView() {
  const [text11, getUserText] = useState('');
  const [inputtext, getuserInputText] = useState('');
  const [nameList, setNameList] = useState(['']);

  type ItemProps = {title: string};
  const Item = ({title}: ItemProps) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  function onItemPress() {
    console.log('itempress:', text11);
  }
  function submit() {
    // console.log(text11);
    setNameList(userNameListData => [...userNameListData, text11]);
  }
  return (
    <View style={styles.mainContainer}>
      {/* <View style={styles.inputContainer}> */}
      <InputView onChangeText={getUserText} onPress={submit} />
      {/* </View> */}
      <View style={styles.listDataContainer}>
        <FlatList
          initialNumToRender={3}
          horizontal={true}
          data={nameList}
          renderItem={itemData => (
            <View style={styles.listItem}>
              <Pressable
                onPress={onItemPress}
                android_ripple={{color: '#dddddd'}}>
                <Text style={styles.listItemText}>{itemData.item}</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  listDataContainer: {
    flex: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc',
  },

  listItem: {
    height: 100,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    padding: 10,
    margin: 5,
  },
  listItemText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default FlatListView;
