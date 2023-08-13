import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput
} from "react-native";
import React, { useState } from "react";


export default function Task() {
    const [array, setArray] = useState([
        {
            name: "Papa John's",
            id: 600,
            address: "Doha University",
            category: "Food",
            favourite: true,
            search: false
        },
        {
            name: "Pullman Fit",
            id: 601,
            address: "Pullman Doha",
            category: "Beauty",
            favourite: false,
            search: false
        },
        {
            name: "Jump",
            id: 602,
            address: "Al Mirqab Mall",
            category: "Fun",
            favourite: false,
            search: false
        },
        {
            name: "365 Adventures",
            id: 603,
            address: "Al Wakrah",
            category: "Fun",
            favourite: true,
            search: false
        },
        {
            name: "Horror House",
            id: 604,
            address: "Bin Mahmoud Area",
            category: "Fun",
            favourite: true,
            search: false
        },
        {
            name: "The Village",
            id: 605,
            address: "Pearl",
            category: "Food",
            favourite: false,
            search: false
        },
        {
            name: "Al Masa",
            id: 606,
            address: "Cielo Hotel",
            category: "Food",
            favourite: false,
            search: false
        },
        {
            name: "Al Thouria",
            id: 607,
            address: "Ezdan Hotel",
            category: "Food",
            favourite: false,
            search: false
        },
        {
            name: "Dot Beauty",
            id: 608,
            address: "Al Dafna",
            category: "Beauty",
            favourite: false,
            search: false
        },
        {
            name: "Express Beauty",
            id: 609,
            address: "Ezdan Mall",
            category: "Beauty",
            favourite: false,
            search: false
        },
        {
            name: "Beauty Zone",
            id: 610,
            address: "Marina Twin Tower",
            category: "Beauty",
            favourite: false,
            search: false
        },
        {
            name: "Bravo Kids",
            id: 611,
            address: "Al Duhail",
            category: "Fun",
            favourite: false,
            search: false
        },
        {
            name: "Fun City",
            id: 612,
            address: "City Center",
            category: "Fun",
            favourite: false,
            search: false
        },
    ]);

    const [choosed, setChoosed] = useState("Main");




    const [input, setinput] = useState("");





    function makesearch(value) {

        let all_data = [...array]



        for (let i = 0; i < all_data.length; i++) {

            if (
                ((all_data[i].name).toUpperCase()).includes(value.toUpperCase())
            ) {

                all_data[i].search = true
            } else {
                all_data[i].search = false
            }


        }

        setArray(all_data)


    }



    return (
        <>
            {/* <Image
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    alignSelf: "center",
                }}
                source={require("../assets/u1.png")}
            /> */}

            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
                <TouchableOpacity
                    onPress={() => {
                        setChoosed("Main");
                    }}
                >
                    <Text style={{ color: choosed == "Main" ? "blue" : "gray" }}>
                        Main
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setChoosed("favourite");
                    }}
                >
                    <Text style={{ color: choosed == "favourite" ? "blue" : "gray" }}>
                        favourite
                    </Text>
                </TouchableOpacity>
            </View>




            {/* <ScrollView>
                {array.map((item, index) => (
                    <>

                     

                    </>
                ))}
            </ScrollView> */}
            <ScrollView>
              <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap'
                    }}
                >  



















                 {array.map((item, index) => (
                        <View
                            style={{
                                height: 160,
                                width: '40%',
                                backgroundColor: '#ddd',
                                marginTop: 10,
                                borderRadius: 20
                            }}
                        >













                        










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




        </>
    );
}