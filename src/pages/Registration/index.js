import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Orang from '../../assets/images/orang.svg';
import Check from '../Check/index'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card } from 'react-native-paper';
const Stack = createNativeStackNavigator();

const Registration = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{headerShown:false}} />
            <Stack.Screen name="Check" component={Check} options={{headerShown:false}} />
        </Stack.Navigator>
  );
}

const Main = ({navigation}) => {
  return (
    <SafeAreaView style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#ffff',
    }}>
        <View style={{
          margin:60,
        }}>
        <Orang width={344} height={263}/>
        </View>
        <Card style={{
            margin:10,
          }}>
          <TextInput
          style={{
            backgroundColor: '#ffff',
            width: 350,
            borderRadius: 10,
            height: 40,
            padding: 10,
          }}
          placeholder= "Nama Lengkap"
          />
          </Card>
          <Card style={{
            margin:10,
          }}>
          <TextInput
          style={{
            backgroundColor: '#ffff',
            width: 350,
            borderRadius: 10,
            height: 40,
            padding: 10,
          }}
          placeholder= "Jumlah Peserta Meeting"
          />
          </Card>
          <Card style={{
            margin:10,
          }}>
          <TextInput
          style={{
            backgroundColor: '#ffff',
            width: 350,
            borderRadius: 10,
            height: 40,
            padding: 10,
          }}
          placeholder= "No Telpon"
          />
          </Card>
          <View style={{
            margin: 30,
          }}>
          <Text style={{
            textAlign: 'center',
          }}>
            Mohon isi data dengan, benar lalu silahkan
            tunggu{`\n`}proses persetujuan oleh administrator. Jika berhasil{`\n`}
            anda akan mendapatkan notifikasi diaplikasi MeetSpace
          </Text>
      </View>
      <TouchableOpacity 
            onPress={() => navigation.navigate('Check')}
            style={{
              backgroundColor:'#39B54A',
              padding:10,
              width:'90%',
              borderRadius:25,
              flexDirection:'row',
              justifyContent:'center',
              fontFamily:'Inter',
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

export default Registration

const styles = StyleSheet.create({})