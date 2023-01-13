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
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      date: "",
      data: [],
    };
    this.url = "http://192.168.43.181/api_sikat/dana.php";
  }
  componentDidMount() {
    this.getData();
  }

  onRefresh = () => {
    this.setState({ refresh: true }, () => {
      setTimeout(() => {
        this.getData();
        this.setState({ refresh: false });
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
    await fetch(this.url + "/?operation=search&tangga=" + keyword)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data.result);
        // this.setState({ data: json.data.result });
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
            Dana
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
            <Button
              ml="20px"
              backgroundColor={"#4CACBC"}
              onPress={() => this.props.navigation.navigate("Dana_Add")}
            >
              <Ionicons name="add-circle-outline" size={23} color={"#FFFFFF"} />
            </Button>
          </Flex>
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
                    this.props.navigation.navigate("Dana_Edit", {
                      id: item.id,
                      category: item.kategori,
                      dana: item.jumlah,
                      desc: item.keterangan,
                      date: item.tanggal,
                    })
                  }
                >
                  <Box w="320" h="90px" backgroundColor="#FFFFFF" mt="2px">
                    <Text fontSize="18px" fontWeight="bold" ml="15px" mt="10px">
                      {item.kategori}
                    </Text>
                    <Flex direction="row">
                      <Text
                        fontSize="13px"
                        ml="15px"
                        mt="2px"
                        fontWeight="bold"
                      >
                        Rp. {item.jumlah}
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
                        {item.tanggal}
                      </Text>
                    </Flex>
                  </Box>
                </Link>
              </Center>
            )}
          ></FlatList>
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
