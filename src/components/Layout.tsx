import React from 'react';
import Header from './Header';
import SantaInput from './SantaInput';
import { Flex, Text, Box } from '@chakra-ui/core';

const Layout = () => {
  return (
    <Flex height='100vh' align='center' direction='column' bg='green.600'>
      <Flex bg='green.50' align='flex-end'>
        <Header />
      </Flex>
      <Flex bg='blue.50' size='150px' align='center' justify='center'>
        {/* <SantaInput /> */}
      </Flex>
      <Box bg='red.50' width='33%' alignContent='center'>
        <Text bg='red' color='white'>
          Box 3
        </Text>
      </Box>
    </Flex>
  );
};

export default Layout;
