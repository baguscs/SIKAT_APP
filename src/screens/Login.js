import React, { Component } from "react";
import { Alert } from "react-native";
import {
  NativeBaseProvider,
  VStack,
  Image,
  ScrollView,
  Text,
  Input,
  Stack,
  Link,
  Button,
  Box,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.url = "http://192.168.43.181/api_sikat/login.php";
  }

  async loginHandle(email, password) {
    const res = await axios.get("https://geolocation-db.com/json/");
    var urlAction =
      this.url +
      "/?email=" +
      email +
      "&password=" +
      password +
      "&ip=" +
      res.data.IPv4;

    await fetch(urlAction)
      .then((response) => response.json())
      .then((json) => {
        if (json.data.sessions) {
          this.setState({ email: "" });
          this.setState({ password: "" });

          Alert.alert("Sukses", "Login Berhasil", [
            {
              text: "Oke",
              onPress: () => {
                this.props.navigation.navigate("Home");
              },
            },
          ]);
        } else {
          Alert.alert(
            "Gagal",
            "Akun tidak ditemukan, Mohon cek kembali email dan password anda"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <NativeBaseProvider>
        <ScrollView>
          <VStack alignItems="center" space={1}>
            <Image
              width={400}
              height={400}
              resizeMode="contain"
              alt=""
              source={require("../img/Privacy-policy-rafiki.png")}
            ></Image>
          </VStack>
          <Text fontSize="2xl" mt={-10} ml="40px" bold>
            Login
          </Text>
          <Text fontSize="md" ml="40px">
            Silahkan Login terlebih dahulu
          </Text>
          <Stack space={4} w="75%" mt={3} maxW="300px" mx="auto">
            <Input
              type="email"
              variant="outline"
              placeholder="Masukkan e-mail anda"
              isRequired={true}
              value={this.state.email}
              onChangeText={(inpEmail) => this.setState({ email: inpEmail })}
            />
            <Input
              type="password"
              variant="outline"
              placeholder="Masukkan password anda"
              isRequired={true}
              value={this.state.password}
              onChangeText={(inpPassword) =>
                this.setState({ password: inpPassword })
              }
            />
          </Stack>
          <Box alignItems="center">
            <Button
              width={300}
              height={50}
              _text={{ color: "#FFFFFF", fontSize: 17 }}
              backgroundColor="#00A187"
              mt={8}
              borderRadius={20}
              onPress={() =>
                this.loginHandle(this.state.email, this.state.password)
              }
            >
              Login
            </Button>
          </Box>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}

export default Login;
