import React, { Component } from "react";
import { StackActions } from "@react-navigation/native";
import { NativeBaseProvider, Center, Image } from "native-base";
import { StatusBar } from "expo-status-bar";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace("OnBoarding"));
    }, 4000);
  }
  render() {
    return (
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <Center>
          <Image
            resizeMode="contain"
            size={170}
            mt="70%"
            source={require("../img/Logo.png")}
            alt=""
          ></Image>
        </Center>
      </NativeBaseProvider>
    );
  }
}

export default Splash;
