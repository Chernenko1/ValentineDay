import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAppData = async () => {
    try {
      const value = await AsyncStorage.getItem('app');
      if (value !== null) {
        return value
      }else return 'false'
    } catch (e) {
        console.log(e)
    }
};

export const getUserData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        return value
      }
    } catch (e) {
        console.log(e)
    }
};