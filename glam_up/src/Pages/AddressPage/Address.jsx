import React, { useState  , useRef} from 'react'
import {
  SimpleGrid,
  Heading,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Box,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  FormLabel,
  Input,
  Stack,
  DrawerFooter,
  Switch,
} from "@chakra-ui/react";



const Address = () => {


  const [screen, setScreen] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();


  
  return (
    <SimpleGrid
      w={screen === "sm" ? "90%" : screen === "md" ? "80%" : "60%"}
      margin="auto"
      mt="30px"
      mb="30px"
    >
      <SimpleGrid
        display={screen === "sm" ? "grid" : "flex"}
        gap="30px"
        justifyContent={screen === "sm" ? "center" : "space-between"}
      >
        <Box>
          <Heading as="h1" fontSize={"36px"}>
            Choose Address
          </Heading>
          <Text fontSize="14px">
            Detailed address will help our delivery partner reach your doorstep
            quickly
          </Text>
        </Box>
        <Image
          margin="auto"
          width="300px"
          objectFit="cover"
          src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/header-address.svg"
          alt="Address"
        />
      </SimpleGrid>

      <SimpleGrid
        mt="30px"
        display={screen === "sm" ? "grid" : "flex"}
        gap="30px"
        justifyContent={screen === "sm" ? "center" : "space-between"}
      >
        <SimpleGrid
          onClick={onOpen}
          w="300px"
          justifyContent={"center"}
          h="148px"
          border="2px dashed #e80071"
          borderRadius={"10px"}
        >
          <Image
            boxSize="18px"
            objectFit="cover"
            margin="auto"
            marginBottom="10px"
            src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/plus-icon.svg"
            alt="Address"
          />
          <Heading as="h1" fontSize={"16px"} color="#e80071">
            Add New Address
          </Heading>

          {/* Drawer                 */}

          <Drawer
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px" fontSize={"32px"}>
                New Address
              </DrawerHeader>

              <DrawerBody>
                <Stack spacing="24px">
                  <SimpleGrid gap={"8px"}>
                    <FormLabel htmlFor="username">Address</FormLabel>
                    <Input
                      // ref={firstField}
                      id="username"
                      type={"number"}
                      placeholder="Pincode"
                      name="pincode"
                      // value={address.pincode}
                      // onChange={handleChange}
                    />
                    <Input
                      placeholder="House/ Flat/ Office No."
                      name="house"
                      // value={address.house}
                      // onChange={handleChange}
                    />
                    <Input
                      placeholder="Road Name/ Area /Colony"
                      name="road"
                      // value={address.road}
                      // onChange={handleChange}
                    />
                    <Box display={"flex"} justifyContent="space-between">
                      <Text>Use as default address </Text>
                      <Switch
                        id="email-alerts"
                        name="defaultAddress"
                        //   onChange={handleChange}
                        //   isChecked={address.defaultAddress}
                      />
                    </Box>

                    <FormLabel htmlFor="username">Contact</FormLabel>
                    <Text>
                      Information provided here will be used to contact you for
                      delivery updates
                    </Text>
                    <Input
                      placeholder="Name"
                      name="name"
                      // value={address.name}
                      // onChange={handleChange}
                    />
                    <Input
                      placeholder="Phone"
                      name="phone"
                      // value={address.phone}
                      // onChange={handleChange}
                    />
                    <Input
                      placeholder="Email ID (Optional)"
                      name="email"
                      // value={address.email}
                      // onChange={handleChange}
                    />
                  </SimpleGrid>
                </Stack>
              </DrawerBody>

              <DrawerFooter borderTopWidth="1px">
                {/* <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                            </Button> */}
                {/* <Button w='100%' color={'white'} bg='#e80071'>Ship to this address</Button> */}

                <button
                  // onClick={handlePost}
                  style={{
                    width: "100%",
                    color: "white",
                    backgroundColor: "#e80071",
                    padding: "18px",
                    fontSize: "18px",
                  }}
                >
                  Ship to this address
                </button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </SimpleGrid>

        <Box width="230px">
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    display="flex"
                    justifyContent="space-between"
                    flex="1"
                    textAlign="left"
                  >
                    <Heading as="h1" fontSize="16px">
                      Bag
                    </Heading>
                    {/* {<Heading fontSize="14px">{ItemCount} Items</Heading>} */}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                display="flex"
                justifyContent={"space-between"}
              >
                <Image
                  // src={img}
                  alt="Image"
                  boxSize="90px"
                  objectFit="cover"
                />
                {/* <Text>{name}</Text> */}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    display="flex"
                    justifyContent="space-between"
                    flex="1"
                    textAlign="left"
                  >
                    <Heading as="h1" fontSize="16px">
                      Price Details
                    </Heading>
                    {/* {<Heading fontSize="14px">₹{Totaldiscountprice}</Heading>} */}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text display={"flex"} justifyContent="space-between">
                  {/* <span>Bag MRP ({ItemCount} items)</span> */}
                  {/* <span>₹{Totalprice}</span> */}
                </Text>
                <Text display={"flex"} justifyContent="space-between">
                  <span>After Discount</span>
                  {/* <span>₹{Totaldiscountprice}</span> */}
                </Text>
                <Text display={"flex"} justifyContent="space-between">
                  <span>Saving At this Time</span>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#2de02d",
                    }}
                  >
                    {/* {Totalprice - Totaldiscountprice} */}
                  </span>
                </Text>
                <Heading
                  display={"flex"}
                  justifyContent="space-between"
                  as="h1"
                  fontSize="16px"
                >
                  {/* <span>You Pay</span> <span>₹{Totaldiscountprice}</span>{" "} */}
                </Heading>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box display="flex" gap="10px" mt="12px" p="12px 17px">
            <Text fontSize={"12px"}>
              Buy authentic products. Pay securely. Easy returns and exchange
            </Text>
            <Image
              w="39px"
              h="37px"
              src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/pay-secure-lock.png"
              alt="image"
            />
          </Box>
        </Box>
      </SimpleGrid>
    </SimpleGrid>
  );
}

export default Address