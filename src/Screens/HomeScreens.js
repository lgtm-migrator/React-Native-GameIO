import React, { useState } from "react"
import {
    View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput
    , TouchableOpacity, Platform
} from "react-native";
import { ViewPropTypes } from 'deprecated-react-native-prop-types';



import Feather from 'react-native-vector-icons/Feather'

import BannerSlider from "../components/BannerSlider";
import { freeGames, paidGames, sliderData } from "../model/data";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import Carousel from 'react-native-snap-carousel';
import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";


import LinearGradient from 'react-native-linear-gradient';






export default function HomeScreen(navigation) {
    const [gamesTab, SetGamesTab] = useState(1);

    const renderBanner = ({ item, index }) => {
        return <BannerSlider data={item} />;
    };

    const onSelectSwitch = (value) => {
        SetGamesTab(value);
    };





    return (
        <LinearGradient
            colors={['#c22ED0', '#5FFAE0']}>
            <ScrollView style={{ padding: 20 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 15,
                    }}>
                    <Text style={{ fontSize: 17 }}>
                        Hello Buğra Öner
                    </Text>
                    <TouchableOpacity onPress={() => null}>
                        <ImageBackground
                            source={require("../assets/Profil.jpg")}
                            style={{ width: 35, height: 35 }}
                            imageStyle={{ borderRadius: 25 }}
                        />
                    </TouchableOpacity>
                </View>


                <View style={{
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "#C6C6C6",
                    borderWidth: 1,
                    borderRadius: 6,
                    paddingHorizontal: 4, paddingVertical: 1,

                }}>
                    <Feather
                        name=""
                        size={20}
                        color="#C6C6C6"
                        style={{ marginRight: 5 }}
                    />
                    <TextInput placeholder="Search" />
                </View>

                <View style={{
                    flexDirection: "row",
                    marginVertical: 10,
                    justifyContent: "space-between",
                }}>
                    <Text
                        style={{ color: "black" }}>
                        Upcoming Games
                    </Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: "black" }}>See All</Text>
                    </TouchableOpacity>
                </View>

                <Carousel
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 35}
                    itemWidth={300}
                    loop={true}
                />

                <View>
                    <CustomSwitch selectionMode={1}
                        option1="Free To Play"
                        option2="Paid Games"
                        onSelectSwitch={onSelectSwitch} />
                </View>
                {gamesTab == 1 &&
                    freeGames.map((item) => (
                        <ListItem key={item.id}
                            photo={item.poster}
                            title={item.title}
                            subTitle={item.subTitle}
                            isFree={item.isFree}
                        />
                    ))
                }

                {gamesTab == 2 &&
                    paidGames.map((item) => (
                        <ListItem key={item.id}
                            photo={item.poster}
                            title={item.title}
                            subTitle={item.subTitle}
                            isFree={item.isFree}
                            price={item.price}
                        />
                    ))}


            </ScrollView>
        </LinearGradient>
    )
}

