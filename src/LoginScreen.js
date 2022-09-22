import React,{useState} from 'react';
import {View,Text,Button,StyleSheet, TextInput} from "react-native";
import firestore from "@react-native-firebase/firestore"
import auth from '@react-native-firebase/auth';

export default function LoginScreen({navigation}){
    //if true sms sent successfully
    const [sent,setSent] = useState(false);
    const [code,setCode] = useState("");
    const [confirm,setConfirm] = useState(null);

    const [phone,setPhone] = useState('+91');

    async function signInWithPhoneNumber(phoneNumber) {
        console.log(phoneNumber)
        // const no = '+91'+phoneNumber;
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        console.log(confirmation)
        setConfirm(confirmation)
      }

      async function confirmCode() {
        console.log(code)
        try {
          await confirm.confirm(code);
          alert("You are logged successfully")
        } catch (error) {
          console.log('Invalid code.');
        }
      }
    const HandleLogin = () => {
        
        setSent(true);
        signInWithPhoneNumber(phone);
    }
    return (
        <View style={{backgroundColor:"white",flex:1,padding:4,alignItems:"center"}}>
            <View style={{backgroundColor:"white",borderRadius:10,height:270,width:"97%",marginTop:10}}>
               <View style={{marginTop:15}}>
                <Text style={{textAlign:"center",fontWeight:"500",fontSize:20}} >Login to Continue!</Text>
                  <View style={{padding:20}}>
                      <TextInput  
                      style={{margin:3,borderRadius:8,padding:12,backgroundColor:"#e6e9ee",fontSize:18,fontFamily:"sans-serif"}} 
                      value={phone} 
                      onChangeText={text => setPhone(text)} 
                      placeholder="Enter Mobile No " />
                      
                    </View>

                 {
                     sent &&  <View style={{padding:10}}>
                         <TextInput  
                         style={{margin:3,borderRadius:8,padding:12,backgroundColor:"#e6e9ee",fontSize:18,fontFamily:"sans-serif"}} 
                         placeholder="Enter OTP"
                         secureTextEntry={true}
                         value={code}
                         onChangeText={text => setCode(text)}/>
                         </View>
                 }
                  
                  <View style={{padding:10,marginBottom:35}}>
                      {!sent && <Text style={styles.btn}   title='Sent OTP' onPress={() => HandleLogin()}>Sent Otp</Text>}
                      {sent && <Text style={styles.btn} onPress={() => confirmCode()}>Verify</Text>}

                  {/* <View style={{flexGrow:1,flexDirection:"row",marginTop:7,padding:5}}>
                      <View style={{flexGrow:1}}><Text style={{fontWeight:"500",fontSize:18,color:"red"}}>Forgot Password?</Text></View>
                      <View><Text style={{fontWeight:"500",fontSize:18,color:"green"}}>Register?New!</Text></View>
                  </View> */}
                  </View>
                 </View>
           </View>
        </View>
    )
    
}

const styles=StyleSheet.create({
  btn:{
    backgroundColor:"#010808",
    textAlign:"center",
    padding:12,
    fontSize:20,
    color:"white",
    fontWeight:"500",
    borderRadius:40,
    
}
})