import React from "react";
import { Dimensions, StyleSheet, Alert } from "react-native";
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
} from "native-base";

import Ionicons from "react-native-vector-icons/Ionicons";

const maxWidth = Dimensions.get("window").width;

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <ScrollView>
          <Box w={maxWidth} h="120px" backgroundColor="#FFFFFF">
            <Flex direction="row">
              <Text fontSize="20px" fontWeight="500" ml="20px" mt="45px">
                Bagus Cahyo Sulistiyo
              </Text>
              <Image
                ml="50px"
                mt="45px"
                source={require("../../img/user.jpg")}
                resizeMode="contain"
                size={60}
                borderRadius={100}
                alt=""
              ></Image>
            </Flex>
            <Text ml="20px" mt="-25px" fontSize="16px">
              089012993120
            </Text>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="20px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                Tanggal Lahir
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                12 Maret 2002
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                Umur
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                20
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                Jenis Kelamin
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                Laki-Laki
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                Agama
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                Islam
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="20px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                Alamat
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                Jl. Sawo Bringin Gg: 06 No: 35
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                Kota
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                Surabaya
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                Pekerjaan
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                Mahasiswa
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                Status
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                Belum Menikah
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="20px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                NIK
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                12043002304230001
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                No KK
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                12320001231201232
              </Text>
            </Flex>
          </Box>
          <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
            <Flex direction="row">
              <Text fontSize="17px" ml="20px" mt="10px">
                Anggota Keluarga
              </Text>
              <Text fontSize="15px" position="absolute" right="20px" mt="12px">
                4 Orang
              </Text>
            </Flex>
          </Box>
          <Link>
            <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="20px">
              <Flex direction="row">
                <Text fontSize="17px" ml="20px" mt="10px">
                  E-Mail
                </Text>
                <Text
                  fontSize="15px"
                  position="absolute"
                  right="35px"
                  mt="12px"
                >
                  baguscahyo@gmail.com
                </Text>
                <Ionicons
                  name="ios-chevron-forward-outline"
                  size={28}
                  style={styles.iconForward}
                  color={"#00A187"}
                />
              </Flex>
            </Box>
          </Link>
          <Link>
            <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="2px">
              <Flex direction="row">
                <Text fontSize="17px" ml="20px" mt="10px">
                  Password
                </Text>
                <Text
                  fontSize="15px"
                  position="absolute"
                  right="35px"
                  mt="12px"
                >
                  Sudah Diatur
                </Text>
                <Ionicons
                  name="ios-chevron-forward-outline"
                  size={28}
                  style={styles.iconForward}
                  color={"#00A187"}
                />
              </Flex>
            </Box>
          </Link>
          <Link
            onPress={() =>
              Alert.alert("Peringatan!!!", "Apakah anda yakin ingin Logout", [
                {
                  text: "Tidak",
                  onPress: null,
                },
                {
                  text: "Yakin",
                  onPress: () => this.props.navigation.navigate("Login"),
                },
              ])
            }
          >
            <Box w={maxWidth} h="50px" backgroundColor="#FFFFFF" mt="20px">
              <Text
                fontSize="18px"
                color="#DC3535"
                textAlign="center"
                mt="12px"
              >
                Keluar
              </Text>
            </Box>
          </Link>
          <Center>
            <Text fontSize="md" mt="20px" mb="20px">
              SIKAT Version 1.0.0
            </Text>
          </Center>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  iconForward: {
    position: "absolute",
    right: 7,
    marginTop: 10,
  },
});

export default Users;
