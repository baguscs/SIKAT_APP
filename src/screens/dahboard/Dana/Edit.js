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

import AsyncStorage from "@react-native-async-storage/async-storage";

class Edit_Dana extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.route.params.indexData,
      category: this.props.route.params.category,
      dana: this.props.route.params.dana,
      desc: this.props.route.params.desc,
      date: this.props.route.params.date,
      dataDana: [],
    };
  }

  collectData = async () => {
    let value = await AsyncStorage.getItem("@DanaSikat");
    value = JSON.parse(value);

    if (value !== null) {
      this.setState({ dataDana: value });
    }

    this.changeData();
  };

  changeData = () => {
    let data = this.state.dataDana;

    data[this.state.index].category = this.state.category;
    data[this.state.index].dana = this.state.dana;
    data[this.state.index].desc = this.state.desc;
    data[this.state.index].date = this.state.date;

    this.setState({ dataDana: data });

    console.log(this.state.dataDana);
    this.updateData();
  };

  updateData = async () => {
    try {
      await AsyncStorage.setItem(
        "@DanaSikat",
        JSON.stringify(this.state.dataDana)
      );
      Alert.alert("Sukses", "Data berhasil disimpan", [
        {
          text: "Oke",
          onPress: () => this.props.navigation.navigate("Dana_Home"),
        },
      ]);
    } catch (e) {
      console.log("save error ", e);
    }
  };

  render() {
    return (
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <ScrollView>
          <Flex direction="row" mt="25px">
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
            <Link>
              <Ionicons
                style={styles.iconTrash}
                name="trash-outline"
                size={40}
                color={"#DC0000"}
              ></Ionicons>
            </Link>
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
              value={this.state.dana}
              onChangeText={(total) => this.setState({ dana: total })}
            />
            <Text fontSize="md" fontWeight="700" mt="20px">
              Keterangan
            </Text>
            <Input
              w="310"
              type="number"
              variant="outline"
              placeholder="Masukkan keterangan dana"
              isRequired={true}
              onChangeText={(inputDesc) => this.setState({ desc: inputDesc })}
              value={this.state.desc}
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
              onChangeText={(onDate) => this.setState({ date: onDate })}
              value={this.state.date}
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
              onPress={() => this.collectData()}
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

export default Edit_Dana;
