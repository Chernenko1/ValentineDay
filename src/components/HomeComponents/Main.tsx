import { Image, StyleSheet, Text, View } from "react-native"
import { Button } from "../components/Button"
import { useState } from "react"

// const BUTTON_TEXT_OBJ: {} = {
//     0: 'No',
//     1: 'Are you sure?',
//     2: 'Really sure?',
//     3: 'Think again',
//     4: 'Last chance!',
//     5: 'Surely not?',
//     6: 'You might regret this!',
//     7: 'Give it another thought!',
//     8: 'Are you absolutely certain?',
//     9: 'This could be a mistake!',
//     10: 'Have a heart!',
//     11: 'Don\'t be so cold!',
//     12: 'Change of heart?',
//     13: 'Wouldn\'t you reconsider',
//     14: 'Is that your final answer?',
//     15: 'You\'re breaking my heart :('
// }

const BUTTON_TEXT: string[] = [
    'No','Are you sure?','Really sure?', 'Think again','Last chance!','Surely not?',
    'You might regret this!', 'Give it another thought!','Are you absolutely certain?','This could be a mistake!',
    'Have a heart!','Don\'t be so cold!','Change of heart?','Wouldn\'t you reconsider','Is that your final answer?',
    'You\'re breaking my heart :('
]

export const Main = () => {
    const [noCount, setNoCount] = useState(0)
    const [yesSize, setYesSize] = useState(18)


    return (
        <View style={styles.view}>
           <Text style ={styles.text}>Will you be my Valentine?</Text>
           <Image source={require('../../../assets/jbear.gif')} style={styles.gif}/>
           <View style={styles.buttonView}>
                <Button text="Yes!" color="green" onPress={() => console.log('yes')} textSize={yesSize}/>
                <Button text = {noCount <= 15 ? BUTTON_TEXT[noCount] : BUTTON_TEXT[15]} color="red" onPress={() => setNoCount(noCount + 1)}/>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonView: {
        flexDirection: 'row',
        columnGap: 20,
        marginTop: 20
    },
    text: {
        fontSize: 24
    },
    gif: {
        width: '50%', 
        height: '20%'
    }
})