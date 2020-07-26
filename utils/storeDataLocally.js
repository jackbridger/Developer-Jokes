// Takes data (array of jokes)
// Stringifies the array, tries to store it and if it's successful
// Resolves with jokes
import AsyncStorage from '@react-native-community/async-storage';
import STORAGE_KEY from '../constants/STORAGE_KEY';
export default storeDataLocally = (value) => {
  return new Promise(async (resolve, reject) => {
    const stringValue = JSON.stringify(value);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, stringValue);
      resolve(value);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};
