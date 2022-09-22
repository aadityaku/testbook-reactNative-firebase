import { StyleSheet, Text, View,FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import question from '../data/question'
const TestScreen = ({navigation,route}) => {
    const {data} =route.params
    console.log(data.description);
    const [questionData,setQuestionData] = useState([])
    const [page,setPage] = useState(1)
    const [answer,setAnswer] = useState('')
    // console.log(question[2].testId.description);
    const handleData = () => {
        setQuestionData([])
        for(let x=0;x<question.length;x++){
            
            if(data.description === question[x].testId.description){ 
                let  a = 0
                setQuestionData((prev) => [...prev,question[x]])
            }
        }
    }
    useEffect(()=>{
        handleData();
    },[])
    // console.log(question[4].testId.description);
    // console.log(page);
    console.log(questionData);
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",padding:8,paddingHorizontal:12,backgroundColor:"blue",borderRadius:2}}>
             <Text style={{color:"white",fontWeight:"600",marginLeft:6}}>{data.description}</Text>
             <Text style={{backgroundColor:"white",padding:2,paddingHorizontal:7,textAlign:"center",borderRadius:5,color:"black"}}>23:12</Text>
        </View>
        <View style={{justifyContent:"space-between",flexDirection:'row',padding:8}}>
              <View style={{flexDirection:"row"}}>
                   <Text style={{backgroundColor:"blue",padding:2,color:"white",borderRadius:7}}>{page}</Text>
                   <Text style={{marginLeft:10,fontSize:16}}>4</Text>
              </View>
              <View style={{flexDirection:"row"}}>

              </View>
        </View>
      <View style={{padding:5,paddingHorizontal:10,flex:1}}>
            <Text style={{color:"red",fontSize:19}}>{questionData[page-1]?.question} ? </Text>
             <TouchableOpacity style={{marginTop:8,borderWidth:0.3,borderColor:"gray",padding:5,justifyContent:"center",borderRadius:5,paddingVertical:10,elevation:0.5,backgroundColor:(answer === questionData[page-1]?.optionA) ? "#a5d6a7":"white"}}  onPress={() => setAnswer(questionData[page-1]?.optionA)}>
                <Text style={{marginTop:2,fontSize:16,marginLeft:4}}>{questionData[page-1]?.optionA}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:8,borderWidth:0.3,borderColor:"gray",padding:5,justifyContent:"center",borderRadius:5,paddingVertical:10,elevation:0.5,backgroundColor:(answer === questionData[page-1]?.optionB) ? "#a5d6a7":"white"}} onPress={() => setAnswer(questionData[page-1]?.optionB)}>
                <Text style={{marginTop:2,fontSize:16,marginLeft:4}}>{questionData[page-1]?.optionB}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:8,borderWidth:0.3,borderColor:"gray",padding:5,justifyContent:"center",borderRadius:5,paddingVertical:10,elevation:0.5,backgroundColor:(answer === questionData[page-1]?.optionC) ? "#a5d6a7":"white"}} onPress={() => setAnswer(questionData[page-1]?.optionC)}>
                <Text style={{marginTop:2,fontSize:16,marginLeft:4}}>{questionData[page-1]?.optionC}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:8,borderWidth:0.3,borderColor:"gray",padding:5,justifyContent:"center",borderRadius:5,paddingVertical:10,elevation:0.5,backgroundColor:(answer === questionData[page-1]?.optionD) ? "#a5d6a7":"white"}} onPress={() => setAnswer(questionData[page-1]?.optionD)}>
                <Text style={{marginTop:2,fontSize:16,marginLeft:4}}>{questionData[page-1]?.optionD}</Text>
            </TouchableOpacity> 
          {/* <TouchableOpacity style={styles.option}  onPress={() => setAnswer(questionData[page-1]?.optionA)}>
                <Text style={{marginTop:2,fontSize:16,marginLeft:4}}>{questionData[page-1]?.optionA}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => setAnswer(questionData[page-1]?.optionB)}>
                <Text style={{marginTop:2,fontSize:16,marginLeft:4}}>{questionData[page-1]?.optionB}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => setAnswer(questionData[page-1]?.optionC)}>
                <Text style={{marginTop:2,fontSize:16,marginLeft:4}}>{questionData[page-1]?.optionC}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => setAnswer(questionData[page-1]?.optionD)}>
                <Text style={{marginTop:2,fontSize:16,marginLeft:4}}>{questionData[page-1]?.optionD}</Text>
            </TouchableOpacity> */}
      </View>
        
       <View style={{flexDirection:"row",justifyContent:"space-between",padding:5,paddingHorizontal:10}}>
            <Text onPress={() => setPage(page>1?page-1:1)} style={{color:"red",backgroundColor:"#ffebee",padding:10,borderRadius:8,paddingHorizontal:14}}>Prev</Text>
               
            <Text onPress={() => setPage((questionData.length === page)?1:page+1)} style={{color:"green",backgroundColor:"#a5d6a7",padding:10,borderRadius:8,paddingHorizontal:14}}>Next</Text>
       </View>
    </SafeAreaView>
  )
}

export default TestScreen

const styles = StyleSheet.create({
    option:{
        marginTop:8,borderWidth:0.3,borderColor:"gray",padding:5,justifyContent:"center",borderRadius:5,paddingVertical:10,elevation:0.5
    },
   
})