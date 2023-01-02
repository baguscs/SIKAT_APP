import React, { Component } from "react";
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

class Add_Dana extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      id: "",
      dana: "",
      desc: "",
      date: "",
      dataDana: [],
    };
  }

  checkList = async () => {
    let value = await AsyncStorage.getItem("@DanaSikat");
    value = JSON.parse(value);
    var countData = null;

    if (value !== null) {
      this.setState({ dataDana: value });
      countData = value.length;
    }

    this.pushOnlist(countData);
  };

  pushOnlist = async (lengthList) => {
    const prevData = this.state.dataDana;

    if (lengthList === null) {
      this.setState({
        dataDana: [
          ...prevData,
          {
            id: 1,
            category: this.state.category,
            dana: this.state.dana,
            desc: this.state.desc,
            date: this.state.date,
          },
        ],
      });
    } else {
      this.setState({
        dataDana: [
          ...prevData,
          {
            id: lengthList + 1,
            category: this.state.category,
            dana: this.state.dana,
            desc: this.state.desc,
            date: this.state.date,
          },
        ],
      });
    }

    this.saveData();
  };

  saveData = async () => {
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
              Tambah Dana
            </Text>
          </Flex>
          <Text fontSize="15px" ml="28px" mt="20px">
            Silahkan Isi Formulir dibawah ini
          </Text>
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
              onChangeText={(total) => this.setState({ dana: total })}
              value={this.state.dana}
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
              onPress={() => this.checkList()}
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
});

export default Add_Dana;
