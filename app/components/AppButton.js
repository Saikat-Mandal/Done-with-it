import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from "../config/colors"

export default function AppButton({onPress , title , color="primary"}) {
  return (
    <TouchableOpacity style={[styles.button , {backgroundColor : colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor : colors.primary,
        borderRadius : 25,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 15,
        width : '100%',
        marginVertical : 5
    },
    text :{
        color : colors.light,
        fontSize : 18,
        textTransform : 'uppercase',
        fontWeight : 'bold'
    }
})