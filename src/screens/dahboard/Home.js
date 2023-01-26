import React, { Component } from "react";
import { StyleSheet, BackHandler, Alert, RefreshControl } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  NativeBaseProvider,
  Center,
  Image,
  Text,
  Box,
  Flex,
  Link,
  FlatList,
  ScrollView,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      dana: "",
      agenda: [],
      name: "",
      warga: "",
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
    this.getAgenda();
    this.getDataUsers();
    this.getTotalWarga();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }

  async getTotalWarga() {
    await fetch(this.url + "/?data=warga")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ warga: json.data.warga });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async getDataUsers() {
    const res = await axios.get("https://geolocation-db.com/json/");
    await fetch(this.url + "/?data=users&ip=" + res.data.IPv4)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ name: json.data.user });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onRefresh = () => {
    this.setState({ refresh: true }, () => {
      setTimeout(() => {
        this.componentDidMount();
        this.setState({ refresh: false });
      }, 900);
    });
  };

  async getTotalData() {
    await fetch(this.url + "/?data=dana")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ dana: json.totalDana.dana });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async getAgenda() {
    await fetch(this.url + "/?data=agenda")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ agenda: json.data.agenda });
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
          nestedScrollEnabled={true}
          backgroundColor="#F4F6F9"
          refreshControl={
            <RefreshControl
              refreshing={this.state.refresh}
              onRefresh={() => {
                // this.setState({ refresh: false });
                this.onRefresh();
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
            <Text fontSize="20px" fontWeight="700" ml="20px" mt="15px">
              {this.state.name}
            </Text>
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
            <Link onPress={() => this.props.navigation.navigate("User_Home")}>
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
                    {this.state.warga}
                  </Text>
                </Flex>
              </Box>
            </Link>
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
          <Center mt="10px">
            <FlatList
              nestedScrollEnabled
              data={this.state.agenda}
              renderItem={({ item, index }) => (
                <Link
                  onPress={() =>
                    this.props.navigation.navigate("Agenda_Edit", {
                      id: item.id,
                      name: item.nama,
                      desc: item.deskripsi,
                      place: item.tempat,
                      date: item.tanggal,
                      time: item.waktu,
                    })
                  }
                >
                  <Box w="320" h="120" p="2" bg="#FFFFFF" shadow={2}>
                    <Text
                      fontSize="18"
                      color="#000000"
                      mt="1"
                      fontWeight="bold"
                      ml="2"
                    >
                      {item.nama}
                    </Text>
                    <Text ml="2" mt="5px" fontSize="15">
                      {item.tempat}
                    </Text>
                    <Flex direction="row">
                      <Ionicons
                        style={styles.iconTime}
                        name="ios-time-outline"
                        size={20}
                        color={"#8D8DAA"}
                      />
                      <Text fontSize="13px" mt="10px" ml="5px">
                        {item.tanggal} - {item.waktu}
                      </Text>
                    </Flex>
                  </Box>
                </Link>
              )}
            ></FlatList>
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
    marginLeft: 5,
    marginTop: 10,
  },
});

export default Home;
