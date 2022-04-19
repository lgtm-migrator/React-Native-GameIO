import React from "react"
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput } from "react-native";



export default function HomeScreen() {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView style={{ padding: 20 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 20,
                    }}>
                    <Text style={{ fontSize: 16 }}>
                        Hello Buğra Öner
                    </Text>
                    <ImageBackground
                        source={require("../assets/Profil.jpg")}
                        style={{ width: 35, height: 35 }}
                        imageStyle={{ borderRadius: 25 }} />
                </View>
                <View>
                    <TextInput placeholder="search" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

