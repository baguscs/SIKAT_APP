import React, { Component } from "react";
import {
  NativeBaseProvider,
  Center,
  Image,
  Text,
  Button,
  Stack,
  Link,
  Box,
  ScrollView,
  Input,
} from "native-base";
import { StatusBar } from "expo-status-bar";

class Login extends Component {
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
            width={400}
            height={400}
            mt="40px"
            source={require("../img/Privacy-policy-rafiki.png")}
            alt=""
          ></Image>
        </Center>
        <Text fontSize="2xl" mt={-10} ml="40px" bold>
          Login
        </Text>
        <Text fontSize="md" ml="40px">
          Silahkan Login terlebih dahulu
        </Text>
        <ScrollView>
          <Stack space={4} w="75%" mt={3} maxW="300px" mx="auto">
            <Input
              type="email"
              variant="outline"
              placeholder="Masukkan e-mail anda"
              isRequired={true}
            />
            <Input
              type="password"
              variant="outline"
              placeholder="Masukkan password anda"
              isRequired={true}
            />
          </Stack>
          <Link
            onPress={() => this.props.navigation.navigate("Forgot")}
            ml="208px"
            mt={3}
            textDecoration="none"
            _text={{ textDecoration: "none", color: "#19248D" }}
          >
            Lupa Password?
          </Link>
          <Box alignItems="center">
            <Button
              width={300}
              height={50}
              _text={{ color: "#FFFFFF", fontSize: 17 }}
              backgroundColor="#19248D"
              mt={5}
              borderRadius={20}
              onPress={() => this.props.navigation.navigate("Home")}
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
