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
  Modal,
} from 'react-native';
import React, {useState} from 'react';

export default function Calc() {
  const [student_number, setstudent_number] = React.useState('');
  const [student_name, setstudent_name] = React.useState('');
  const [student_gpa, setstudent_gpa] = React.useState('');

  const [show_modal, setshow_modal] = React.useState(false);




  const [data, setdata] = React.useState([
    {
      name: 'saif',
      number: 10,
      gpa: 3,
    },

    {
      name: 'Mo',
      number: 2,
      gpa: 2,
    },
    {
      name: 'Ali',
      number: 9,
      gpa: 4,
    },
    {
      name: 'mostafa',
      number: 4,
      gpa: 6,
    },
    {
      name: 'nour',
      number: 2,
      gpa: 1,
    },
    {
        name: 'nour',
        number: 2,
        gpa: 1,
      },
  ]);


function add_student(){
    // get 
let students = [...data]

    // op 

    let opject = {
        name :  student_name  , 
        number : student_number , 
        gpa : student_gpa
    }

students.push(opject)

    // set

    setdata(students)
    setshow_modal(false)
}



  return (
    <>
      <View
        style={{
          height: 60,
          width: '100%',
          backgroundColor: '#0f0',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 22,
          }}>
          Student info
        </Text>
      </View>

      <TouchableOpacity

      onPress={()=>{
        setshow_modal(true)
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
          Add Student item
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 15,
        }}>
        <Text
          style={{
            fontSize: 18,
          }}>
          Student number
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}>
          Student name
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}>
          Student GPA
        </Text>
      </View>

      {/* {data.map((item,index) => (
          <>
            <Text
              style={{
                fontSize: 18,
                width: '33%',
                textAlign:"center"
              }}>
              {item.number}
            </Text>
            <Text
              style={{
                fontSize: 18,
                width: '33%',
                textAlign:"center"
            }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 18,
                width: '33%',
                textAlign:"center"
            }}>
              {item.gpa}
            </Text>
          </>
        ))} */}

      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 15,
              flexWrap: 'wrap',
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 18,
                width: '33%',
                textAlign: 'center',
              }}>
              {item.number}
            </Text>
            <Text
              style={{
                fontSize: 18,
                width: '33%',
                textAlign: 'center',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 18,
                width: '33%',
                textAlign: 'center',
              }}>
              {item.gpa}
            </Text>
          </View>
        )}
      />

      <Modal visible={show_modal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            value={student_number}
            onChangeText={value => {
              setstudent_number(value);
            }}
            style={{
              height: 60,
              width: '80%',
              backgroundColor: '#ddd',
              marginTop: 5,
            }}
            placeholder="enter student number"
          />
          <TextInput
            value={student_name}
            onChangeText={value => {
              setstudent_name(value);
            }}
            style={{
              height: 60,
              width: '80%',
              marginTop: 5,
              backgroundColor: '#ddd',
            }}
            placeholder="enter student name"
          />
          <TextInput
            value={setstudent_gpa}
            onChangeText={value => {
              setstudent_gpa(value);
            }}
            style={{
              height: 60,
              marginTop: 5,
              width: '80%',
              backgroundColor: '#ddd',
            }}
            placeholder="enter student gpa"
          />

          <TouchableOpacity
          onPress={()=>{
            add_student()
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
              Add Student item
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}
