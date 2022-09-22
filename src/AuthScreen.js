import React,{useEffect, useState} from "react";

import auth from "@react-native-firebase/auth"
import DrawerScreenControl from "./DrawerScreenControl";
import StudentDetailsScreen from "./StudentDetailsScreen";
import LoginScreen from "./LoginScreen";
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();
const AuthScreen = () => {
   
    const [isLogged,setIsLogged] = useState(null);

    const handleUser = user => user ? setIsLogged(user) : setIsLogged(null)
    useEffect(() => {
        auth().onAuthStateChanged((user) => handleUser(user))
    },[])
   
    return(
        <>
         {isLogged ? <DrawerScreenControl/> : <LoginScreen/>}
        </>
    )
}
export default AuthScreen