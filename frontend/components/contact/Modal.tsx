import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Button,
  InputGroup,
  InputLeftAddon,
  useToast,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

import { API_URL } from "../../constants/misc";

function ContactModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [formData, setFormData] = useState({
    last_name: "",
    first_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const SendMessage = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          last_name: formData.last_name,
          first_name: formData.first_name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      };
      fetch(API_URL + "/api/mailing", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.message == "Please fill all fields") {
            toast({
              title: "Attention, petite correction à faire",
              description:
                "Désolé mais il semblerait que vous ayez oublié un champ, remplissez et soumettez à nouveau votre message.",
              status: "warning",
              duration: 6000,
              isClosable: true,
              position: "top-right",
            });
          } else {
            toast({
              title: "Tout est bon !",
              description:
                "Votre message a bien été envoyé, je vais revenir vers vous au plus vite.",
              status: "success",
              duration: 6000,
              isClosable: true,
              position: "top-right",
            });
            onClose();
          }
        })
        .catch((error) => {
          toast({
            title: "Quelque chose ne vas pas :(",
            description:
              "Votre message n'a pas été envoyé, veuillez réessayer ou me contacter par un autre moyen.",
            status: "error",
            duration: 6000,
            isClosable: true,
            position: "top-right",
          });
          console.error(error);
        });
    } catch (err: any) {
      toast({
        title: "Quelque chose ne vas pas :(",
        description:
          "Votre message n'a pas été envoyé, veuillez réessayer ou me contacter par un autre moyen.",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  return (
    <>
      <Button
        leftIcon={<ChatIcon />}
        backgroundColor="#de8814"
        variant="solid"
        onClick={onOpen}
      >
        M'envoyer un message
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>M'envoyer un message</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl id="last_name">
              <FormLabel>Nom</FormLabel>
              <Input
                name={"last_name"}
                placeholder="Votre nom"
                onChange={onChange}
                value={formData.last_name}
              />
            </FormControl>

            <FormControl mt={4} id="first_name">
              <FormLabel>Prénom</FormLabel>
              <Input
                name={"first_name"}
                placeholder="Votre prénom"
                onChange={onChange}
                value={formData.first_name}
              />
            </FormControl>

            <FormControl mt={4} id="email">
              <FormLabel>E-mail</FormLabel>
              <Input
                name={"email"}
                placeholder="Votre adresse e-mail (pour vous recontacter)"
                onChange={onChange}
                value={formData.email}
              />
            </FormControl>

            <FormControl mt={4} id="phone">
              <FormLabel>Téléphone</FormLabel>
              <InputGroup>
                <InputLeftAddon>+33</InputLeftAddon>
                <Input
                  name={"phone"}
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                  onChange={onChange}
                  value={formData.phone}
                />
              </InputGroup>
            </FormControl>

            <FormControl mt={4} id="message">
              <FormLabel>Message</FormLabel>
              <Input
                name={"message"}
                placeholder="Votre message"
                onChange={onChange}
                value={formData.message}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={SendMessage}>
              Envoyer
            </Button>
            <Button onClick={onClose}>Annuler</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ContactModal;
