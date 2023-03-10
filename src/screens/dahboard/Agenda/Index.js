import React, { Component } from "react";
import { StyleSheet, RefreshControl } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  NativeBaseProvider,
  Center,
  Text,
  Box,
  Button,
  Flex,
  Link,
  Input,
  FlatList,
  ScrollView,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      date: "",
      search: false,
      show: true,
      data: [],
      post: "",
    };
    this.url = "http://192.168.43.181/api_sikat/agenda.php";
  }
  componentDidMount() {
    if (this.state.search == true) {
      this.searchData();
      this.setState({ search: false });
    } else {
      this.setState({ show: true });
      this.getData();
    }
    this.author();
  }

  async author() {
    const res = await axios.get("https://geolocation-db.com/json/");
    const urlAction = "http://192.168.43.181/api_sikat/autorisasi.php";
    await fetch(urlAction + "/?ip=" + res.data.IPv4)
      .then((response) => response.json())
      .then((json) => {
        if (json.data.user == "Admin") {
          this.setState({ post: true });
        } else {
          this.setState({ post: false });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onRefresh = () => {
    this.setState({ search: false });
    this.setState({ refresh: true }, () => {
      setTimeout(() => {
        this.setState({ refresh: false });
        this.componentDidMount();
      }, 500);
    });
  };

  async getData() {
    await fetch(this.url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.data.result });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async searchData(keyword) {
    await fetch(this.url + "/?operation=search&tanggal=" + keyword)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ search: true });
        if (json.data.result == null) {
          this.setState({ show: false });
        } else {
          this.setState({ data: json.data.result });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <Flex direction="row" mt="15px">
          <Link onPress={() => this.props.navigation.navigate("Fasilitas")}>
            <Ionicons
              style={styles.iconBack}
              name="ios-chevron-back-outline"
              size={45}
              color={"#00A187"}
            />
          </Link>
          <Text
            fontSize="2xl"
            fontWeight="700"
            ml="5px"
            mt="20px"
            color="#00A187"
          >
            Agenda
          </Text>
        </Flex>
        <Center>
          <Flex direction="row" mt="20px">
            <Box alignItems="center">
              <Input
                type="text"
                w="250px"
                py="0"
                fontSize="16px"
                onChangeText={(keyword) => this.setState({ date: keyword })}
                value={this.state.date}
                InputRightElement={
                  <Button
                    size="md"
                    rounded="none"
                    backgroundColor={"#00A187"}
                    onPress={() => this.searchData(this.state.date)}
                  >
                    <Ionicons
                      name="search-outline"
                      size={23}
                      color={"#FFFFFF"}
                    />
                  </Button>
                }
                placeholder="Cari Data Dari Tanggal"
              />
            </Box>
            {this.state.post ? (
              <Button
                ml="20px"
                backgroundColor={"#4CACBC"}
                onPress={() => this.props.navigation.navigate("Agenda_Add")}
              >
                <Ionicons
                  name="add-circle-outline"
                  size={23}
                  color={"#FFFFFF"}
                />
              </Button>
            ) : (
              <Text></Text>
            )}
          </Flex>
          {this.state.show ? (
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refresh}
                  onRefresh={this.onRefresh}
                />
              }
              mt="20px"
              data={this.state.data}
              renderItem={({ item, index }) => (
                <Center>
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
                    <Box w="320" h="90px" backgroundColor="#FFFFFF" mt="2px">
                      <Text
                        fontSize="18px"
                        fontWeight="bold"
                        ml="15px"
                        mt="10px"
                      >
                        {item.nama}
                      </Text>
                      <Flex direction="row">
                        <Text
                          fontSize="13px"
                          ml="15px"
                          mt="2px"
                          fontWeight="bold"
                        >
                          {item.tempat}
                        </Text>
                        <Ionicons
                          style={styles.iconForward}
                          name="ios-chevron-forward-outline"
                          size={45}
                          color={"#00A187"}
                        />
                      </Flex>
                      <Flex direction="row">
                        <Ionicons
                          style={styles.iconTime}
                          name="ios-time-outline"
                          size={13}
                          color={"#8D8DAA"}
                        />
                        <Text fontSize="10px" mt="5px" ml="5px">
                          {item.tanggal} - {item.waktu}
                        </Text>
                      </Flex>
                    </Box>
                  </Link>
                </Center>
              )}
            ></FlatList>
          ) : (
            <ScrollView
              nestedScrollEnabled={true}
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
              <Center>
                <Box w="320" h="90px" backgroundColor="#FFFFFF" mt="20px">
                  <Center>
                    <Text fontSize="18px" fontWeight="bold" mt="20px">
                      Data Tidak Ditemukan
                    </Text>
                  </Center>
                </Box>
              </Center>
            </ScrollView>
          )}
        </Center>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  iconBack: {
    marginTop: 15,
    marginLeft: 15,
  },
  iconTime: {
    marginLeft: 15,
    marginTop: 5,
  },
  iconForward: {
    marginTop: -15,
    position: "absolute",
    right: 2,
  },
});

export default Index;
