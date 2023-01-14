import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Receipt from '../Receipt';

const Stack = createNativeStackNavigator();

const Check = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{headerShown:false}} />
            <Stack.Screen name="Receipt" component={Receipt} options={{headerShown:false}} />
        </Stack.Navigator>
  );
}

const Main = ({navigation}) => {
  return (
    <SafeAreaView style={{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffff',
    }}>
      <View style={{
        alignItems: 'center',
      }}>
      <View>
        <Image source={require('../../assets/images/ceklis.png')}/>
      </View>
      <Text style={{
        textAlign: 'center',
        margin: 50,
        fontSize: 20,
      }}>
        Proses bookin ruangan sedang{`\n`}
        dalam antrian. Mohon Menunggu
      </Text>
      </View>
      <TouchableOpacity 
            onPress={() => navigation.navigate('Receipt')}
            style={{
              backgroundColor:'#39B54A',
              padding:10,
              width:'90%',
              borderRadius:25,
              alignItems: 'center',
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

export default Check

const styles = StyleSheet.create({})