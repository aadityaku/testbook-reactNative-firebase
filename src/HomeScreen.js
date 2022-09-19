import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomIcon from '../components/Home/BottomIcon'
import Index from '../components/Home/Index'


const HomeScreen = ({navigation }) => {
  return (
    <>
      <ScrollView>
         <Index navigation={navigation}/>
      </ScrollView>
      
      <BottomIcon navigation={navigation} icon_name="Home"/>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})