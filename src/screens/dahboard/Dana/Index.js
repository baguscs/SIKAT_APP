import React, { Component } from "react";
import { StyleSheet } from "react-native";
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
import AsyncStorage from "@react-native-async-storage/async-storage";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    AsyncStorage.getItem("@DanaSikat", (error, result) => {
      if (result) {
        let resultParsed = JSON.parse(result);
        this.setState({
          data: resultParsed,
        });
      }
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
                InputRightElement={
                  <Button size="md" rounded="none" backgroundColor={"#00A187"}>
                    <Ionicons
                      name="search-outline"
                      size={23}
                      color={"#FFFFFF"}
                    />
                  </Button>
                }
                placeholder="Cari Data"
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
            mt="20px"
            data={this.state.data}
            renderItem={({ item, index }) => (
              <Center>
                <Link
                  onPress={() =>
                    this.props.navigation.navigate("Dana_Edit", {})
                  }
                >
                  <Box w="320" h="90px" backgroundColor="#FFFFFF" mt="2px">
                    <Text fontSize="18px" fontWeight="bold" ml="15px" mt="10px">
                      {item.category}
                    </Text>
                    <Flex direction="row">
                      <Text
                        fontSize="13px"
                        ml="15px"
                        mt="2px"
                        fontWeight="bold"
                      >
                        Rp. {item.dana}
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
                        {item.date}
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
