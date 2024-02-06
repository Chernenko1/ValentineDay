import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from "@react-native-firebase/firestore"
import { getUserData } from "../utils/storage/readAppUserInfo";

export const sendUserAnswersInfo =async (answer: string) => {

    let login = await getUserData()
    firestore().collection('User').doc(login).update({array: answer}).then((d) => console.log(d)).catch(e=> console.log(e))
}