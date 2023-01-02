import React, {Component} from 'react';
import {Alert} from 'react-native';
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
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NativeBaseProvider>
        <ScrollView>
          <Flex direction="row" ml="20px" mt="30px">
            <Link onPress={() => this.props.navigation.navigate('Login')}>
              <Ionicons
                name="ios-arrow-back-outline"
                size={30}
                color={'#00A187'}
              />
            </Link>
            <Text fontSize="xl" ml="15px" fontWeight="800" color="#00A187">
              Lupa Password
            </Text>
          </Flex>
          <VStack space={1} alignItems="center">
            <Image
              mt={3}
              resizeMode="contain"
              size={330}
              source={require('../img/Forgot-password-amico.png')}
              alt=""></Image>
            <Text fontSize="md" mx={7} textAlign="center">
              Masukkan e-mail yang terdaftar, kami akan segera mengirim pesan
              reset password ke email anda.
            </Text>
            <Stack space={4} w="80%" mt={3} maxW="300px" mx="auto">
              <Input
                type="email"
                variant="outline"
                placeholder="Masukkan e-mail anda"
                isRequired={true}
              />
            </Stack>
            <Box alignItems="center">
              <Button
                width={300}
                height={50}
                _text={{color: '#FFFFFF', fontSize: 17}}
                backgroundColor="#00A187"
                mt={5}
                borderRadius={20}
                onPress={() =>
                  Alert.alert(
                    'Sukses',
                    'Pesan reset password telah terkirim ke e-mail anda',
                    [
                      {
                        title: 'Oke',
                        onPress: () => this.props.navigation.navigate('Login'),
                      },
                    ],
                  )
                }>
                Kirim
              </Button>
            </Box>
          </VStack>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}

export default Forgot;
