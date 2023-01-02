import React, {Component, useState} from 'react';

import {
  NativeBaseProvider,
  VStack,
  Image,
  ScrollView,
  Text,
  Input,
  Stack,
  Link,
  Button,
  Box,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NativeBaseProvider>
        <ScrollView>
          <VStack alignItems="center" space={1}>
            <Image
              width={400}
              height={400}
              resizeMode="contain"
              alt=""
              source={require('../img/Privacy-policy-rafiki.png')}></Image>
          </VStack>
          <Text fontSize="2xl" mt={-10} ml="40px" bold>
            Login
          </Text>
          <Text fontSize="md" ml="40px">
            Silahkan Login terlebih dahulu
          </Text>
          <Stack space={4} w="75%" mt={3} maxW="300px" mx="auto">
            <Input
              type="email"
              variant="outline"
              placeholder="Masukkan e-mail anda"
              isRequired={true}
            />
            <Input
              type="password"
              variant="outline"
              placeholder="Masukkan password anda"
              isRequired={true}
            />
          </Stack>
          <Link
            onPress={() => this.props.navigation.navigate('Forgot')}
            ml="208px"
            mt={3}
            textDecoration="none"
            _text={{textDecoration: 'none', color: '#00A187'}}>
            Lupa Password?
          </Link>
          <Box alignItems="center">
            <Button
              width={300}
              height={50}
              _text={{color: '#FFFFFF', fontSize: 17}}
              backgroundColor="#00A187"
              mt={5}
              borderRadius={20}
              onPress={() => this.props.navigation.navigate('Home')}>
              Login
            </Button>
          </Box>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}

export default Login;
