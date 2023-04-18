import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Button, TextInput, Text, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Login = ({navigation}) => {
    const [token, setToken] = useState()
    useEffect(()=>{
        getToken();
        
    },[])
    const getToken=async()=>{
        const data = await AsyncStorage.getItem('token');
        if(data){
            navigation.navigate('Profile')
        }else{
            navigation.navigate('Login')
        }
      }
    const [username, setusername]=useState("")
   
    const [password,setPassword]=useState("")
    
    const submit=()=>{
        
        // return Alert.alert(username, password)
        fetch("https://dev-api.qwikxr.com/api/v1/auth/get-token/", {
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({username:username,
                password:password})
        }).then((res)=>
            res.json()
        )
        .then(async(response)=>{
            await AsyncStorage.setItem('token',response.token)
            if(response.token){
                navigation.navigate("Profile")
            }
            Alert.alert("Thank you")
            console.log(response);
        }).catch((e)=>{
            console.log(error)
        }
        )
        
       
        
    }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
      <Text style={styles.header}>Login Form</Text>
            <TextInput 
                style={styles.input}
                placeholder='Enter username'
                autoCapitalize='none'
                autoCorrect={false}
                value={username}
                onChangeText={(data)=>{
                    setusername(data)
                }}
            />

            <TextInput 
                style={styles.input}
                placeholder='Enter Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                value={password}
                onChangeText={(data)=>{
                    setPassword(data)
                }}
            />

        <Button
          title="Login"
          onPress={submit}
        />
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container: {
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      wrapper: {
        width: '80%',
      },
      header:{
        marginBottom:20,
        paddingLeft:70,
        color:"blue",
        fontSize:30,
        fontWeight:600
      },
      input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
      },
})
