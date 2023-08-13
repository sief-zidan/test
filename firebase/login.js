import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  FlatList,
  Modal,AppRegistry
} from 'react-native';
import React, {useState} from 'react';
import  auth from '../frirebase';
import App from '../App';

export default function Login() {


    const [email, setemail] = React.useState('');
    const [password, setpassword] = React.useState('');

    const handleSignUp = () => {
        // auth
        // .createUserWithEmailAndPassword(email, password)
        // .then(userCredentials => {
        //   const user = userCredentials.user;
        //   console.log('Registered with:', user.email);
        // })
        // .catch(error => alert(error.message))
    }

  return (
    <>
      <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            value={email}
            onChangeText={value => {
              setemail(value);
            }}
            style={{
              height: 60,
              width: '80%',
              backgroundColor: '#ddd',
              marginTop: 5,
            }}
            placeholder="enter student email"
          />
          <TextInput
            value={password}
            onChangeText={value => {
              setpassword(value);
            }}
            style={{
              height: 60,
              width: '80%',
              marginTop: 5,
              backgroundColor: '#ddd',
            }}
            placeholder="enter student pass"
          />
          

          <TouchableOpacity
          onPress={()=>{
            handleSignUp()
          }}
            style={{
              width: '60%',
              backgroundColor: '#0fd',
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 15,
              borderRadius: 15,
            }}>
            <Text
              style={{
                fontSize: 22,
              }}>
              register
            </Text>
          </TouchableOpacity>
        </View>
    </>
  )
}
AppRegistry.registerComponent('login', () => App);