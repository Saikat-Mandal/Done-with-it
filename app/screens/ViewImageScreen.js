import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'

import colors  from '../config/colors'

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" color={colors.light} size={30}/>
        </View>
        <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="delete" color={colors.light} size={30}/>
        </View>
      <Image
       style={styles.image}
       source={require('../assets/chair.jpg')}
       resizeMode="contain" 
       />
    </View>
  )
}

const styles = StyleSheet.create({
    closeIcon:{
        position : 'absolute',
        top:50,
        left :30
    },
    container:{
        backgroundColor : colors.dark,
        flex:1
    },
    deleteIcon : {
        position : 'absolute',
        top:50,
        right :30
    },
    image:{
        width :'100%',
        height :'100%',

    }
})