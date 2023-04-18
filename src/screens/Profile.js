import React ,{useState, useEffect} from 'react'
import { View ,Text, TouchableOpacity, Button, StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Profile = ({navigation}) => {
  const [token, setToken] = useState(null)
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

  const logout= async()=>{
    await AsyncStorage.removeItem('token')
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text> 
          <Button  title='Log out' onPress={logout}/>
    </View>
  )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems: "center",
      },
      title:{
        color:"#FA1E10",
        fontSize:40,
        fontWeight:600,
        marginBottom:20
      },
      
})
