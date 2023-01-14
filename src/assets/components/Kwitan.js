import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Kwitan = () => {
  return (
    <SafeAreaView style={{
    }}>
        <Text style={{
            textAlign: 'center',
            fontSize: 27,
            color: '#5B8AE3',
            marginTop:15,
            fontWeight: 'bold',
        }}>YOUR RECEIPT</Text>
        <Text style={{
            fontSize: 20,
            textAlign:'center',
        }}>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </Text>
        <Text style={{
            textAlign: 'center',
            fontSize: 15,
            marginTop:15,
        }}>NAMA</Text>
        <Text style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
        }}>KARYAWAN#001</Text>
        
        <View>

        </View>


    </SafeAreaView>
  )
}

export default Kwitan

const styles = StyleSheet.create({})