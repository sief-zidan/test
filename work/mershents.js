




import * as React from 'react';
//  *  import all compnent from react 
import { Text, View, Image, TouchableOpacity, Alert, ScrollView, Modal } from 'react-native';


export default class Main extends React.Component {


    constructor() {
        super();
        this.state = {
            // any data type

            array_data: [

                {
                    name: 'Papa John\'s',
                    id: 600,
                    favourite: true

                },
                {
                    name: 'Pullman Fit',
                    id: 601,
                    favourite: false

                },
                {
                    name: 'Jump',
                    id: 602,
                    favourite: false

                },
                {
                    name: '365 Adventures',
                    id: 603,
                    favourite: false

                },
                {
                    name: 'Horror House',
                    id: 604,
                    favourite: false

                },
                {
                    name: 'The Village',
                    id: 605,
                    favourite: false

                },
                {
                    name: 'Al Masa',
                    id: 606,
                    favourite: false

                },
                {
                    name: 'Al Thouria',
                    id: 607,
                    favourite: false

                },
                {
                    name: 'Dot Beauty',
                    id: 608,
                    favourite: false

                },
                {
                    name: 'Express Beauty',
                    id: 609,
                    favourite: false

                },
                {
                    name: 'Beauty Zone',
                    id: 610,
                    favourite: false

                },
                {
                    name: 'Bravo Kids',
                    id: 611,
                    favourite: false

                },
                {
                    name: 'Fun City',
                    id: 612,
                    favourite: false

                }

            ],

            value: 'Main',   // -> Main - fav
            show_modal: false
        }
    }



    change_to_fav(index) {
        //  get
        let all_data = this.state.array_data
        // op
        all_data[index].favourite = true
        // set
        this.setState({ array_data: all_data })
    }



    render() {
        return (
            <>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: 15
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({ value: 'Main' })



                        }}
                        style={{
                            backgroundColor: '#ddd'
                        }}
                    >
                        {/* ? -> if :->else  */}
                        <Text
                            style={{
                                fontSize: 22,
                                color: this.state.value == 'Main' ? '#00f' : '#000'
                                , padding: 5
                            }}
                        >
                            Main
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            // this.setState({ value: 'Fav' , show_modal : true })
                            this.props.navigation.navigate('Calc')
                        }}
                        style={{
                            backgroundColor: '#ddd'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 22,
                                color: this.state.value == 'Fav' ? '#00f' : '#000', padding: 5
                            }}
                        >
                            Fav
                        </Text>
                    </TouchableOpacity>

                </View>






                <ScrollView>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap'
                        }}
                    >



















                        {this.state.array_data.map((item, index) => (
                            <View
                                style={{
                                    height: 160,
                                    width: '40%',
                                    backgroundColor: '#ddd',
                                    marginTop: 10,
                                    borderRadius: 20
                                }}
                            >





                                <TouchableOpacity
                                    onPress={() => {
                                        this.change_to_fav(index)
                                    }}
                                >

                                    {item.favourite ? (
                                        <Image
                                            source={require('./fullheart.png')}
                                            style={{
                                                height: 20,
                                                width: 30,
                                                margin: 8,
                                                alignSelf: 'flex-end'
                                            }}
                                        />
                                    ) : (
                                        <Image
                                            source={require('./removedh.png')}
                                            style={{
                                                height: 20,
                                                width: 30,
                                                margin: 8,
                                                alignSelf: 'flex-end'
                                            }}
                                        />

                                    )}





                                </TouchableOpacity>







                                {/* {item.favourite ? (
                               
                            ) : (
                                <Image
                                    source={require('./removedh.png')}
                                    style={{
                                        height: 20,
                                        width: 30,
                                        margin: 8,
                                        alignSelf: 'flex-end'
                                    }}
                                />
                            )} */}










                                <Image
                                    source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/2077688101/display_1500/stock-photo-a-bottle-of-perfume-men-s-eau-de-parfum-in-beautiful-gold-glass-bottle-isolated-on-white-2077688101.jpg' }}
                                    style={{
                                        height: 60,
                                        width: 30,
                                        margin: 8,
                                        alignSelf: 'center'
                                    }}
                                />


                                <View
                                    style={{
                                        marginLeft: 10
                                    }}
                                >

                                    <Text>
                                        perfume
                                    </Text>


                                    <Text>
                                        price : 30$
                                    </Text>

                                </View>






                            </View>
                        ))}














                    </View>


                </ScrollView>















                <Modal
                    visible={this.state.show_modal}
                    onRequestClose={()=>{
                        this.setState({show_modal : false})
                    }}
                >


                </Modal>






            </>
        )
    }
}