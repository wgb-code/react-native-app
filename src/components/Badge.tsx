import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { badge, text } from "../styles";

interface Badge {
    value: string
}

export function Badge({ value }: Badge) {
    return(
        <TouchableOpacity style={badge.content}>          
            <Text style={text.badge}>
              {value}
            </Text>
        </TouchableOpacity>
    )
}