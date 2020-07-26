import AsyncStorage from '@react-native-community/async-storage';

export default getLocalData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      console.log('value retreived', value);
      if (value !== null) {
        // value previously stored
        const objValue = JSON.parse(value);
        resolve(objValue);
      }
    } catch (e) {
      reject(e);
    }
  });
};
