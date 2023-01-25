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
import axios from "axios";

class Edit_Dana extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.route.params.id,
      category: this.props.route.params.category,
      dana: this.props.route.params.dana,
      desc: this.props.route.params.desc,
      date: this.props.route.params.date,
      post: "",
    };

    this.url = "http://192.168.43.181/api_sikat/dana.php";
  }

  componentDidMount() {
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
        // console.log(this.state.post);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateData = () => {
    const { id } = this.state;
    const { category } = this.state;
    const { dana } = this.state;
    const { desc } = this.state;
    const { date } = this.state;

    var urlAction = this.url + "/?operation=update&id=" + id;
    if (category == "" || dana == "" || desc == "" || date == "") {
      alert("Data belum lengkap");
    } else {
      fetch(urlAction, {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body:
          "kategori=" +
          category +
          "&jumlah=" +
          dana +
          "&keterangan=" +
          desc +
          "&tanggal=" +
          date,
      })
        .then((response) => response.json())
        .then((responseJSON) => {
          Alert.alert("Sukses", "Data berhasil di update", [
            {
              text: "Oke",
              onPress: () => this.props.navigation.navigate("Dana_Home"),
            },
          ]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  confirmDelete = (id) => {
    const idDana = id;
    Alert.alert(
      "Peringatan!",
      "Data akan dihapus secara permanen, apakah anda yakin?",
      [
        {
          text: "Batal",
          onPress: null,
        },
        {
          text: "Yakin",
          onPress: () => this.deleteData(idDana),
        },
      ]
    );
  };

  async deleteData(id) {
    var urlDestroy = this.url + "/?operation=delete&id=" + id;
    await fetch(urlDestroy)
      .then((response) => response.json())
      .then((json) => {
        Alert.alert("Sukses", "Data berhasil di hapus", [
          {
            text: "Oke",
            onPress: () => this.props.navigation.navigate("Dana_Home"),
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
            {this.state.post ? (
              <Link onPress={() => this.confirmDelete(this.state.id)}>
                <Ionicons
                  style={styles.iconTrash}
                  name="trash-outline"
                  size={40}
                  color={"#DC0000"}
                ></Ionicons>
              </Link>
            ) : (
              <Text></Text>
            )}
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
            {this.state.post ? (
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
            ) : (
              <Text></Text>
            )}
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
