import React, { Component, useState } from "react";
import { StyleSheet, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  NativeBaseProvider,
  ScrollView,
  VStack,
  Text,
  Box,
  Button,
  Flex,
  Link,
  Input,
  Select,
  CheckIcon,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

class Profile_Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.route.params.id,
      email: this.props.route.params.email,
    };

    this.url = "http://192.168.43.181/api_sikat/profile.php";
  }

  updateData = () => {
    const { id } = this.state;
    const { email } = this.state;

    var urlAction = this.url + "/?operation=update-email&id=" + id;
    if (email == "") {
      alert("Data belum lengkap");
    } else {
      fetch(urlAction, {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "email=" + email,
      })
        .then((response) => response.json())
        .then((responseJSON) => {
          Alert.alert("Sukses", "Data berhasil di update", [
            {
              text: "Oke",
              onPress: () => this.props.navigation.navigate("Users"),
            },
          ]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <ScrollView>
          <Flex direction="row" mt="25px">
            <Link onPress={() => this.props.navigation.navigate("Users")}>
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
              Edit Email
            </Text>
          </Flex>
          <VStack mt="20px" ml="25px">
            <Text fontSize="md" fontWeight="700" mt="2px">
              Email
            </Text>
            <Input
              w="310"
              type="number"
              variant="outline"
              placeholder="Masukkan E-Mail anda"
              isRequired={true}
              value={this.state.email}
              onChangeText={(inpEmail) => this.setState({ email: inpEmail })}
            />
            <Button
              width={120}
              height={"44px"}
              ml="190px"
              mt="30px"
              _text={{ color: "#FFFFFF", fontSize: 15 }}
              backgroundColor="#00A187"
              borderRadius={20}
              onPress={this.updateData}
            >
              Simpan
            </Button>
          </VStack>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  iconBack: {
    marginTop: 15,
    marginLeft: 15,
  },
  iconTrash: {
    marginTop: 18,
    marginLeft: 120,
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
  datePickerStyle: {
    width: 230,
  },
  lineHorizontal: {
    width: "100px",
    height: 1,
    color: "#FFFFFF",
  },
});

export default Profile_Email;
