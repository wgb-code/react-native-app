import { StyleSheet, Platform } from "react-native";

export const input = StyleSheet.create({
    default: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 7,
        marginTop: 30
    },
})

export const placeholderColor = '#555';