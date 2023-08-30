import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    view: {
        width: '85%',
        borderColor: '#94A684',
    },
    cardTitle: {
        color: '#94A684',
        textAlign: 'center',
        fontWeight: '600',
    },
    textInput: {
        backgroundColor: '#E4E4D0',
    },
    button: {
        marginTop: 10,
    }
})