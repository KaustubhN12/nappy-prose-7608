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
  Toast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Address = () => {

  const dispatch = useDispatch();
  const cartData = useSelector((store) => {
    console.log(store)
   
    return store.productReducer.cartData;
    
  });
  const totalPrice = useSelector((store) => {
    console.log("product",store)
    return store.productReducer.totalPrice;
  });

  const totaldiscount = useSelector((store) => {
    console.log("product", store);
    return store.productReducer.totaldiscount;
  });

   console.log("iiiiii",+totaldiscount);
   console.log(cartData);
  // function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [screen, setScreen] = useState("");
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();



  // const { ItemCount, Totalprice, Totaldiscountprice } = useSelector((store) => {
  //   console.log(store)
  //   return {
  //     ItemCount: store.CartReducer.ItemCount,
  //     Totalprice: store.CartReducer.Totalprice,
  //     Totaldiscountprice: store.CartReducer.Totaldiscountprice,
  //   };
  // });
  // const { ItemCount, Totalprice, Totaldiscountprice } ;
  
  const {
    name = "watch",
    img = "https://i.pinimg.com/236x/bc/47/18/bc47182aa08ac60cf4270d87961d3018.jpg",
  } = cartData.length;

  

  return (
    <SimpleGrid
      w={screen === "sm" ? "90%" : screen === "md" ? "80%" : "60%"}
      margin="auto"
      mt="30px"
      mb="160px"
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

          {/* Drawer */}

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

                {/*                 
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
                  </button> */}

                <Link to="/payment">
                  <button
                    // onClick={handlePost}
                    style={{
                      width: "100%",
                      color: "white",
                      backgroundColor: "#e80071",
                      padding: "18px",
                      fontSize: "18px",
                      marginRight: "90px",
                    }}
                  >
                    Ship to this address
                  </button>
                </Link>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </SimpleGrid>

        <Box width="230px"
          border="0px solid red">
          
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
                    {<Heading fontSize="14px">{cartData.length} Items</Heading>}
                  </Box>
                  {/* <AccordionIcon /> */}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                display="flex"
                justifyContent={"space-between"}
              >
                {/* <Image
                  // src={img}
                  alt="Image"
                  boxSize="90px"
                  objectFit="cover"
                /> */}
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
                    // border="1px solid red"
                  >
                    <Heading as="h1" fontSize="16px">
                      Price Details
                    </Heading>
                    {/* {<Heading fontSize="14px">₹{totalPrice}</Heading>} */}
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      {/* <Text>Bag MRP ({cartData.length} items)</Text>
                      <Text>₹{totalPrice}</Text> */}
                    </Box>
                    {<Heading fontSize="14px">Rs{totalPrice+50}</Heading>}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
                <Text display={"flex"} justifyContent="space-between">
                  <span>Bag MRP ({cartData.length} items)</span>
                  <span>Rs{totalPrice}</span>
                </Text>
                <Text display={"flex"} justifyContent="space-between">
                  <span>After Discount</span>
                  <span>Rs{totalPrice - 100}</span>
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
                    {/* {totalPrice - totaldiscount} */}
                    Rs.100
                  </span>
                </Text>
                <Text display={"flex"} justifyContent="space-between">
                  <span>Shipping</span>
                  <span>Rs.50</span>
                </Text>
                <Heading
                  display={"flex"}
                  justifyContent="space-between"
                  as="h1"
                  fontSize="16px"
                >
                  <span>You Pay</span> <span>Rs{totalPrice +50}</span>{" "}
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