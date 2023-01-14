import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native'
import React, {useState} from 'react'
import Modal from "react-native-modal";


const Card2 = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

  return (
    <View style={{
      width: '90%',
    }}>
      <Image style={{
        width: 373,
        height: 130,
        borderRadius: 5,
      }} source={require('../images/HomeScreen/Card1.png')} />  
        
        <View>
        <Text style={{
            marginLeft: 194,
            marginTop: -115,
            fontWeight: 'bold',
        }}>
            Ruangan Kamboja
        </Text>
        <Text style={{
            marginLeft: 194,
            marginTop: -150,
            fontSize: 12,
        }}>
            Lantai 2 - Gedung B - R506
            FX Tower Senayan Jakarta
        </Text>
        </View>

        <View>
        <TouchableOpacity 
            onPress={toggleModal} 
            style={{
              backgroundColor:'#F9637E',
              padding:4,
              width:'44%',
              borderRadius:25,
              flexDirection:'row',
              justifyContent:'center',
              fontFamily:'Inter',
              marginLeft: 194,
              marginTop: -45,
        }}>
            <Text style={{
              fontWeight:'bold',
              color:'#fff',
              fontSize:15,
            }}>Room Booked</Text>
        </TouchableOpacity>
        
        <Modal isVisible={isModalVisible}
        style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
        <View style={{
            backgroundColor: '#ffff',
            width: 300,
            height: 200,
            borderRadius: 12,
            }}>
        <View style={{
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <Image style={{
            marginTop: 12,
        }} source={require('../images/warning.png')}/>
        <Text style={{
            marginTop:10,
            fontSize: 20,
        }}>Ruangan Sudah Dipesan !</Text>
        <TouchableOpacity onPress={toggleModal} 
            style={{
              backgroundColor:'#F9637E',
              alignItems: 'center',
              padding: 5,
              width:'44%',
              borderRadius:25,
              justifyContent:'center',
              fontFamily:'Inter',
              marginTop: 15,
        }}>
            <Text style={{color: '#ffff'}}>cancel</Text>
        </TouchableOpacity>
        </View>
        </View>
      </Modal>
        </View>
    </View>
  )
}

export default Card2

const styles = StyleSheet.create({})