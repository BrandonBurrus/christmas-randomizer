import React, { ReactNode } from 'react';
// import Header from './Header';
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
    <Box w='100vw' h='100vh' overflow='scroll' bg='gray.200'>
      <Stack
        w={['100%', '100%', '100%', '60rem']}
        minH='calc(100% - 4rem)'
        minW='24rem'
        mx='auto'
        my='2rem'
        px='2rem'
      >
        <Flex as='main' bg='white' borderRadius='2rem' flexGrow={1} px='2rem' py='1.5rem'>
          {children}
        </Flex>
        <Footer mt='1rem' />
      </Stack>
    </Box>
  );
}

export default Layout;
