import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { Button } from "../components/Button";
import { saveData } from "../../firebase/login";

export const Registration = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const [login, setLogin] = useState('')
    const [media, setMedia] = useState('')

    const dataSave = () => {
        if(login !== '') {
            saveData(login,media)
            setModalVisible(false)
        }
    }

    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={{fontSize: 18}}>В строке "Media" введите ваши соц.сети (tg - "Name")</Text>
                <TextInput multiline = {true} style={styles.input} placeholder="Login" value={login} onChangeText={text => setLogin(text)}/>
                <TextInput multiline = {true} style={styles.input} placeholder="Media" value={media} onChangeText={text => setMedia(text)}/>
                <View style={{marginTop: 15}}>
                    <Button text="Сохранить" color="red" textSize={15} onPress={dataSave}/>
                </View>
            </View>
          </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: '70%'
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    input: {
        borderBottomWidth: 1,
        width: '100%',
    }
  });