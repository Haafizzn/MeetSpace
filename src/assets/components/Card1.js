import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, {useState} from 'react'
import Modal from "react-native-modal"

const Card1 = () => {

  const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

  return (
    <View>
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
              backgroundColor:'#39B54A',
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
            }}>Room Ready</Text>
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
            height: 150,
            borderRadius: 12,
            }}>
        <View style={{
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <Text style={{
            marginTop:10,
            fontSize: 19,
        }}>Anda Ingin Booking Ruangan?</Text>
        <View style={{
      flexDirection:'row',
      justifyContent:'space-between',
      margin: 20,
      }}>
    <TouchableOpacity onPress={toggleModal} style={{marginRight:12,}}>
    <Image source={require('../images/yes.png')} />
    </TouchableOpacity>
    <TouchableOpacity onPress={toggleModal}>
    <Image source={require('../images/no.png')} />
    </TouchableOpacity>
        </View>
        </View>
        </View>
      </Modal>

        </View>
    </View>
  )
}

export default Card1

const styles = StyleSheet.create({})