import React, { ReactNode } from 'react';
import Header from './Header';
import { Flex, Box, Stack } from '@chakra-ui/core';
import Footer from './Footer';

type LayoutProps = {
  children?: ReactNode;
};

/**
 * Main app page layout
 */
function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <Box w='100vw' h='100vh' overflow='scroll' bg='green.300'>
      <Stack
        w={['100%', '100%', '100%', '60rem']}
        minH='calc(100% - 4rem)'
        minW='24rem'
        mx='auto'
        my='2rem'
        px='2rem'
      >
        <Header />
        <Flex as='main' flexGrow={1} mt='1rem' px='2rem' py='1.5rem' borderRadius='2rem' bg='white'>
          {children}
        </Flex>
        <Footer mt='1rem' />
      </Stack>
    </Box>
  );
}

export default Layout;
