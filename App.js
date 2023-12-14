import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Welcome from './screens/Welcome';
import Ex01 from './screens/Week2/Ex01';
import Ex02 from './screens/Week2/Ex02';
import Ex03 from './screens/Week2/Ex03';
import Ex04 from './screens/Week2/Ex04';
import Ex05 from './screens/Week2/Ex05';
import Ex06 from './screens/Week2/Ex06';
import Ex07 from './screens/Week2/Ex07';
import Ex08 from './screens/Week2/Ex08';
import Ex09 from './screens/Week2/Ex09';
// import Greeting from './components/Greeting';
import Travel from './screens/Week3/Travel';
import Health from './screens/week5/Health';
import Resort from './screens/week4/Resort';


export default function App() {
  return (
    //<Welcome />
    //<Ex01 />
    //<Ex02 />
    //<Ex03 />
    // <Ex04 />
    //<Ex05 />
    // <Ex06 />
    // <Ex07 />
    //<Ex08 />
    //<Ex09 />
    // <View style={{alignItems: 'center', top: 50}}>
    //     <Greeting name='Rexxar' />
    //     <Greeting name='Jaina' />
    //     <Greeting name='Valeera' />
    //   </View>
    // <Travel />
    // <Health />
    <Resort />
  );
}
