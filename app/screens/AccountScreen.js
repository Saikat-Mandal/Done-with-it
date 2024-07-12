import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ListItem from "../components/ListItem"
import colors from '../config/colors'

const menuItems = [
    {
    title : "My listings",  
    icon : {
        name : "format-list-bulleted",
        baclground : colors.primary
    },
},   {
    title : "My listings",  
    icon : {
        name : "format-list-bulleted",
        baclground : colors.primary
    },
},
]

export default function AccountScreen() {
  return (
    <Screen>
     <View style={styles.container}>
        <ListItem
            title= "Saikat Mandal"
            subTitle= "works.saikat@gmail.com"
            image={require('../assets/profile.jpg')}
        />
     </View >

     <View style={styles.container}>
        <FlatList
            data={menuItems}
            keyExtractor={item=>item.title}
            renderItem={({item})=>
            <ListItem
                title={item.title}
                ImageComponent={item.icon}
            />
            }
        />
     </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
        marginBottom : 20
    }
})