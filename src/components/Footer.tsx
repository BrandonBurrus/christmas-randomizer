import React from 'react';
import { Box, BoxProps, Text } from '@chakra-ui/core';

/**
 * App footer
 */
function Footer(props: BoxProps) {
  return (
    <Box {...props} px='2rem'>
      <Text textAlign='center'>Copyright {new Date().getFullYear()} &copy; Secret Santa List</Text>
    </Box>
  );
}

export default Footer;
