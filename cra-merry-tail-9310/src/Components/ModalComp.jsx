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
       
        <Button onClick={onOpen} backgroundColor="#318ffb" color="white" >{title}</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay className={styles.overlay} />
          <ModalContent className={styles.content} >
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            <select name="" id="" className={styles.boxSelect} >
            <option value="">English</option>
            <option value="">English</option>
            <option value="">English</option>
            </select>
           

            <ModalCloseButton  className={styles.btn} />
            <ModalBody className={styles.modal_body} >
               <Text>hi</Text>
            </ModalBody>
  
            <ModalFooter className={styles.footer} >
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