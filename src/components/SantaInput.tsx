import React, { useState } from 'react';
import { InputGroup, Input, Button, InputRightElement } from '@chakra-ui/core';

//TODO: this will be the individual component that is used to add the new participants to the list
function SantaInput() {
  const [show, setShow] = useState(false);

  return (
    <InputGroup size='md'>
      <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default SantaInput;
