import React, { FormEvent, useState } from 'react';
import { Box, Button, Flex, Input, Stack, Text } from '@chakra-ui/core';
import { COPY } from 'app/config';
import useSecretSanta from '../hooks/useSecretSanta';
import { isEmpty } from 'ramda';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
// import { CgTrash as TrashIcon } from 'react-icons/cg';

/**
 * TODO: Add documentation
 */
function SecretSantaList() {
  const [secretSanta, { addName, moveName }] = useSecretSanta();
  const [newName, setNewName] = useState('');

  const addNewName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newName !== '') {
      addName(newName);
    }
    setNewName('');
  };

  const onDragEnd = (result: DropResult) => {
    if (result.destination) {
      moveName(result.draggableId, result.destination.index);
    }
  };

  return (
    <Stack align='center' justify='center' w='100%' flexGrow={1} pb='2rem' spacing='1rem'>
      <Stack as='form' direction='row' w='100%' onSubmit={addNewName}>
        <Input
          placeholder={COPY.ADD_NAME_TIP}
          flexGrow={1}
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <Button type='submit' bg='green.300'>
          {COPY.ADD_TO_LIST}
        </Button>
      </Stack>
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex flexGrow={1} w='100%'>
          {isEmpty(secretSanta.names) ? null : (
            <Droppable droppableId='1'>
              {drop => (
                <Box w='100%' ref={drop.innerRef} {...drop.droppableProps}>
                  {secretSanta.names
                    .map((name, index) => (
                      <Draggable draggableId={name.id} key={name.id} index={index}>
                        {drag => (
                          <Box
                            bg='gray.100'
                            p='1rem'
                            mb='0.5rem'
                            borderRadius='1rem'
                            ref={drag.innerRef}
                            {...drag.draggableProps}
                            {...drag.dragHandleProps}
                          >
                            <Text fontSize='xl'>{name.name}</Text>
                          </Box>
                        )}
                      </Draggable>
                    ))
                    .toArray()}
                  {drop.placeholder}
                </Box>
              )}
            </Droppable>
          )}
        </Flex>
      </DragDropContext>
    </Stack>
  );
}

export default SecretSantaList;
