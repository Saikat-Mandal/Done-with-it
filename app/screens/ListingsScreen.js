import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'


const listings = [
    {
        id : 1,
        title : "Red jacket for sale",
        price : 200,
        image : require("../assets/jacket.jpg")

    },    
    {
        id : 2,
        title : "Couch in great condition",
        price : 100,
        image : require("../assets/couch.jpg")

    },
]

export default function ListingsScreen() {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={listing=>listing.id.toString()}
        renderItem={({item})=>{
            return <Card
                title={item.title}
                subTitle={"$" + item.price}
                image={item.image}
            />
        }}
      />
    
    </Screen>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#f5f5f5'
    }
})