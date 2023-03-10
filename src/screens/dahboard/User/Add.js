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
  Select,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

class Add_User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      post: "",
      telp: "",
      born: "",
      gender: "",
      religion: "",
      address: "",
      nik: "",
      no_kk: "",
      status: "",
    };

    this.url = "http://192.168.43.181/api_sikat/users.php";
  }

  insertData = () => {
    const { name } = this.state;
    const { email } = this.state;
    const { password } = this.state;
    const { post } = this.state;
    const { telp } = this.state;
    const { born } = this.state;
    const { gender } = this.state;
    const { religion } = this.state;
    const { address } = this.state;
    const { nik } = this.state;
    const { no_kk } = this.state;
    const { status } = this.state;

    var urlAction = this.url + "/?operation=create";
    if (
      name == "" ||
      email == "" ||
      password == "" ||
      post == "" ||
      telp == "" ||
      born == "" ||
      gender == "" ||
      religion == "" ||
      address == "" ||
      nik == "" ||
      no_kk == "" ||
      status == ""
    ) {
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
          "&email=" +
          email +
          "&password=" +
          password +
          "&jabatan=" +
          post +
          "&no_telp=" +
          telp +
          "&tgl_lahir=" +
          born +
          "&gender=" +
          gender +
          "&agama=" +
          religion +
          "&alamat=" +
          address +
          "&nik=" +
          nik +
          "&no_kk=" +
          no_kk +
          "&status=" +
          status,
      })
        .then((response) => response.json())
        .then((responseJSON) => {
          Alert.alert("Sukses", "Data berhasil disimpan", [
            {
              text: "Oke",
              onPress: () => this.props.navigation.navigate("User_Home"),
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
            <Link onPress={() => this.props.navigation.navigate("User_Home")}>
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
              placeholder="Masukkan nama user"
              isRequired={true}
              onChangeText={(nameUser) => this.setState({ name: nameUser })}
              value={this.state.name}
            />
            <Text fontSize="md" fontWeight="700">
              NIK
            </Text>
            <Input
              w="310"
              type="number"
              variant="outline"
              placeholder="Masukkan NIK"
              isRequired={true}
              onChangeText={(nikUser) => this.setState({ nik: nikUser })}
              value={this.state.nik}
            />
            <Text fontSize="md" fontWeight="700">
              No Kartu Keluarga
            </Text>
            <Input
              w="310"
              type="number"
              variant="outline"
              placeholder="Masukkan No Kartu Keluarga"
              isRequired={true}
              onChangeText={(kkUser) => this.setState({ no_kk: kkUser })}
              value={this.state.no_kk}
            />
            <Text fontSize="md" fontWeight="700" mt="20px">
              Tanggal Lahir
            </Text>
            <Input
              w="310"
              type="number"
              variant="outline"
              placeholder="Masukkan Tanggal Lahir"
              isRequired={true}
              onChangeText={(bornUser) => this.setState({ born: bornUser })}
              value={this.state.born}
            />
            <Text fontSize="xs" color={"#DC0000"} mt="2px">
              Contoh: 19 Desember 2022
            </Text>
            <Text fontSize="md" fontWeight="700" mt="20px">
              Alamat
            </Text>
            <Input
              w="310"
              type="number"
              variant="outline"
              placeholder="Masukkan alamat"
              isRequired={true}
              onChangeText={(addressUser) =>
                this.setState({ address: addressUser })
              }
              value={this.state.address}
            />
            <Text fontSize="md" fontWeight="700" mt="20px">
              No Telepon
            </Text>
            <Input
              w="310"
              type="number"
              variant="outline"
              placeholder="Masukkan No Telepon"
              isRequired={true}
              onChangeText={(telpUser) => this.setState({ telp: telpUser })}
              value={this.state.telp}
            />
            <Text fontSize="md" fontWeight="700">
              Agama
            </Text>
            <Box maxW="310">
              <Select
                selectedValue={this.state.religion}
                minWidth="300"
                accessibilityLabel="Pilih Agama"
                placeholder="Pilih Agama"
                _selectedItem={{
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(religionUser) =>
                  this.setState({ religion: religionUser })
                }
              >
                <Select.Item label="Islam" value="Islam" />
                <Select.Item label="Kristen" value="Kristen" />
                <Select.Item label="Budha" value="Budha" />
                <Select.Item label="Hindu" value="Hindu" />
                <Select.Item label="Kong Hu Chu" value="Kong Hu Chu" />
              </Select>
            </Box>
            <Text fontSize="md" fontWeight="700">
              Jenis Kelamin
            </Text>
            <Box maxW="310">
              <Select
                selectedValue={this.state.gender}
                minWidth="300"
                accessibilityLabel="Pilih Jenis Kelamin"
                placeholder="Pilih Jenis Kelamin"
                _selectedItem={{
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(genderUser) =>
                  this.setState({ gender: genderUser })
                }
              >
                <Select.Item label="Laki-Laki" value="Laki-Laki" />
                <Select.Item label="Perempuan" value="Perempuan" />
              </Select>
            </Box>
            <Text fontSize="md" fontWeight="700">
              Jabatan
            </Text>
            <Box maxW="310">
              <Select
                selectedValue={this.state.post}
                minWidth="300"
                accessibilityLabel="Pilih Jabatan"
                placeholder="Pilih Jabatan"
                _selectedItem={{
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(postUser) => this.setState({ post: postUser })}
              >
                <Select.Item label="Admin" value="Admin" />
                <Select.Item label="Warga" value="Warga" />
              </Select>
            </Box>
            <Text fontSize="md" fontWeight="700">
              Status Perkawinan
            </Text>
            <Box maxW="310">
              <Select
                selectedValue={this.state.status}
                minWidth="300"
                accessibilityLabel="Pilih Status Perkawinan"
                placeholder="Pilih Status Perkawinan"
                _selectedItem={{
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(statusUser) =>
                  this.setState({ status: statusUser })
                }
              >
                <Select.Item label="Lajang" value="Lajang" />
                <Select.Item label="Menikah" value="Menikah" />
              </Select>
            </Box>
            <Text fontSize="md" fontWeight="700">
              E-Mail
            </Text>
            <Input
              w="310"
              type="number"
              variant="outline"
              placeholder="Masukkan E-Mail"
              isRequired={true}
              onChangeText={(emailUser) => this.setState({ email: emailUser })}
              value={this.state.email}
            />
            <Text fontSize="md" fontWeight="700">
              Password
            </Text>
            <Input
              w="310"
              type="password"
              variant="outline"
              placeholder="Masukkan Password"
              isRequired={true}
              onChangeText={(passwordUser) =>
                this.setState({ password: passwordUser })
              }
              value={this.state.password}
            />
            <Button
              width={120}
              height={"44px"}
              ml="190px"
              mt="30px"
              mb="50px"
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
