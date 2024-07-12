import { StyleSheet, Text, View ,Image, TouchableHighlight } from 'react-native'
import React from 'react'
import colors from '../config/colors'

import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";

export default function ListItem({image , title , subTitle , onPress , renderRightActions ,  IconComponent }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions} >
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
            
          <View style={styles.container}>

            {IconComponent}
           { image && <Image
              source={image}
              style={styles.image}
              />}

          <View style={styles.detailsContainer}>
              <Text style={styles.title}>{title}</Text>
             {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        marginTop : 10,
        paddingVertical:10,
        paddingHorizontal:20,
    },
    detailsContainer:{
        justifyContent : 'center',
        marginLeft :10
    },
    image:{
        height: 70,
        width:70,
        borderRadius:50,
       
    },
    subTitle:{
        color : colors.secondary
    },
    title:{
        fontWeight : 'bold'
    }
})