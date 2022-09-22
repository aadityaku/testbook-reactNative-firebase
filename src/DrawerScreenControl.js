import { Linking, StyleSheet, Text, TouchableOpacity, View,Image, RefreshControl } from 'react-native'
import React, { useState,useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import auth from '@react-native-firebase/auth';
import HeaderHome from '../components/Home/HeaderHome';
import Index from '../components/Home/Index'; 
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import firestore from "@react-native-firebase/firestore"
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import MyExamScreen from './MyExamScreen';
import { Avatar } from 'react-native-image-avatars';
import HomeScreen from './HomeScreen';
import Help from './Help';
import ViewCourseSubCategory from './ViewCourseSubCategory';

import GetCourseScreen from './GetCourseScreen';
import Instruction from './Instruction';
import TestScreen from './TestScreen';
  
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const profileImage = "https://instagram.fbom26-2.fna.fbcdn.net/v/t51.2885-19/273464669_468712634908115_2311943651117101343_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbom26-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=D6bFqszanKcAX_HVr4B&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT-ppsIWd1FpRRm1KH-JUek3Jh-vuktWGyGNcIXAzXUSKg&oe=62AD1CB3&_nc_sid=8fd12b"
function CustomDrawerContent(props) {
  const[active,setActive] = useState(false);
  const progress = useDrawerProgress();
  const navigation = useNavigation();
  
  const [isCurrentLogged,setIsCurrentLogged] = useState({})
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });
  const handleDark =() => {
    
    props.isDark();
    
  }
  const handleLogout = () => {
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}
const getCurrentUser = () =>{
  const user = auth().currentUser;
  
  const data = firestore().collection("students").where("userId", "==" , user.uid).limit(1).onSnapshot(
      snapshot => snapshot.docs.map(doc => {
        setIsCurrentLogged({
          fullname :doc.data().fullName,
          dp :doc.data().profilePicture
        })
        
      })
    )
  return data;
}
console.log(isCurrentLogged);

useEffect(()=>{
  getCurrentUser()
},[])

  return (
    <DrawerContentScrollView {...props}>

      <Animated.View style={{ transform: [{ translateX }]  }}>
      <View>
        <View style={{justifyContent:"center",marginLeft:80,marginTop:20}}>
          <Avatar imageUrl = {isCurrentLogged.dp}
              size="small"
              borderColor = "#f2f2f2" shadow/>
          {/* <Image source={{uri: "https://reactnavigation.org/img/spiro.svg"}} style={{height:60,width:60,borderRadius:100}}/> */}
        </View>
            <Text style={{textAlign:"center",fontWeight:"600",color:"red",fontSize:19}}>{isCurrentLogged.fullname}</Text>
     </View>
        <DrawerItemList {...props} />
        
        <DrawerItem label="My Exams"  style={{marginBottom:0,padding:0}} onPress={() => navigation.navigate("MyExam")} />
        <DrawerItem label="My Profile" style={{marginBottom:0,padding:0}} onPress={() => Linking.openURL('https://codewithsadiq.com/')}/>
        <DrawerItem label="Offline Test" style={{marginBottom:0,padding:0}} onPress={() => Linking.openURL('https://codewithsadiq.com/')} />
        <DrawerItem label="Share and Earn $0.4" style={{marginBottom:0,padding:0}} onPress={() => setIsDark(!isDark)} />
        <DrawerItem label={() => <Text style={{ color:(active)?"black":"white" ,fontWeight:"600" }}>Follow Us</Text>}  style={{marginBottom:0,padding:0,backgroundColor:(active)?"#f0ffff":"grey"}} onPress={() => setActive(!active)} />
         {
          active && 
          <View style={{marginLeft:20}}>
            <DrawerItem label="Facebook" style={{marginBottom:0,padding:0}} onPress={() => Linking.openURL('https://codewithsadiq.com/')} />
            <DrawerItem label="Youtube" style={{marginBottom:0,padding:0}} onPress={() => Linking.openURL('https://codewithsadiq.com/')} />
          </View>
         }
        <DrawerItem label="Logout "  style={{marginBottom:0,padding:0}} onPress={() => handleLogout()} />
        <DrawerItem label="Dark Mode" style={{marginBottom:0,padding:0}} onPress={() => handleDark()} />
    </Animated.View>
    </DrawerContentScrollView>
  );
}
function DrawerLabelContext() {
  return(
    <View>
      <Text style={{fontSize:20,textAlign:"center"}}>Aaditya kumar</Text>
    </View>
  )
}
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
  
function DrawerScreen(props){
  // function refreshPage() {
  //   window.location.reload(false);
  // }
  const handleDark = () =>{
    props.isDark()
  }
  const darkMode = props.darkMode
  const navigation=useNavigation();
      return(
        <Drawer.Navigator screenOptions={{headerTintColor:"red",drawerStyle:{
          borderTopRightRadius:7,
          borderBottomRightRadius:7,
          width: '75%',
          
          },
          
        }}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} isDark={handleDark}  />}
        
        >
           <Drawer.Screen name='Home'  options={{headerTitle:(props) => <HeaderHome navigation={navigation} {...props} darkMode={darkMode}/>,headerStyle:{
            backgroundColor:(darkMode)?"black":"white"
           }}}>
            {(props) => <HomeScreen {...props} darkMode={darkMode}/>}
           </Drawer.Screen>
          
        </Drawer.Navigator>
      )
}

function  DrawerContext(props) {
  const handleDark =() => {
    props.isDark()
  }
  return(
    <DrawerScreen isDark={handleDark} darkMode={props.darkMode}/>
  )
}
const DrawerScreenControl = () => {
  const [isDark,setIsDark] = useState(false);
  const handleDark = () => {
    setIsDark(!isDark);
  }
  // console.log(isDark);
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='root'  options={{headerShown:false}} >
              {(props) => <DrawerContext {...props} isDark={() => handleDark()} darkMode={isDark}/>}
            </Stack.Screen>
            <Stack.Screen name='MyExam'  options={{headerShown:false}}>
              {(props) => (<MyExamScreen {...props}/>)}
            </Stack.Screen>
            <Stack.Screen name='Help' component={Help} options={{headerShown:false}} />
            <Stack.Screen name='ViewCourse' component={ViewCourseSubCategory} options={{headerShown:false}} />
            <Stack.Screen name='GetCourseScreen' component={GetCourseScreen} options={{headerShown:false}} />
            <Stack.Screen name='TestScreen' component={TestScreen} options={{headerShown:false}} />
            <Stack.Screen name='Instruction' component={Instruction}  />
        </Stack.Navigator>
    </NavigationContainer>
  )
} 

export default DrawerScreenControl

const styles = StyleSheet.create({})