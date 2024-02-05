import { StyleSheet, Text, TouchableOpacity } from "react-native"

interface Props {
    text: string
    onPress?: () => void
    color?: string
    textSize?: number
}

export const Button = ({text, onPress,color = 'purple', textSize = 18}: Props) => {
    return (
        <TouchableOpacity style={[styles.view, {backgroundColor: color}]} onPress={onPress} activeOpacity={0.7}>
            <Text style={[styles.text, {fontSize: textSize}]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    text: {
        color: 'white'
    }
}
)