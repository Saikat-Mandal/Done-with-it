import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,Image } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';



export default function App() {

  return (
    // <WelcomeScreen/>
    // <ViewImageScreen/>
  //  <ListingDetailsScreen/>
  // <MessagesScreen/>
  // <AccountScreen/>
  <ListingsScreen/>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor : 'white',
    padding:20,
    paddingTop : 50
  }
});
