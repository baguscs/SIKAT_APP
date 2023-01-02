import React, { Component } from "react";
import { NativeBaseProvider, Center, Image, Text, Button } from "native-base";
import { StatusBar } from "expo-status-bar";

class Onboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <Center>
          <Image
            resizeMode="contain"
            size={400}
            mt="40px"
            source={require("../img/Team-work-bro.png")}
            alt=""
          ></Image>
        </Center>
        <Text fontSize="2xl" fontWeight="bold" mt="-20px" ml="30px">
          Hai,
        </Text>
        <Text fontSize="2xl" fontWeight="bold" ml="30px">
          Selamat datang di SIKAT
        </Text>
        <Text fontSize="17px" mt="10px" ml="30px" pr="30px">
          SIKAT (Sistem Informasi Kampung Digital) adalah aplikasi untuk
          membantu masyarakat dalam pengembangan tempat tinggalnya
        </Text>
        <Center>
          <Button
            mt="30px"
            width={300}
            backgroundColor="#19248D"
            _text={{ color: "#FFFFFF", fontSize: "17px" }}
            borderRadius="30"
            onPress={() => this.props.navigation.navigate("Login")}
          >
            Lanjut
          </Button>
        </Center>
      </NativeBaseProvider>
    );
  }
}

export default Onboard;
