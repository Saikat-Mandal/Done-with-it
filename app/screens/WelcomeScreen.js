import { StyleSheet, Text, View , ImageBackground , Image } from 'react-native'
import React from 'react'
import {} from '@expo/vector-icons'

import colors  from '../config/colors'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'


export default function WelcomeScreen() {
  return (

      <ImageBackground 
      source={require('../assets/image.jpg')} 
      resizeMode="cover" 
      style={styles.image}>
       <View style={styles.logoContainer}>
        <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            
            <Text style={styles.tagline}>Your own kabaddi vala</Text>   
           
       </View>
         <View style={styles.buttonsContainer}>
            <AppButton title="Login" />
            <AppButton title="Register" color='secondary'/>
           
         </View>
      </ImageBackground>

  )
}

const styles = StyleSheet.create({
    buttonsContainer:{
        padding : 20,
        width : "100%"
    },
    image: {
        flex: 1,
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    loginButton:{
        width : '100%',
        height : 70,
        backgroundColor : colors.primary
    },
    signupBuutton:{
        width : '100%',
        height : 70,
        backgroundColor : colors.secondary
    },
    logo:{
        height : 100,
        width : 100,
        backgroundColor: colors.secondary,
        borderRadius : 100,
        borderWidth:10,
        borderColor : colors.primary
    },
    tagline:{
        backgroundColor : colors.primary,
        paddingVertical : 4,
        paddingHorizontal : 10,
        borderRadius : 20,
        marginTop : 10
    },
    logoContainer:{
        position : 'absolute',
        top:50,
        alignItems:'center'
    }
})