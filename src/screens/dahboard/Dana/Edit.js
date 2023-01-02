import React, { Component, useState } from "react";
import { StyleSheet } from "react-native";
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

import AsyncStorage from "@react-native-async-storage/async-storage";

class Edit_Dana extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
    };
  }

  render() {
    return (
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <ScrollView>
          <Flex direction="row" mt="15px">
            <Link onPress={() => this.props.navigation.navigate("Dana_Home")}>
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
              Edit Dana
            </Text>
          </Flex>
          <VStack mt="20px" ml="25px">
            <Text fontSize="md" fontWeight="700">
              Kategori
            </Text>
            <Box maxW="310">
              <Select
                selectedValue={this.state.category}
                minWidth="300"
                accessibilityLabel="Pilih Kategori"
                placeholder="Pilih Kategori"
                _selectedItem={{
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) =>
                  this.setState({ category: itemValue })
                }
              >
                <Select.Item label="Pemasukan" value="Pemasukan" />
                <Select.Item label="Pengeluaran" value="Pengeluaran" />
              </Select>
            </Box>
            <Text fontSize="md" fontWeight="700" mt="20px">
              Jumlah Dana
            </Text>
            <Input
              w="310"
              type="number"
              variant="outline"
              placeholder="Masukkan nilai jumlah dana"
              isRequired={true}
            />
            <Text fontSize="md" fontWeight="700" mt="20px">
              Tanggal transaksi
            </Text>
            <Input
              w="310"
              type="text"
              variant="outline"
              placeholder="Masukkan tanggal transaksi"
              isRequired={true}
            />
            <Text fontSize="xs" color={"#DC0000"} mt="2px">
              Contoh: 19 Desember 2022
            </Text>
            <Button
              width={120}
              height={"44px"}
              ml="190px"
              mt="30px"
              _text={{ color: "#FFFFFF", fontSize: 15 }}
              backgroundColor="#00A187"
              borderRadius={20}
            >
              Simpan
            </Button>
          </VStack>
          <Text fontSize="md" color={"#DC0000"} mt="10px" ml="25px">
            Hapus Data
          </Text>
          <Button
            width={320}
            height={"44px"}
            ml="20px"
            mt="10px"
            _text={{ color: "#FFFFFF", fontSize: 15 }}
            backgroundColor="#DC0000"
            borderRadius={20}
          >
            Hapus
          </Button>
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

export default Edit_Dana;
