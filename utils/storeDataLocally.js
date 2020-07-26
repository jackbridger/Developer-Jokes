import AsyncStorage from '@react-native-community/async-storage';

export default storeDataLocally = (value) => {
  return new Promise(async (resolve, reject) => {
    const stringValue = JSON.stringify(value);
    try {
      console.log('storing an object, ', stringValue);
      await AsyncStorage.setItem('@storage_Key', stringValue);
      resolve(value);
    } catch (e) {
      console.log(e);
    }
  });
};
