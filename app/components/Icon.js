import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function Icon({name="email",size=40,backgroundColor='black',iconColor='white'}) {
  return (
    <View style={{
        width : size,
        height : size,
        borderRadius : size/2,
        backgroundColor ,
        alignItems : 'center',
        justifyContent : 'center'
    }}>
      <MaterialCommunityIcons name={name} backgroundColor={backgroundColor} color={iconColor} size={size*0.5} />
    </View>
  )
}

const styles = StyleSheet.create({

})