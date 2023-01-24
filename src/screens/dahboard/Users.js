import React from "react";
import { Dimensions, StyleSheet, Alert, RefreshControl } from "react-native";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import {
  NativeBaseProvider,
  ScrollView,
  Center,
  Image,
  VStack,
  Text,
  Box,
  Button,
  Flex,
  Link,
  FlatList,
  Input,
  Stack,
} from "native-base";

import Ionicons from "react-native-vector-icons/Ionicons";
const maxWidth = Dimensions.get("window").width;

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      id: "",
      name: "",
      email: "",
      password: "",
      post: "",
      telp: "",
      born: "",
      gender: "",
      religion: "",
      address: "",
      nik: "",
      no_kk: "",
      status: "",
    };
    this.url = "http://192.168.43.181/api_sikat/profile.php";
  }
  componentDidMount() {
    this.getProfile();
  }

  onRefresh = () => {
    this.setState({ refresh: true }, () => {
      setTimeout(() => {
        this.componentDidMount();
        this.setState({ refresh: false });
      }, 900);
    });
  };

  async getProfile() {
    const res = await axios.get("https://geolocation-db.com/json/");
    await fetch(this.url + "/?ip=" + res.data.IPv4)
      .then((response) => response.json())
      .then((json) => {
        // this.setState({ profile: json.user });
        json.user.forEach((value) => {
          this.setState({ id: value["id"] });
          this.setState({ name: value["nama"] });
          this.setState({ email: value["email"] });
          this.setState({ password: value["password"] });
          this.setState({ post: value["jabatan"] });
          this.setState({ telp: value["no_telp"] });
          this.setState({ born: value["tgl_lahir"] });
          this.setState({ gender: value["gender"] });
          this.setState({ religion: value["agama"] });
          this.setState({ address: value["alamat"] });
          this.setState({ nik: value["nik"] });
          this.setState({ no_kk: value["no_kk"] });
          this.setState({ status: value["status"] });
        });
        console.log(this.state.nama);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  confirmLogut() {
    Alert.alert("Peringatan!!!", "Apakah anda yakin ingin Logout", [
      {
        text: "Tidak",
        onPress: null,
      },
      {
        text: "Yakin",
        onPress: () => this.logoutHandle(),
      },
    ]);
  }

  async logoutHandle() {
    const res = await axios.get("https://geolocation-db.com/json/");
    // console.log(res.data.IPv4);
    const { id } = this.state;
    var urlAction =
      "http://192.168.43.181/api_sikat/logout.php?ip=" +
      res.data.IPv4 +
      "&users_id=" +
      id;

    await fetch(urlAction)
      .then((response) => response.json())
      .then((json) => {
        Alert.alert("Sukses", "Logout Berhasil", [
          {
            text: "Oke",
            onPress: () => {
              this.props.navigation.navigate("Login");
            },
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <ScrollView
          backgroundColor="#F4F6F9"
          refreshControl={
            <RefreshControl
              refreshing={this.state.refresh}
              onRefresh={() => {
                this.onRefresh();
              }}
            ></RefreshControl>
          }
        >
          <Box w={maxWidth} h="120px" backgroundColor="#FFFFFF">
            <Flex direction="row">
              <Text fontSize="20px" fontWeight="500" ml="20px" mt="45px">
                {this.state.name}
              </Text>
              <Image
                ml="50px"
                mt="45px"
                source={require("../../img/user.jpg")}
                resizeMode="contain"
                size={60}
                borderRadius={100}
                alt=""
              ></Image>
            </Flex>
            <Text ml="20px" mt="-25px" fontSize="16px">
              {this.state.telp}
            </Text>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="20px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                Tanggal Lahir
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                {this.state.born}
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                Jenis Kelamin
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                {this.state.gender}
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                Agama
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                {this.state.religion}
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                Alamat
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                {this.state.address}
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="20px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                Status
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                {this.state.status}
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                NIK
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                {this.state.nik}
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                No KK
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                {this.state.no_kk}
              </Text>
            </Flex>
          </Box>
          <Link>
            <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="20px">
              <Flex direction="row">
                <Text fontSize="17px" ml="20px" mt="10px">
                  E-Mail
                </Text>
                <Text
                  fontSize="15px"
                  position="absolute"
                  right="35px"
                  mt="12px"
                >
                  {this.state.email}
                </Text>
                <Ionicons
                  name="ios-chevron-forward-outline"
                  size={28}
                  style={styles.iconForward}
                  color={"#00A187"}
                />
              </Flex>
            </Box>
          </Link>
          <Link>
            <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
              <Flex direction="row">
                <Text fontSize="17px" ml="20px" mt="10px">
                  Password
                </Text>
                <Text
                  fontSize="15px"
                  position="absolute"
                  right="35px"
                  mt="12px"
                >
                  Sudah Diatur
                </Text>
                <Ionicons
                  name="ios-chevron-forward-outline"
                  size={28}
                  style={styles.iconForward}
                  color={"#00A187"}
                />
              </Flex>
            </Box>
          </Link>
          <Link onPress={() => this.confirmLogut()}>
            <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="20px">
              <Text
                fontSize="18px"
                color="#DC3535"
                textAlign="center"
                mt="12px"
              >
                Keluar
              </Text>
            </Box>
          </Link>
          <Center>
            <Text fontSize="md" mt="20px" mb="20px">
              SIKAT Version 1.0.0
            </Text>
          </Center>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  iconForward: {
    position: "absolute",
    right: 7,
    marginTop: 10,
  },
});

export default Users;
