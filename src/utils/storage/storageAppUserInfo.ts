import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeAppData = async (value: string) => {
    try {
        await AsyncStorage.setItem('app', value)
    } catch (e) {
        console.log(e)
    }
}

export const storeUserData = async (value: string) => {
    try {
        await AsyncStorage.setItem('user', value)
    } catch (e) {
        console.log(e)
    }
}