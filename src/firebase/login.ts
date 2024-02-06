import firestore from "@react-native-firebase/firestore";

export const saveData =async (login: string, social:string) => {
    firestore().collection('User').add({
        login,
        social
    }).then((d) => console.log(d)).catch(e=> console.log(e))
}
