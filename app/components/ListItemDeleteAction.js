import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';

export default function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}  >
            <MaterialCommunityIcons name="delete" color={colors.light} size={35}/>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
})