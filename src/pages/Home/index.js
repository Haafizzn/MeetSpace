import { Text, 
  View, 
  SafeAreaView, 
  ScrollView, 
  ImageBackground,
  TextInput,
  TouchableOpacity,} from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../Search';

import Carousel from '../../assets/components/Carousel'
import { dummyData } from '../../assets/data/Data'
import Card1 from '../../assets/components/Card1';
import { Card } from 'react-native-paper';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{headerShown:false}} />
            <Stack.Screen name="Search" component={Search} options={{headerShown:false}} />
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
      }}>Hafiz Nasrullah</Text>
      </View>
      
      <View
        style={{
          marginVertical: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop:20,
        }}>
        <Carousel data = {dummyData}/>
    </View>
  
    <View style={{
      marginBottom: 15,
      justifyContent: 'center',
      marginBottom: 240,
    }}>

    </View>
    </View>
    
    <View style={{
      backgroundColor:'#DCDCDC',
      marginTop: -200,
      flex: 1,
  }}>
    <Text style={{
      flexDirection:'row',
      justifyContent:'space-between',
      padding:20,
      fontWeight:'bold',
      fontSize:15,
    }}>
      Your Recent Booking
    </Text>
    <ScrollView>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        
      </View>
    </ScrollView>
    <View style={{
      alignItems:'center',
    }}>
    <TouchableOpacity 
    onPress={() => navigation.navigate('Search')}
    style={{
      backgroundColor:'#39B54A',
      padding:10,
      width:'90%',
      borderRadius:25,
      flexDirection:'row',
      justifyContent:'center',
      fontFamily:'Inter',
      marginTop:20,
      marginBottom: 20,
  }}>
    <Text style={{
      fontWeight:'bold',
      color:'#fff',
      fontSize:18,
    }}>FIND ROOM</Text>
  </TouchableOpacity>
    </View>
    </View>
  </SafeAreaView>
  );
}


export default Home
