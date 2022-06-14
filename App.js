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
  StyleSheet
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
import HomeScreen from './src/Screens/HomeScreens';

import LinearGradient from 'react-native-linear-gradient';


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
    <LinearGradient
      colors={['#00C6FB', '#005BEA']}
      style={styles.body}>
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
        style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <LinearGradient colors={['#C974FF', '#AEBAF8']}
          style={{
            borderRadius: 10, padding: 25, width: 300,
            marginBottom: 50,
          }}>

          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
            Let's Begin
          </Text>
        </LinearGradient>
      </TouchableOpacity >

    </LinearGradient >

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



const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;
