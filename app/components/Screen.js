import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from "expo-constants"

export default function Screen({children , style}) {
  return (
    <SafeAreaView style={[styles.screen , style]}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen : {
        paddingTop : Constants.statusBarHeight,
        paddingHorizontal:20,
        flex:1,
    }
})