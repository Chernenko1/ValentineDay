import { Image, StyleSheet, Text, View } from "react-native"
import { Button } from "../components/Button"
import { useState } from "react"
import { EndScreen } from "./EndScreen"
import { StartScreen } from "./StartScreen"

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

    const [screen, setScreen] = useState(false)

    const handleClick = () => {
        setScreen(true)
    }

    if (screen) {
        return <EndScreen />
    } else {
        return <StartScreen changeScreen = {handleClick}/>
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        columnGap: 20,
        rowGap: 5,
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