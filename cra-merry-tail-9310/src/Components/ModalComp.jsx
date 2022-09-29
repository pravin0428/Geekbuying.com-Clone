import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure,
    Box
  } from '@chakra-ui/react'
  import styles from "./Navbar.module.css"
  function ModalComponent({title}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
       
        <Button onMouseEnter={onOpen} backgroundColor="#318ffb" color="white" >{title}</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay  />
          <ModalContent >
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            {/* <select name="" id=""   >
            <option value="">English</option>
            <option value="">English</option>
            <option value="">English</option>
            </select> */}
           

            <ModalCloseButton  />
            <ModalBody >
               <Text>hi</Text>
            </ModalBody>
  
            <ModalFooter >
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
       
      </>
    )
  }
  
  export default ModalComponent