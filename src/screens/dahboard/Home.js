import React, { Component } from "react";
import { StyleSheet, BackHandler, Alert, RefreshControl } from "react-native";
import { StatusBar } from "expo-status-bar";
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
  Input,
  Stack,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      dana: "",
    };

    this.url = "http://192.168.43.181/api_sikat/dashboard.php";
  }

  backAction = () => {
    Alert.alert(
      "Perhatian!!!",
      "Apakah anda yakin ingin menutup aplikasi",
      [
        {
          text: "Tidak",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Yakin",
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      }
    );
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
    this.getTotalData();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }

  async getTotalData() {
    await fetch(this.url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ dana: json.data.dana });
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
                console.log("refreshing");
                this.setState({ refresh: false });
              }}
            ></RefreshControl>
          }
        >
          <Flex direction="row" ml="20px" mt="35px">
            <Link onPress={() => this.props.navigation.navigate("Users")}>
              <Image
                source={require("../../img/user.jpg")}
                resizeMode="contain"
                size={60}
                borderRadius={100}
                alt=""
              ></Image>
            </Link>
            <Text fontSize="md" fontWeight="700" ml="10px" mt="15px">
              Bagus Cahyo Sulistiyo
            </Text>
            <Link mt="10px" ml="50px">
              <Ionicons name="ios-notifications" size={33} color={"#00A187"} />
            </Link>
          </Flex>
          <Center mt="20px">
            <Link onPress={() => this.props.navigation.navigate("Dana_Home")}>
              <Box
                w="320"
                h="120"
                p="2"
                borderRadius={20}
                bg="#00A187"
                shadow={2}
              >
                <Flex direction="row">
                  <Ionicons
                    style={styles.iconDana}
                    name="ios-wallet"
                    size={65}
                    color={"#FFFFFF"}
                  />
                  <Text fontSize="md" color="#FFFFFF" mt="4" ml="3">
                    Dana saat ini:
                  </Text>
                </Flex>
                <Text ml="100px" mt="-40px" fontSize="2xl" color="#FFFFFF">
                  Rp. {this.state.dana}
                </Text>
              </Box>
            </Link>
            <Box
              w="320"
              h="120"
              mt="3"
              p="2"
              borderRadius={20}
              bg="#E96053"
              shadow={2}
            >
              <Flex direction="row">
                <Ionicons
                  style={styles.iconDana}
                  name="ios-people"
                  size={65}
                  color={"#FFFFFF"}
                />
                <Text fontSize="md" color="#FFFFFF" mt="4" ml="3">
                  Akun Warga
                </Text>
                <Text ml="-90px" mt="45px" fontSize="2xl" color="#FFFFFF">
                  500
                </Text>
              </Flex>
            </Box>
          </Center>
          <Flex direction="row"></Flex>
          <Flex direction="row">
            <Text fontSize="2xl" fontWeight="700" ml="20px" mt="20px">
              Agenda Terbaru
            </Text>
            <Link onPress={() => this.props.navigation.navigate("Agenda_Home")}>
              <Text fontSize="sm" left="55px" mt="28px" color="#00A187">
                Lihat Semua
              </Text>
            </Link>
          </Flex>
          <Center>
            <Link>
              <Box
                w="320"
                h="140"
                p="2"
                mt="20px"
                borderTopRadius={20}
                bg="#FFFFFF"
                shadow={2}
              >
                <Flex direction="row">
                  <Image
                    resizeMode="contain"
                    w="120px"
                    h="90px"
                    alt=""
                    mt={4}
                    borderRadius={10}
                    source={require("../../img/rapat.jpg")}
                  ></Image>
                  <Text
                    fontSize="13"
                    color="#000000"
                    mt="1"
                    fontWeight="bold"
                    ml="2"
                    pr="100px"
                  >
                    Rapat pertanggung jawaban dana desa
                  </Text>
                </Flex>
                <Text ml="130px" mt="-65px" fontSize="xs">
                  Duis occaecat enim excepteur cupidatat voluptate Consectetur
                  quis...
                </Text>
                <Flex direction="row">
                  <Ionicons
                    style={styles.iconTime}
                    name="ios-time-outline"
                    size={13}
                    color={"#8D8DAA"}
                  />
                  <Text fontSize="10px" mt="5px" ml="5px">
                    15 menit yang lalu
                  </Text>
                </Flex>
              </Box>
            </Link>
            <Link>
              <Box w="320" h="140" p="2" bg="#FFFFFF" shadow={2}>
                <Flex direction="row">
                  <Image
                    resizeMode="contain"
                    w="120px"
                    h="90px"
                    alt=""
                    mt={4}
                    borderRadius={10}
                    source={require("../../img/present.jpg")}
                  ></Image>
                  <Text
                    fontSize="13"
                    color="#000000"
                    mt="1"
                    fontWeight="bold"
                    ml="2"
                    pr="100px"
                  >
                    Sosialisasi pencegahan DBD
                  </Text>
                </Flex>
                <Text ml="130px" mt="-65px" fontSize="xs">
                  Duis occaecat enim excepteur cupidatat voluptate Consectetur
                  quis...
                </Text>
                <Flex direction="row">
                  <Ionicons
                    style={styles.iconTime}
                    name="ios-time-outline"
                    size={13}
                    color={"#8D8DAA"}
                  />
                  <Text fontSize="10px" mt="5px" ml="5px">
                    30 menit yang lalu
                  </Text>
                </Flex>
              </Box>
            </Link>
            <Link>
              <Box
                w="320"
                h="140"
                p="2"
                borderBottomRadius={20}
                bg="#FFFFFF"
                shadow={2}
              >
                <Flex direction="row">
                  <Image
                    resizeMode="contain"
                    w="120px"
                    h="90px"
                    alt=""
                    mt={4}
                    borderRadius={10}
                    source={require("../../img/cleaning.jpg")}
                  ></Image>
                  <Text
                    fontSize="13"
                    color="#000000"
                    mt="1"
                    fontWeight="bold"
                    ml="2"
                    pr="100px"
                  >
                    Kerja bakti bulanan warga
                  </Text>
                </Flex>
                <Text ml="130px" mt="-65px" fontSize="xs">
                  Duis occaecat enim excepteur cupidatat voluptate Consectetur
                  quis...
                </Text>
                <Flex direction="row">
                  <Ionicons
                    style={styles.iconTime}
                    name="ios-time-outline"
                    size={13}
                    color={"#8D8DAA"}
                  />
                  <Text fontSize="10px" mt="5px" ml="5px">
                    55 menit yang lalu
                  </Text>
                </Flex>
              </Box>
            </Link>
          </Center>
          <Text fontSize="2xl" fontWeight="700" ml="20px" mt="20px">
            Partner Kami
          </Text>
          <Flex direction="row" ml="20px">
            <Link href="https://ittelkom-sby.ac.id/">
              <Image
                w="140px"
                h="140px"
                resizeMode="contain"
                alt=""
                source={require("../../img/itts.png")}
              ></Image>
            </Link>
            <Link href="https://is.ittelkom-sby.ac.id/">
              <Image
                w="170px"
                h="160px"
                ml="10px"
                resizeMode="contain"
                alt=""
                source={require("../../img/SI.png")}
              ></Image>
            </Link>
          </Flex>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  iconDana: {
    marginLeft: 25,
    marginTop: 16,
  },
  iconAduan: {
    marginLeft: 20,
    marginTop: 12,
  },
  iconTime: {
    marginLeft: 130,
    marginTop: 5,
  },
});

export default Home;
