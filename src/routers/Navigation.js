import React, { useEffect, useState } from "react";
import { Login } from "../screens/Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile"



export const Navigation = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    
    
  );
};
