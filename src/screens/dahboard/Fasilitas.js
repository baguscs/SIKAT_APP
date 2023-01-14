import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  NativeBaseProvider,
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
  FlatList,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

class Fasilitas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <Text fontSize="2xl" fontWeight="700" ml="20px" mt="40px">
          Fasilitas
        </Text>
        <Center>
          <Link onPress={() => this.props.navigation.navigate("Dana_Home")}>
            <Box
              w="320"
              h="100"
              backgroundColor="#FFFFFF"
              mt="20px"
              borderRadius="20px"
            >
              <Flex direction="row">
                <Ionicons
                  style={styles.iconFacility}
                  name="ios-cash-outline"
                  size={45}
                  color={"#00A187"}
                />
                <Text fontSize="xl" ml="15px" mt="8px" fontWeight="bold">
                  Dana
                </Text>
                <Ionicons
                  style={styles.iconForward}
                  name="ios-chevron-forward-outline"
                  size={45}
                  color={"#00A187"}
                />
              </Flex>
              <Text fontSize="13px" mt="-25px" pr="30px" ml="80px">
                Sebuah fitur untuk mentransparansikan dana desa.
              </Text>
            </Box>
          </Link>
          <Link onPress={() => this.props.navigation.navigate("Agenda_Home")}>
            <Box
              w="320"
              h="100"
              backgroundColor="#FFFFFF"
              mt="20px"
              borderRadius="20px"
            >
              <Flex direction="row">
                <Ionicons
                  style={styles.iconFacility}
                  name="ios-calendar-outline"
                  size={45}
                  color={"#00A187"}
                />
                <Text fontSize="xl" ml="15px" mt="8px" fontWeight="bold">
                  Agenda
                </Text>
                <Ionicons
                  style={styles.iconForward}
                  name="ios-chevron-forward-outline"
                  size={45}
                  color={"#00A187"}
                />
              </Flex>
              <Text fontSize="13px" mt="-25px" pr="30px" ml="80px">
                Anda dapat mengetahui segala agenda dan kegiatan desa disini!
              </Text>
            </Box>
          </Link>
        </Center>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  iconFacility: {
    marginTop: 15,
    marginLeft: 20,
  },

  iconForward: {
    marginTop: 15,
    position: "absolute",
    right: 2,
  },
});

export default Fasilitas;
