import React ,{useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Home = ({ navigation }) => {
 
  const login = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button style={styles.buttonStyle} title="Login" onPress={login} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems: "center",
  },
  title:{
    color:"#FAC510",
    fontSize:40,
    fontWeight:600,
    marginBottom:20
  },
  
});

