import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import colors from "../config/colors"
import AppText from './AppText'

export default function Card({image , title , subTitle}) {
  return (
    <View style={styles.card}>
       <Image
        source={image}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        borderRadius : 15,
        backgroundColor : colors.light,
        marginBottom : 20,
        overflow : 'hidden'
    },
    detailsContainer:{
      padding : 20
    },
    image:{
        height:200,
        width : '100%'
    },
    subTitle:{
      color : colors.secondary,
      fontWeight : 'bold'
    },
    title:{
      marginBottom : 7
    },
})