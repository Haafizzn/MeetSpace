import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Logo from '../../assets/images/Logo.svg';
import Login from '../Login';

const Stack = createNativeStackNavigator();

const Signin = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{headerShown:false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        </Stack.Navigator>
  );
}

const Main = ({navigation}) => {
    return(
        <SafeAreaView style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
          }}>
        <ImageBackground 
            source={require('../../assets/images/background.png')}
            style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
         }}/>
        <View style={{
              marginTop:200,
              margin:100,
              }}>
        <Logo width={300} height={140}/>
        </View>
        <View>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              color:'#fff',
              fontFamily:'Roboto-BoldItalic',
              textAlign:'center',
            }}>Selamat Datang di MeetSpace</Text>
        </View>
        <View>
            <Text style={{
              fontSize:16,
              color:'#fff',
              fontFamily:'Inter',
              textAlign:'center',
              marginTop:20,
            }}>Lakukan pemesanan ruangan meeting{`\n`}dengan karyawan anda,
             dan rencanakan{`\n`}semua dengan matang.</Text>
        </View>
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
            }}>Sign in</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Signin

const styles = StyleSheet.create({})