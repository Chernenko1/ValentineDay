import { Image, StyleSheet, Text, View } from "react-native"

export const EndScreen = () => {
    return (
        <View style={styles.view}>
           <Image source={require('../../../assets/kissbear.gif')} style={styles.gif}/>
           <Text style ={styles.text}>Ok yay!!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 5
    },
    text: {
        fontSize: 36,
        color: 'black'
    },
    gif: {
        width: '50%', 
        height: '20%'
    }
})