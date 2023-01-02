import React, { Component } from "react";
import { StyleSheet } from "react-native";
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
  FlatList,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

class DetailFasilitas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      figure: this.props.route.params.figure,
    };
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
            {this.props.route.params.title}
          </Text>
        </Flex>
        <Center>
          <Image
            resizeMode="contain"
            w="350px"
            h="350px"
            alt=""
            source={this.state.figure}
          ></Image>
          <Text fontSize="xl" px="20px" color="grey" textAlign="center">
            {this.props.route.params.content}
          </Text>
        </Center>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  iconBack: {
    marginTop: 15,
    marginLeft: 20,
  },
});

export default DetailFasilitas;
