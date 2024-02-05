import { Image, StyleSheet, Text, View } from "react-native"
import { Button } from "../components/Button"
import { useState } from "react"

export const Main = () => {
    const [noCount, setNoCount] = useState(0)
    const [yesSize, setYesSize] = useState(18)


    return (
        <View style={styles.view}>
           <Text style ={styles.text}>Will you be my Valentine?</Text>
           <Image source={require('../../../assets/jbear.gif')} style={styles.gif}/>
           <View style={styles.buttonView}>
                <Button text="Yes!" color="green" onPress={() => console.log('yes')} textSize={yesSize}/>
                <Button text = "No!" color="red" onPress={() => setNoCount(noCount + 1)}/>
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