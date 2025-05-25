import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { button, defaultOpacity } from "../styles";

interface IButton {
    onPress: () => void
    title: string
}

export function Button({ onPress, title }: IButton) {
    return(
        <TouchableOpacity 
            style={button.default}
            activeOpacity={defaultOpacity}
            onPress={onPress}
        >
            <Text style={button.defaultText}>{ title }</Text>
        </TouchableOpacity>
    )
}