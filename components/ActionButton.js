import React from 'react';
import { Center, Pressable, Actionsheet, useDisclose } from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ActionScreen from '../screens/ActionScreen';

export default (props) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { zoomRatio, site } = props;

  return (
    <>
      <Pressable onPress={onOpen}>
        <Center bg="#CF9B0D" borderRadius={60} p={3 * zoomRatio} borderWidth={2 * zoomRatio} borderColor="black">
          <Fontisto name={"bicycle"} size={20 * zoomRatio} color="white" />
        </Center>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionScreen onClose={onClose} site={site} />
      </Actionsheet>
    </>
  );
}