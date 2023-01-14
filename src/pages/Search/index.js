import { 
  View, 
  SafeAreaView, 
  ScrollView, 
  ImageBackground,
  Text,
  TouchableOpacity, } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Carousel from '../../assets/components/Carousel'
import { dummyData } from '../../assets/data/Data'
import Card1 from '../../assets/components/Card1';
import Card2 from '../../assets/components/Card2'
import { Card } from 'react-native-paper';
import Registration from '../../pages/Registration'

const Stack = createNativeStackNavigator();

const Search = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{headerShown:false}} />
            <Stack.Screen name="Registration" component={Registration} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

const Main = ({navigation}) => {
  return(
    <SafeAreaView style={{
      flex:1,
      backgroundColor:'#fff',
      
  }}>
      <View style={{
        padding: 20,
      }}>
      <View style={{
      flexDirection:'row',
      justifyContent:'space-between',
      }}>

      <Text style={{
        fontWeight:'bold',
        fontSize:20,
      }}>Selamat Datang</Text>

      <ImageBackground 
      source={require('../../assets/images/notif.png')}
      style={{
        width: 35, 
        height: 35,
        marginLeft:140,
        marginTop:12,
      }}
      imageStyle={{borderRadius: 25}}
      />
      <ImageBackground 
      source={require('../../assets/images/user.png')}
      style={{
        width: 35, 
        height: 35,
        marginTop:12,
      }}
      imageStyle={{borderRadius: 25}}
      />
      </View>
      <View>
      <Text style={{
        fontWeight:'bold',
        fontSize:20,
        color:'#39B54A',
        marginTop:-22,
      }}>Hafiz Nasrullah </Text>
      </View>
      </View>

      <View style={{
      alignItems:'center',
      backgroundColor: '#DCDCDC',
      padding: 20,
    }}>
    <TouchableOpacity 
    onPress={() => navigation.navigate('Registration')}
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
    }}>FIND ROOM</Text>
  </TouchableOpacity>
    </View>

    <View style={{
      flex: 2,
      backgroundColor:'#ffff',
      marginTop: 5,
  }}>

    <ScrollView style={{
      marginBottom: 12,
    }}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Card style={{
          width: '90%',
          margin: 10,
        }}>
        <Card1/>
        </Card>
        <Card style={{
          width: '90%',
          margin: 10,
        }}>
        <Card2/>
        </Card>
        <Card style={{
          width: '90%',
          margin: 10,
        }}>
        <Card1/>
        </Card>
        <Card style={{
          width: '90%',
          margin: 10,
        }}>
        <Card1/>
        </Card>


      </View>
    </ScrollView>
    
    </View>
  </SafeAreaView>
  );
}




export default Search
