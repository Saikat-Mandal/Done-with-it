import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ListItem from "../components/ListItem"
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [
    {
    title : "My listings",  
    icon : {
        name : "format-list-bulleted",
        backgroundColor : colors.primary
        },
    },   
    {
        title : "My messages",  
        icon : {
            // name : "format-list-bulleted",
            backgroundColor : colors.secondary
        },
    },
]

export default function AccountScreen() {
  return (
    <Screen style={{backgroundColor : '#f5f5f5'}}>
     <ListItem
            title= "Saikat Mandal"
            subTitle= "works.saikat@gmail.com"
            image={require('../assets/profile.jpg')}
        />
        <View style={styles.container}>
            <FlatList
                data={menuItems}
                keyExtractor={menuItem=>menuItem.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item})=>
                <ListItem
                    title={item.title}
                    IconComponent={
                    <Icon  
                        name = {item.icon.name}
                        backgroundColor={item.icon.backgroundColor}
                    />}
                />
                }
            />
        </View>
        <ListItem
             title="Logout"
             IconComponent={
                <Icon  
                    name = "logout"
                    backgroundColor="orange"
                />}
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
        marginBottom : 20,
        backgroundColor: colors.light
    }
})