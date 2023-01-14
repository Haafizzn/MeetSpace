import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/Logo.svg'


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import { Card } from 'react-native-paper';
import Kwitan from '../../assets/components/Kwitan';

const Stack = createNativeStackNavigator();

const Receipt = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{headerShown:false}} />
            <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
        </Stack.Navigator>
  );
}


const Main = () => {
  return (
    <SafeAreaView style={{
      flex:1,
      justifyContent:'center',
      alignItems: 'center'

    }}>
      <View style={{
       margin:10,
       }}>
        <Logo width={300} height={140}/>
        </View>
        <Card style={{
          width: '90%',
        }}>
          <Kwitan/>
        </Card>
        <TouchableOpacity 
            onPress={() => navigation.navigate('Login')}
            style={{
              backgroundColor:'#39B54A',
              padding:10,
              width:'90%',
              borderRadius:25,
              flexDirection:'row',
              justifyContent:'center',
              fontFamily:'Inter',
              marginTop:60,
        }}>
            <Text style={{
              fontWeight:'bold',
              color:'#fff',
              fontSize:18,
            }}>LANJUTKAN</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Receipt

const styles = StyleSheet.create({})