import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import colors from "../config/colors"
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/jacket.jpg')}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Blue jacket</AppText>
        <AppText style={styles.subTitle}>$107</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/profile.jpg')}
            title="Saikat Mandal"
            subTitle = "5 listings"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor : 'white',
  },
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
      height:300,
      width : '100%'
  },
  subTitle:{
    color : colors.secondary,
    fontWeight : 'bold'
  },
  title:{
    marginBottom : 7
  },
  userContainer:{
    marginTop : 20
  }
})