import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import test from '../data/test'
import AntDesign from "react-native-vector-icons/AntDesign"
const GetCourseCart = ({value,x,data}) => {
    // console.log(x);
    const[active,setActive] = useState(false)
    return(
        <View style={{backgroundColor:"white",elevation:4,padding:6,width:160,borderRadius:8}} >
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
       <Image source={{uri: data.courseLogo}} style={{height:30,width:30,borderRadius:15}}/>
       
         <Text style={{textAlign:"center",backgroundColor:"#ffebee",height:16,paddingHorizontal:5,borderRadius:4,fontSize:11,color:"red"}}>{data.status}</Text>
       
    </View>
    <Text style={{textAlign:"center",marginTop:5,fontWeight:"600",color:"black"}}>{value.description}</Text>
    <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:8}}>
        <Text style={styles.test}>25 Q</Text>
        <Text style={styles.test}>25 Marks</Text>
        <Text style={styles.test}>25 Min</Text>
    </View>
    <View style={{marginTop:5,padding:4}}>
      <Text style={{textAlign:"center",borderRadius:6,backgroundColor:(active)?"#a5d6a7":"#ef9a9a",padding:4}}>{(active)?"Completed":"Start"}</Text>
    </View>
    
 </View>
    )
}

const GetCourseScreen = ({navigation,route}) => {
  const {data} = route.params;
  // console.log(data); 
  return (
    <>
    <View style={{padding:12,flexDirection:"row",backgroundColor:"white",justifyContent:"flex-start",alignItems:"center",elevation:3}} >
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft'  size={24} color='black' />
      </TouchableOpacity>
      <Text style={{color:"black",fontWeight:"600",fontSize:19,paddingHorizontal:15}}>{data.description}</Text>
    </View>
    
    <View style={{flexDirection:"row",flexWrap:"wrap",padding:10}}>
      
      {
          test.map((item,index)=>{
            let x=0
 
            if(data.description === item.testSubCategory[x].description){
              return (
                <TouchableOpacity key={index} style={{marginLeft:8,marginTop:9}} onPress={() => navigation.navigate('Instruction',{data:item})}>
                    <GetCourseCart value={item} x={x} data={data}/>
                </TouchableOpacity>
              )
            }
            // console.log(item.testSubCategory[x].description);
            x++;
           
          })
      }
      </View>
    </>
  )
}

export default GetCourseScreen

const styles = StyleSheet.create({
  test:{
    color:"black",
    fontSize:11
  }
})