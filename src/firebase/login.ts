import firestore from "@react-native-firebase/firestore";
import { storeUserData } from "../utils/storage/storageAppUserInfo";

export const saveData =async (login: string, social:string) => {
    firestore().collection('User').add({
        login,
        social
    }).then((d) => storeUserData(d._documentPath._parts[1])).catch(e=> console.log(e))
}
