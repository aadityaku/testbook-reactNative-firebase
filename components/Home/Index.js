import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Image,RefreshControl } from 'react-native'
import React from 'react'
import courseCategory from '../../data/courseCategory'
import courseSubCategory from '../../data/courseSubCategory'
import { Divider } from '@rneui/themed'
const profileImage = "https://instagram.fbom26-2.fna.fbcdn.net/v/t51.2885-19/273464669_468712634908115_2311943651117101343_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbom26-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=D6bFqszanKcAX_HVr4B&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT-ppsIWd1FpRRm1KH-JUek3Jh-vuktWGyGNcIXAzXUSKg&oe=62AD1CB3&_nc_sid=8fd12b"

const CourseCartDetails =({value}) => {
  const colorList = ["#ef9a9a","#ec407a","#ab47bc","#673ab7","#651fff","#303f9f","#42a5f5","#009688","#00bcd4","#4caf50","#ffa726","#795548","#607d8b","#795548"]
  let number= Math.floor(Math.random() * colorList.length);
  return(
    <View style={{backgroundColor:colorList[number],padding:5,width:150,borderRadius:8}} >
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
const CourseCart = ({value,navigation,darkMode}) => {
  
  return(
    <View style={{width:"100%",backgroundColor:(darkMode)?"black":"white",paddingHorizontal:2,borderRadius:5,paddingVertical:4,marginTop:10}}>
    <View style={{justifyContent:"space-between",flexDirection:"row",marginTop:2,paddingHorizontal:4,backgroundColor:(darkMode)?"black":"white"}}>
           <Text style={{fontSize:18,color:(darkMode)?"white":"black",fontWeight:"600"}}>{value.title}</Text>
           <TouchableOpacity style={{backgroundColor:"blue",alignItems:"center",padding:4,marginTop:3,borderRadius:6}} onPress={() => navigation.navigate('ViewCourse',{data:value})}>
              <Text style={{fontSize:12,color:"white",textAlign:"center"}}>View all</Text>
           </TouchableOpacity>
        </View>
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:5}}  > 
        {
          
          courseSubCategory.map((item,index) => {
            let x=0;
            if(value.title === item.category[x].title){
              return (
                <TouchableOpacity style={{marginLeft:8}} key={index} onPress={() => navigation.navigate('GetCourseScreen',{data:item})}>
                  <CourseCartDetails  value={item}  />
                </TouchableOpacity>
              )
            }
            else{
              
              //  console.log(item.category[x].title);
            }
            x++;
          })
        }
        
       </ScrollView>
    </View>
  )
}

const Index = ({navigation,darkMode}) => {
  return (
    <View style={{paddingHorizontal:7,paddingVertical:5,backgroundColor:(darkMode)?"black":"#f5f5f5"}}>
     {
      courseCategory.map((item,index) => (
       <View key={index}>
        <CourseCart  value={item} navigation={navigation} darkMode={darkMode}/>
        <Divider/>
       </View>
      ))
     }
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})