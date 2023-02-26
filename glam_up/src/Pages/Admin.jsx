import React, { ReactNode, useEffect } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
  Link,
  GridItem,
  Grid,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiMenu,
  FiUsers,
} from 'react-icons/fi';
import { DeleteIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../Components/Footer/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getHairProduct, getMakeUpProduct, getSkinProduct } from '../Redux/Admin/Action';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
const LinkItems = [
    { name: 'Home', icon: FiHome ,link:"/admin"},
    { name: 'Statistics', icon: FiTrendingUp ,link:"/"},
    { name: 'Users', icon: FiUsers ,link:"/"},
    { name: 'Add Products', icon: PlusSquareIcon ,link:"/admin/add-product"},
    { name: 'Delete Products', icon: DeleteIcon ,link:"/admin/remove-product"},
  ];


const Admin = ({ children }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getMakeUpProduct);
     },[]);

     useEffect(()=>{
      dispatch(getSkinProduct);
     })
     useEffect(()=>{
      dispatch(getHairProduct);
     })

    const makeUpProduct = useSelector((store)=>store.AdminReducer.makeUpProduct);
    const skinProduct = useSelector((store)=>store.AdminReducer.skinProduct);
    const hairProduct = useSelector((store)=>store.AdminReducer.hairProduct);


  return (
     <>
   <Box display="flex">

    <Box width="17%">
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
    </Box>
       
     <Box width="83%" padding="20px">
     <Tabs variant='soft-rounded' colorScheme='pink'>
         <TabList>
           <Tab>Make Up</Tab>
           <Tab>Mosturizer</Tab>
           <Tab>Hair</Tab>
         </TabList>
        <TabPanels>
         <TabPanel>
          <Grid gridTemplateColumns="repeat(4,1fr)" gap="20px">
            {
              makeUpProduct.length>0 && makeUpProduct.map((el)=>{
                return <GridItem key={el.id} border="1px solid #E2E8F0">
                    <Box>
                    <Image src={el.Image}/>
                    </Box>
                    <Box padding="10px">
                      <Text textAlign="center">{el.title}</Text>
                      <Text marginTop="5px">MRP: <Text as='b'>₹{el.price}</Text></Text>
                      <Text marginTop="5px">{el.starcount} ( {el.ratingcount} )</Text>
                      {el.shades?<Text marginTop="5px">{el.shades}</Text>:""}
                    </Box>
                </GridItem>
              })
            }
          </Grid>
        </TabPanel>
         <TabPanel>
         <Grid gridTemplateColumns="repeat(4,1fr)" gap="20px">
            {
              skinProduct.length>0 && skinProduct.map((el)=>{
                return <GridItem key={el.id} border="1px solid #E2E8F0">
                    <Box>
                    <Image src={el.Image}/>
                    </Box>
                    <Box padding="10px">
                      <Text textAlign="center">{el.title}</Text>
                      <Text marginTop="5px">MRP: <Text as='b'>₹{el.price}</Text></Text>
                      <Text marginTop="5px">{el.starcount} ( {el.ratingcount} )</Text>
                      {el.shades?<Text marginTop="5px">{el.shades}</Text>:""}
                    </Box>
                </GridItem>
              })
            }
          </Grid>
        </TabPanel>
        <TabPanel>
        <Grid gridTemplateColumns="repeat(4,1fr)" gap="20px">
            {
              hairProduct.length>0 && hairProduct.map((el)=>{
                return <GridItem key={el.id} border="1px solid #E2E8F0">
                    <Box>
                    <Image src={el.Image}/>
                    </Box>
                    <Box padding="10px">
                      <Text textAlign="center">{el.title}</Text>
                      <Text marginTop="5px">MRP: <Text as='b'>₹{el.price}</Text></Text>
                      <Text marginTop="5px">{el.starcount} ( {el.ratingcount} )</Text>
                      {el.shades?<Text marginTop="5px">{el.shades}</Text>:""}
                    </Box>
                </GridItem>
              })
            }
          </Grid>
        </TabPanel>
      </TabPanels>
     </Tabs>
     </Box>  

   </Box>
   </>
  )
};


// //////////////////////////////////////////////////////////////

const SidebarContent = ({ onClose, ...rest }) => {
    return (
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        // pos="fixed"
        h="110vh"
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between" backgroundColor="#FFFFFF">
          <Box padding="20px 20px 20px 0px" >
          <Image src="https://i.ibb.co/1XYt2t1/glamup-2-1.png"/>
          </Box>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <RouterLink to={link.link}>
          <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
        </RouterLink>
        ))}
      </Box>
    );
  };
  
  const NavItem = ({ icon, children, ...rest }) => {
    return (
      <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'pink.400',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  };
  

  const MobileNav = ({ onOpen, ...rest }) => {
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent="flex-start"
        {...rest}>
        <IconButton
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>
    );
  };

export default Admin
