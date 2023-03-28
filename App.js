import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";

import db from './config';
import LogInscreen from './screens/LogIn';
import BottomTabNavigator from "./components/BottomTabNavigator";

import {createSwitchNavigator,createAppContainer} from 'react-navigation';

import { LogBox } from "react-native";
import LogInscreen from "./screens/LogIn";

LogBox.ignoreAllLogs();


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <BottomTabNavigator />;
    }
    return null;
  }
}
const AppSwitchNavigator=createSwitchNavigator(
  {
    Login:{
      screen:Loginscreen
    },
    BottomTab:{
      screens:BottomTabNavigator
    }
  },
  {initialRouteName:'Login'}
);
const AppContainer=createAppContainer(AppSwitchNavigator);

