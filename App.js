/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Image from "./src/assets/gaming.svg"
import HomeScreen from './src/Screens/HomeScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Main = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }}>
      <View style={{ marginTop: 25 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#20315f' }}>
          GAMEIO
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
        <Image width={275} height={275} style={{ transform: [{ rotate: "-15deg" }] }} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor: '#20315f', borderRadius: 10, padding: 20, width: '90%', flexDirection: 'row',
          justifyContent: 'space-between', marginBottom: 50,
        }}>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
          Let's Begin
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

}

/*
const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}

*/




export default App;
