import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'
const BottomIcon = ({navigation,icon_name,darkMode}) => {
    const[name,setName] = useState(icon_name);
  return (
    <View style={{justifyContent:"space-between",flexDirection:"row",padding:10,backgroundColor:(darkMode)?"black":"white"}}>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center",flexDirection:"row",backgroundColor:(name==="Home")?"#ffebee":"white",borderRadius:17,paddingHorizontal:15,paddingVertical:9}} onPress={() => navigation.navigate("Home")}>
            <SimpleLineIcons name='home' size={20} color={(name === "Home")?"red":"black"} /> 
            {(name === "Home") && <Text style={{textAlign:"center",fontSize:14,marginLeft:6,fontWeight:"600",marginTop:2,color:"red"}}>Home</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center",flexDirection:"row",backgroundColor:(name==="MyExam")?"#ffebee":"white",borderRadius:17,paddingHorizontal:15,paddingVertical:9}} onPress={() => navigation.navigate("MyExam")}>
            <Entypo name='text-document' size={22} color={(name === "MyExam")?"red":"black"} /> 
            {(name === "MyExam") && <Text style={{textAlign:"center",fontSize:14,marginLeft:6,fontWeight:"600",marginTop:2,color:"red"}}>My Exam</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:"center",alignItems:"center",flexDirection:"row",backgroundColor:(name==="Help")?"#ffebee":"white",borderRadius:17,paddingHorizontal:15,paddingVertical:9}} onPress={() => navigation.navigate("Help")}>
            <Feather name='help-circle' size={22} color={(name === "Help")?"red":"black"} /> 
            {(name === "Help") && <Text style={{textAlign:"center",fontSize:14,marginLeft:6,fontWeight:"600",marginTop:2,color:"red"}}>Help</Text>}
        </TouchableOpacity>
       
    </View>
  )
}

export default BottomIcon

const styles = StyleSheet.create({})