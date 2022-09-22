import { StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Instruction = ({navigation,route}) => {
  const {data} = route.params
  
  return (
    <>
    <ScrollView>
      <View style={{padding:10,elevation:3,marginTop:5}}>
        <Text style={{textAlign:"center",fontWeight:"600",color:"black",fontSize:20}}>{data.description}</Text>
      </View>
      <View style={{justifyContent:"space-between",flexDirection:"row",padding:8,paddingHorizontal:10}}>
        <Text style={{color:"black",fontSize:15}}>Duration: {data.time} Min</Text>
        <Text style={{color:"black",fontSize:15}}>Max Marks: {data.marks}</Text>
      </View>
      <View style={{justifyContent:"center",marginTop:8}}>
          <Text style={{textAlign:"center",fontSize:20,fontWeight:"600",color:"black",marginTop:2}}>Total Question: {data.noOfquestion}</Text>
          <Text style={{textAlign:"center",fontSize:20,fontSize:20,fontWeight:"600",color:"black",marginTop:2}}>Positive Mark: {data.positiveMarks}</Text>
          <Text style={{textAlign:"center",color:"red",fontSize:20,fontWeight:"600",marginTop:2}}>Negative Mark: {data.negativeMarks}</Text>
      </View>
    </ScrollView>
    <TouchableOpacity onPress={() => navigation.navigate('TestScreen',{data:data})} style={{justifyContent:"center",padding:14,backgroundColor:"#ffebee",alignItems:"center",marginBottom:2,borderRadius:5,paddingHorizontal:5,margin:5,flexDirection:"row"}}>
       <Text style={{textAlign:"center",fontSize:17,color:"#f57f17",fontWeight:"600"}}>Agree and Continue </Text>
       <FontAwesome name='long-arrow-right' size={20} color="#f57f17" style={{marginTop:5}}/>
    </TouchableOpacity>
    </>
  )
}

export default Instruction

const styles = StyleSheet.create({})