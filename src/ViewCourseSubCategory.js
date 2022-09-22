import { StyleSheet, Text, View,TouchableOpacity ,Image, ScrollView} from 'react-native'
import React from 'react'

import AntDesign from "react-native-vector-icons/AntDesign"
import courseSubCategory from '../data/courseSubCategory'
const ViewCourseSubCategoryCart = ({value}) => {
  const colorList = ["#ef9a9a","#ec407a","#ab47bc","#673ab7","#651fff","#303f9f","#42a5f5","#009688","#00bcd4","#4caf50","#ffa726","#795548","#607d8b","#795548"]
  let number= Math.floor(Math.random() * colorList.length);
  return(
    <View style={{backgroundColor:colorList[number],padding:5,width:160,borderRadius:8}} >
       <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <Image source={{uri: value.courseLogo}} style={{height:30,width:30,borderRadius:15}}/>
          
            <Text style={{textAlign:"center",backgroundColor:"white",height:16,paddingHorizontal:5,borderRadius:4,fontSize:11,color:colorList[number]}}>{value.status}</Text>
          
       </View>
       <Text style={{textAlign:"center",color:"white",marginTop:5}}>{value.description}</Text>
       <Text style={{textAlign:"center",color:"white"}}>{value.subject}</Text>
       <View style={{flexDirection:"row",justifyContent:"center"}}>
          <Text style={{textAlign:"center",color:"white"}}>{value.rating}</Text>
          <Text style={{textAlign:"center",color:"white"}}>({value.student.length})</Text>
       </View>
       
    </View>
  )
}
const ViewCourseSubCategory = ({navigation,route}) => {
  const {data} = route.params
  console.log(data);
  return (
    <View>
      <View style={{padding:12,flexDirection:"row",backgroundColor:"white",justifyContent:"flex-start",alignItems:"center",elevation:3}} >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft'  size={24} color='black' />
        </TouchableOpacity>
        <Text style={{color:"black",fontWeight:"600",fontSize:19,paddingHorizontal:15}}>{data.title}</Text>

    </View>
    <ScrollView >
      <View style={{flexDirection:"row",flexWrap:"wrap"}}>
    {
          
          courseSubCategory.map((item,index) => {
            let x=0;
            if(data.title === item.category[x].title){
              return (
                <TouchableOpacity style={{marginLeft:13,marginTop:10}} key={index} onPress={() => navigation.navigate('GetCourseScreen',{data:item})}>
                  <ViewCourseSubCategoryCart  value={item}  />
                </TouchableOpacity>
              )
            }
            else{
              
              //  console.log(item.category[x].title);
            }
            x++;
          })
        }
        </View>
    </ScrollView>
    </View>
  )
}

export default ViewCourseSubCategory

const styles = StyleSheet.create({})