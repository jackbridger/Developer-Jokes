// Gets the data which is stored in the location of storage key
// If successfully retrieves data, it converts it to JSON from a string value
// and resolves with the data

import AsyncStorage from '@react-native-community/async-storage';
import STORAGE_KEY from '../constants/STORAGE_KEY';

export default getLocalData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value !== null) {
        const objValue = JSON.parse(value);
        resolve(objValue);
      }
    } catch (e) {
      reject(e);
    }
  });
};
