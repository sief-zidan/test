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
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {
          name: 'Special Burger',
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80',
          count: 0,
          price: 12.0,
        },
        {
          name: 'Cheeses Burger',
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80',
          count: 3,
          price: 16.0,
        },
        {
          name: 'Black Burger',
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80',
          count: 5,
          price: 20.0,
        },
        {
          name: 'Egg Burger',
          image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80',
          count: 2,
          price: 18.0,
        },
      ],
      getCount: 0,
    };
  }

  plus(index) {
    let data = this.state.arr;
    data[index].count = data[index].count + 1;
    data[index].price += data[index].price * data[index].count;
    this.setState({arr: data});
  }
  minus(index) {
    let data = this.state.arr;
    data[index].count = data[index].count - 1;

    if (data[index.count > 0]) {
      data[index].price = data[index].price / data[index].count;
    }
    this.setState({arr: data});
  }
  getCount() {
    // let quantity = this.state.arr;
    // let quantityCount = 0;
    // for (var i = 0; i < quantity.length; i++) {
    //   quantityCount += quantity[i].price;
    // }
    let quantityCount = 10;
    return quantityCount;
  }

  getPrice() {
    // let price = this.state.arr;
    let totalPrice = 10;
    // for (var i = 0; i < price.length; i++) {
    //   totalPrice += arr[i].price * arr[i].count;
    // }
    return totalPrice;
  }

  render() {
    return (
      <>
        <View
          style={{
            backgroundColor: '#1F1F1F',
            width: '100%',
            height: '100%',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
              borderBottomWidth: 7,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4Cu_gruB6ctvLgYTi7L-M4zBLN6nCZeSvw&usqp=CAU',
                }}
                style={{
                  height: 30,
                  width: 30,
                }}></Image>
              <Text
                style={{
                  fontSize: 25,
                  color: '#fff',
                  fontWeight: 'bold',
                  marginLeft: 20,
                }}>
                Best Burger
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: '#fff',
                  marginRight: 10,
                }}>
                {this.getPrice()}
                .00 $
              </Text>
              <Image
                source={{
                  uri: 'https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-bag-icon-symbol-isolated-png-image_5045525.jpg',
                }}
                style={{
                  height: 30,
                  width: 30,
                }}></Image>
            </View>
          </View>
          {this.state.arr.map((item, index) => (
            <>
              <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate("deatils", {
                        data : item
                    })
                }}
                style={{
                  height: 150,
                  width: '97%',
                  backgroundColor: '#3b3b3b',
                  marginTop: 15,
                  borderRadius: 10,
                  flexDirection: 'row',
                  marginLeft: 8,
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    height: 150,
                    width: 140,
                    borderRadius: 15,
                  }}></Image>
                <View
                  style={{
                    height: 150,
                    // backgroundColor:'#ff6',
                    width: 200,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: '#fff',
                      fontWeight: 'bold',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#808088',
                    }}>
                    250g
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#808088',
                    }}>
                    bun, sauce, beef,chedder cheese,bacon,onion
                  </Text>
                  <View
                    style={{
                      // backgroundColor:"#f0f",
                      height: 50,
                      width: 240,
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 10,
                      justifyContent: 'space-around',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        if (item.count > 0) {
                          this.minus(index);
                        }
                      }}>
                      {/* <Icon
                        name="minus-circle"
                        style={{
                          fontSize: 24,
                          color: '#808080',
                        }}
                      /> */}
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 23,
                        color: '#fff',
                      }}>
                      {item.count}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.plus(index);
                      }}>
                      {/* <Icon
                        name="plus-circle"
                        style={{
                          fontSize: 24,
                          color: '#808080',
                        }}
                      /> */}
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 23,
                        color: '#fff',
                        marginLeft: 25,
                      }}>
                      {item.price}.00$
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          ))}
        </View>
      </>
    );
  }
}
