import React from 'react';
import { Box, Heading, BoxProps } from '@chakra-ui/core';
import { COPY } from '../app/config';

/**
 * App header
 */
function Header(props: BoxProps) {
  return (
    <Box {...props} borderRadius='2rem' py='1rem' px='2rem' bg='white'>
      <Heading>{COPY.TITLE}</Heading>
    </Box>
  );
}

export default Header;
