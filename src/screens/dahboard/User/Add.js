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
  TextArea,
  CheckIcon,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

class Add_User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
      place: "",
      date: "",
      time: "",
    };

    this.url = "http://192.168.43.181/api_sikat/agenda.php";
  }

  insertData = () => {
    const { name } = this.state;
    const { desc } = this.state;
    const { date } = this.state;
    const { place } = this.state;
    const { time } = this.state;

    var urlAction = this.url + "/?operation=create";
    if (name == "" || desc == "" || place == "" || date == "" || time == "") {
      alert("Data belum lengkap");
    } else {
      fetch(urlAction, {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body:
          "nama=" +
          name +
          "&deskripsi=" +
          desc +
          "&tempat=" +
          place +
          "&tanggal=" +
          date +
          "&waktu=" +
          time,
      })
        .then((response) => response.json())
        .then((responseJSON) => {
          Alert.alert("Sukses", "Data berhasil disimpan", [
            {
              text: "Oke",
              onPress: () => this.props.navigation.navigate("Agenda_Home"),
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
          <Flex direction="row" mt="15px">
            <Link onPress={() => this.props.navigation.navigate("Agenda_Home")}>
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
              Tambah User
            </Text>
          </Flex>
          <Text fontSize="15px" ml="28px" mt="20px">
            Silahkan Isi Formulir dibawah ini
          </Text>
          <VStack mt="20px" ml="25px">
            <Text fontSize="md" fontWeight="700">
              Nama User
            </Text>
            <Input
              w="310"
              type="number"
              variant="outline"
              placeholder="Masukkan nama agenda"
              isRequired={true}
              onChangeText={(title) => this.setState({ name: title })}
              value={this.state.name}
            />
            <Text fontSize="md" fontWeight="700" mt="20px">
              Deskripsi
            </Text>
            <Box alignItems="center" w="100%">
              <TextArea
                h={20}
                placeholder="Deskripsi Agenda"
                w="310"
                ml="-25px"
                onChangeText={(inpDesc) => this.setState({ desc: inpDesc })}
                value={this.state.desc}
              />
            </Box>
            <Text fontSize="md" fontWeight="700" mt="20px">
              Tempat
            </Text>
            <Input
              w="310"
              type="number"
              variant="outline"
              placeholder="Masukkan tempat agenda"
              isRequired={true}
              onChangeText={(inputPlace) =>
                this.setState({ place: inputPlace })
              }
              value={this.state.place}
            />
            <Text fontSize="md" fontWeight="700" mt="20px">
              Tanggal
            </Text>
            <Input
              w="310"
              type="number"
              variant="outline"
              placeholder="Masukkan tempat agenda"
              isRequired={true}
              onChangeText={(inputDate) => this.setState({ date: inputDate })}
              value={this.state.date}
            />
            <Text fontSize="xs" color={"#DC0000"} mt="2px">
              Contoh: 19 Desember 2022
            </Text>
            <Text fontSize="md" fontWeight="700" mt="20px">
              Waktu Agenda
            </Text>
            <Input
              w="310"
              type="text"
              variant="outline"
              placeholder="Masukkan tanggal transaksi"
              isRequired={true}
              onChangeText={(onTime) => this.setState({ time: onTime })}
              value={this.state.time}
            />
            <Text fontSize="xs" color={"#DC0000"} mt="2px">
              Contoh: 20:19
            </Text>
            <Button
              width={120}
              height={"44px"}
              ml="190px"
              mt="30px"
              _text={{ color: "#FFFFFF", fontSize: 15 }}
              backgroundColor="#00A187"
              borderRadius={20}
              onPress={this.insertData}
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

export default Add_User;
