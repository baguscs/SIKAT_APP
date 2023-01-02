import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  NativeBaseProvider,
  Center,
  Image,
  VStack,
  Text,
  Box,
  Button,
} from "native-base";

class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <VStack space={1} alignItems="center">
          <Text fontSize="2xl" mt="80px" bold>
            Welcome to SIKAT
          </Text>
          <Image
            resizeMode="contain"
            size={350}
            source={require("../img/Team-work-bro.png")}
            alt=""
          ></Image>
          <Text textAlign="center" fontSize="md" pr={10} pl={10}>
            SIKAT (Sistem Informasi Kampung Digital) adalah aplikasi yang
            membantu masyarakat untuk dapat ikut serta dalam pengembangan tempat
            tinggalnya.
          </Text>
          <Box alignItems="center">
            <Button
              width={300}
              height={50}
              _text={{ color: "#FFFFFF", fontSize: 17 }}
              backgroundColor="#00A187"
              mt={5}
              borderRadius={20}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              Login
            </Button>
          </Box>
        </VStack>
      </NativeBaseProvider>
    );
  }
}

export default OnBoarding;
