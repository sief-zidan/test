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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_data: {},
    };
  }

  componentDidMount() {
    let data = this.props.route.params.data;
    this.setState({item_data: data});
  }

  render() {
    return (
      <>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f56890',
            // alignItems: 'center',
            // justifyContent: 'center',
            // padding: 20
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{
              margin: 10,
              backgroundColor: '#ddd',
              width: 80,
              padding: 10,
              borderRadius: 20,
              alignItems: 'center',
            }}>
            <Text>back</Text>
          </TouchableOpacity>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80',
            }}
            style={{
              height: 150,
              width: 170,
              borderRadius: 15,
              alignSelf: 'center',
              marginTop: 70,
            }}></Image>
          <View
            style={{
              width: '100%',
              height: 10,
              backgroundColor: '#235789',
              marginTop: 30,
            }}></View>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              marginTop: 15,
              textAlign: 'left',
              marginLeft: 20,
              color: '#000',
            }}>
            Name: {this.state.item_data.name}
          </Text>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              marginTop: 15,
              textAlign: 'left',
              marginLeft: 20,
              color: '#000',
            }}>
            Price:
          </Text>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              marginTop: 15,
              textAlign: 'left',
              marginLeft: 20,
              color: '#000',
            }}>
            Ingerdients:
          </Text>
        </View>
      </>
    );
  }
}
