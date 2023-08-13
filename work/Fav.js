import * as React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackgroundBase,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';

import {Icon} from 'react-native-vector-icons/FontAwesome5';

 
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textSize: 30,
      //inputVal: '',
      //count : 0 ,
      //arr:[1,2,3,4,5,6],
      color: '',
      show: false,
      // fav : false,
      backgroundColor: '',
      value1: '',
      value2: ' ',
      value3: ' ',
      newarr: [],

      info: [
        {
          name: 'Rana',
          phone: '01110682003',
          address: 'Tanta',
        },
        {
          name: 'shahd',
          phone: '01110679633',
          address: 'Alex',
        },
        {
          name: 'Salma',
          phone: '01751067933',
          address: 'cairo',
        },
        {
          name: 'Sara',
          phone: '017123669',
          address: 'egypt',
        },
      ],
      edited: false,
      current_index: -1,
      store_data: 'hello',
    };
  }

  addfun() {
    let items = this.state.info;

    items.push({
      name: this.state.value1,
      phone: this.state.value2,
      address: this.state.value3,
    });

    this.setdata(items)
    //name :'' , phone :'', address:''
  }

  splicefun(index) {
    let items = this.state.info;
    items.splice(index, 1);
    this.setState({info: items});
  }

  editfun() {
    let arr = this.state.info;
    let index = this.state.current_index;

    arr[index].name = this.state.value1;
    arr[index].phone = this.state.value2;
    arr[index].address = this.state.value3;

    this.setState({info: arr, show: false});
  }





  
  render() {
    return (
      <>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#717',
            padding: 5,
            //flexWrap:'wrap'
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              height: 70,
              // backgroundColor:'#963'
            }}>
            <Text
              style={{
                fontSize: 25,
                color: '#fff',
              }}>
              Name
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: '#fff',
              }}>
              Phone
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: '#fff',
              }}>
              Address
            </Text>
          </View>
          <View
            style={{backgroundColor: '#fff', width: '100%', height: 10}}></View>
          {this.state.info.map((items, index) => (
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                // justifyContent:'center',
                marginTop: 30,
              }}>
              <View
                style={{width: '20%', height: '100%'}}
                //  onPress={()=>{
                //   this.splicefun(index)
                //     }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 25,
                  }}>
                  {items.name}
                </Text>
              </View>
              <View style={{width: '40%', height: '100%'}}>
                <Text
                  numberOfLines={1}
                  style={{
                    color: '#fff',
                    fontSize: 25,
                  }}>
                  {items.phone}
                </Text>
              </View>
              <View
                style={{
                  width: '20%',
                  height: '100%',
                  alignSelf: 'flex-end',
                  marginLeft: 20,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 25,
                  }}>
                  {items.address}
                </Text>
              </View>
              {/* <Icon name='trash' style={{
  fontSize:15,
  col:'#fff',
  marginLeft:5,
  marginTop:5
}}></Icon> */}
              <View
                style={{
                  width: '20%',
                  height: '100%',
                  flexDirection: 'row',
                  // backgroundColor:'#896',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.splicefun();
                  }}>
                  <Image
                    source={{
                      uri: 'https://icons.veryicon.com/png/o/miscellaneous/linear-icon-18/delete-357.png',
                    }}
                    style={{width: 30, height: 30}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    // this.editfun(index);
                    this.setState({
                      value1: items.name,
                      value2: items.phone,
                      value3: items.address,
                      edited: true,
                      show: true,
                      current_index: index,
                    });
                  }}>
                  <Image
                    source={{
                      uri: 'https://cdn4.iconfinder.com/data/icons/dashboard-icons/46/icon-edit-512.png',
                    }}
                    style={{width: 30, height: 30, marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          <TouchableOpacity
            onPress={() => {
              this.setState({show: true, edited: false});
            }}
            style={{
              // width: 250,
              // height: 100,
              alignSelf: 'center',
              backgroundColor: '#fff',
              marginTop: 50,
              alignItems: 'center',
              padding: 15,
              borderRadius: 20,
            }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                alignSelf: 'center',
                color: '#000',
              }}>
              Add item
            </Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          visible={this.state.show}
          onRequestClose={() => {
            this.setState({show: false});
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#717',
              //flexWrap:'wrap'
            }}>
            <Text
              style={{
                color: '#fff',
                marginTop: 100,
                fontSize: 25,
              }}>
              {' '}
              the Name :
            </Text>
            <TextInput
              style={{
                width: '60%',
                height: 50,
                backgroundColor: '#fff',
                alignSelf: 'center',
                marginTop: 20,
              }}
              value={this.state.value1}
              onChangeText={value => {
                this.setState({value1: value});
              }}></TextInput>
            <Text
              style={{
                color: '#fff',
                marginTop: 20,
                fontSize: 25,
              }}>
              {' '}
              the phone:
            </Text>
            <TextInput
              style={{
                width: '60%',
                height: 50,
                backgroundColor: '#fff',
                alignSelf: 'center',
                marginTop: 20,
              }}
              value={this.state.value2}
              onChangeText={value => {
                this.setState({value2: value});
              }}></TextInput>
            <Text
              style={{
                color: '#fff',
                marginTop: 20,
                fontSize: 25,
              }}>
              {' '}
              the Address :
            </Text>
            <TextInput
              style={{
                width: '60%',
                height: 50,
                backgroundColor: '#fff',
                alignSelf: 'center',
                marginTop: 20,
              }}
              value={this.state.value3}
              onChangeText={value => {
                this.setState({value3: value});
              }}></TextInput>
            <TouchableOpacity
              onPress={() => {
                this.setState({show: false});
                if (this.state.edited) {
                  this.editfun();
                } else {
                  this.addfun();
                }
              }}
              style={{
                width: 250,
                height: 100,
                alignSelf: 'center',
                backgroundColor: '#fff',
                marginTop: 50,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  marginTop: 20,
                  color: '#000',
                }}>
                {this.state.edited ? 'edit item' : 'Save item'}
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </>
    );
  }
}
