import { FlatList, StyleSheet, View, } from 'react-native'
import React, { useState } from 'react'

import Screen from "../components/Screen"
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItem from '../components/ListItem'

const initialMessages = [
    {
        id : 1,
        title : 'T1',
        description : 'D1',
        image : require('../assets/jacket.jpg')
    },  
    {
        id : 2,
        title : 'T2',
        description : 'D2',
        image : require('../assets/jacket.jpg')
    },
]

export default function MessagesScreen() {

    const [messages,setMessages] = useState(initialMessages)
    const [refresh,setRefresh] = useState(false)

    const handleDelete = (message) =>{
       const newMessages = messages.filter(item=>item.id !== message.id)
       setMessages(newMessages)
    }
    
  return (
    
    <Screen>   
    <FlatList
        data = {messages}
        keyExtractor={message=>message.id.toString()}
        renderItem={({item})=>
            <ListItem 
                image={item.image}
                title={item.title}
                subTitle={item.description}
                onPress={()=>console.log("ma nigaa", item)}
                renderRightActions={()=><ListItemDeleteAction onPress={() => handleDelete(item)}/>}
            />  }
        ItemSeparatorComponent={()=><ListItemSeparator/>}
        refreshing={refresh}
        onRefresh={()=>{
            setMessages([
                {
                    id : 2,
                    title : 'T2',
                    description : 'D2',
                    image : require('../assets/jacket.jpg')
                },
            ])
        }}
        />
    </Screen>
   
  )
}

const styles = StyleSheet.create({
   
})