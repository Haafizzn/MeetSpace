import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, Button, View, SafeAreaView, ImageBackground, TextInput } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import Logo from '../../assets/images/Logo.svg';
import Orang from '../../assets/images/orang.svg';



const Stack = createNativeStackNavigator();

const Login = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{headerShown:false}} />
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

const Main = ({navigation}) => {
  const [username, setUsername] = useState('(belum diisi)')
  const [password, setPassword] = useState('(belum diisi)')
  const [jmlGagal, setJmlGagal] = useState(0)
  const [tombolDisable, setTombolDisable] = useState(false)
  const prosesLogin = () => {
    const dataUsername = "666666"
    const dataPassword = "666666"
    if (username == dataUsername && password == dataPassword) {
      navigation.navigate('Home')
    } 
    else {
      setJmlGagal(jmlGagal+1)
      if (jmlGagal >= 8) {
        setTombolDisable(true)
      }
      alert("Jml Gagal: " + jmlGagal)
    }
  }
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
        <View>
        <Logo width={150} height={70}/>
        </View>
        <View style={{
          margin:60,
        }}>
        <Orang width={344} height={263}/>
        </View>
        
        <View style={{
          alignItems: "center",
          }}>

        <TextInput 
        style={{
          borderColor: '#9a73ef',
          backgroundColor: '#ffff',
          borderWidth: 1,
          width: 350,
          borderRadius: 50,
          height: 40,
          textAlign: 'center',
        }}
        placeholder="Username" 
        onChangeText={teks => setUsername(teks)}       
      />   
       <TextInput 
        secureTextEntry={true}
        placeholder="Password"
        style={{
          borderColor: '#9a73ef',
          backgroundColor: '#ffff',
          borderWidth: 1,
          borderRadius: 50,
          height: 40,
          width: 350,
          textAlign: 'center',
          marginTop:8
        }}      
        onChangeText={teks => setPassword(teks)}
      />  

      <Text style={{
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 12,
        marginTop: 2,
        padding:12,
        }}>
          Tidak bisa masuk/Ada kendala? hubungi administrator
      </Text>
       <TouchableOpacity 
            onPress={prosesLogin}    
            disabled={tombolDisable}
            style={{
              backgroundColor:'#39B54A',
              padding:10,
              width:350,
              borderRadius:25,
              flexDirection:'row',
              justifyContent:'center',
              fontFamily:'Inter',
              marginTop:25,
        }}>
            <Text style={{
              fontWeight:'bold',
              color:'#fff',
              fontSize:18,
            }}>Login</Text>
        </TouchableOpacity>    
      </View>
      </SafeAreaView>
  );
}

export default Login

const styles = StyleSheet.create({})