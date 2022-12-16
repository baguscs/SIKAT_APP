import React, { Component } from "react";
import { StackActions } from "@react-navigation/native";
import { NativeBaseProvider, Center, Image, Text } from "native-base";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace("Onboard"));
    }, 3000);
  }

  render() {
    return (
      <NativeBaseProvider>
        <Center>
          <Image
            resizeMode="contain"
            size={155}
            mt="250px"
            source={require("../img/Logo.png")}
            alt=""
          ></Image>
          <Text fontSize="4xl" color="#19248D">
            SIKAT
          </Text>
        </Center>
      </NativeBaseProvider>
    );
  }
}

export default Splash;
