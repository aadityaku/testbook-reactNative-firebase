import { ScrollView, StyleSheet, Text, View,RefreshControl, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomIcon from '../components/Home/BottomIcon'
import Index from '../components/Home/Index'
import auth from '@react-native-firebase/auth'
import firestore from "@react-native-firebase/firestore"
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const HomeScreen = ({navigation,darkMode}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [isCurrentLogged,setIsCurrentLogged] = useState(null)
  const onRefresh = React.useCallback(() => {
   
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
 
  //  console.log(darkMode);
  console.log(auth().currentUser.uid);
  return (
    <SafeAreaView style={{backgroundColor:(darkMode)?"black":"#ff7043",flex:1}}>
      <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
         <Index navigation={navigation} darkMode={darkMode} />
      </ScrollView>
      
      <BottomIcon navigation={navigation} icon_name="Home" darkMode={darkMode}/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})