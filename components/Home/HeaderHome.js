import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'


import  MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const logo= "https://th.bing.com/th/id/OIP.LeVAalXAjaiTlFjmVSVHnQHaE8?pid=ImgDet&rs=1"
const HeaderHome = (props) => {
  // console.log(props.darkMode);
  
  return (
    <View style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row"}}>
       <View style={{flexDirection:"row"}}>
            
            <Text style={{fontWeight:"600",color:"red",fontSize:19}}>CWA</Text>
       </View>
        <View style={{flexDirection:"row" ,justifyContent:"space-around",marginLeft:150}}>
            <TouchableOpacity>
                <MaterialCommunityIcons name='qrcode-scan' size={23} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:24}} onPress={() => props.navigation.navigate('MyExam')}>
                <MaterialCommunityIcons name='refresh' size={25}  color="red" />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HeaderHome

const styles = StyleSheet.create({})