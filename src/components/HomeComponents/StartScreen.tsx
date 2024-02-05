import { Image, StyleSheet, Text, View } from "react-native"
import { Button } from "../components/Button"
import { useState } from "react"

const BUTTON_TEXT: string[] = [
    'No','Are you sure?','Really sure?', 'Think again','Last chance!','Surely not?',
    'You might regret this!', 'Give it another thought!','Are you absolutely certain?','This could be a mistake!',
    'Have a heart!','Don\'t be so cold!','Change of heart?','Wouldn\'t you reconsider','Is that your final answer?',
    'You\'re breaking my heart :('
]

interface Props {
    changeScreen: () => void
}

export const StartScreen = ({changeScreen}: Props) => {
    const [noCount, setNoCount] = useState(0)
    const [yesSize, setYesSize] = useState(18)

    const handleNoClick = () => {
        if( noCount === 15) {
        } else {
            setYesSize(prev => prev + 10)
            setNoCount(prev => prev + 1)
        }
    }

    return (
        <View style={styles.view}>
            <Text style ={styles.text}>Will you be my Valentine?</Text>
            <Image source={require('../../../assets/jbear.gif')} style={styles.gif}/>
            <View style={styles.buttonView}>
                <Button text="Yes!" color="green" onPress={changeScreen} textSize={yesSize}/>
                    <View>
                        <Button text = {noCount <= 15 ? BUTTON_TEXT[noCount] : BUTTON_TEXT[15]} color="red" onPress={handleNoClick}/>
                    </View>
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