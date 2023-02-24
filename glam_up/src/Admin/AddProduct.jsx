import React, { ReactNode, useState } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiMenu,
  FiUsers,
} from 'react-icons/fi';
import { DeleteIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postProduct } from '../Redux/Admin/Action';

const LinkItems = [
    { name: 'Home', icon: FiHome ,link:"/admin"},
    { name: 'Statistics', icon: FiTrendingUp ,link:"/"},
    { name: 'Users', icon: FiUsers ,link:"/"},
    { name: 'Add Products', icon: PlusSquareIcon ,link:"/admin/add-product"},
    { name: 'Delete Products', icon: DeleteIcon ,link:"/admin/remove-product"},
  ];
  let url = "https://api-nykaa-database.vercel.app/makeup"

  let initialState = {
    Image:"",
    title:"",
    price:"",
    discount:"",
    color:"",
    brand:"",
    Keywords: "",
    cssqlopj4_URL:"https://www.nykaa.com/lakme-complexion-care-face-cream-37836/p/37835?productId=37835&pps=3",
    originalprice:360,
    ratingcount:33819,
    img1:"https://images-static.nykaa.com/media/catalog/product/9/9/994f68922998_S2_8901030863127.jpg",
    img2:"https://images-static.nykaa.com/media/catalog/product/9/9/994f68922998_S3_8901030863127.jpg",
    img3:"https://images-static.nykaa.com/media/catalog/product/9/9/994f68922998_S4_8901030863127.jpg",
    img4:"https://images-static.nykaa.com/media/catalog/product/9/9/994f68922998_S5_8901030863127.jpg",
    star:3.0,
    starcount:"★★★☆☆",
    shades: "6 Shades"

  }

const AddProduct = ({ children }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [product,setProduct] = useState(initialState);
    const [category,setCategory] = useState("");
     const dispatch = useDispatch()
    const handleChange = (e) => {
    const {name,value} = e.target;
    setProduct((prev)=>{
        return {
            ...prev,[name]:name=="price"? +value : value
        }
    })
    }

    const handleCategory = (e) => {
      setCategory(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(postProduct(product));
        setCategory("");
        setProduct(initialState);
    }

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
          
        <Box width="83%">
         
        <Flex
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'}  py={12} px={6} width={"600px"}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Add Products ✌️</Heading>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
        >    
        <Stack spacing={4}>
        <form onSubmit={handleSubmit}>
          <FormControl id="image">
            <FormLabel>Image</FormLabel>
            <Input 
            type="text"
            name='Image'
            value={product.Image}
            onChange={handleChange}
             />
          </FormControl>
          <FormControl id="title">
            <FormLabel>Title</FormLabel>
            <Input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
             />
          </FormControl>
          <FormControl id="price">
            <FormLabel>Price</FormLabel>
            <Input 
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            />
          </FormControl>
          <FormControl id="discount">
            <FormLabel>Discount</FormLabel>
            <Input 
            type="number" 
            name="discount"
            value={product.discount}
            onChange={handleChange}
            />
          </FormControl>
          <FormControl id="color">
            <FormLabel>Color</FormLabel>
            <Input 
            type="text" 
            name="color"
            value={product.color}
            onChange={handleChange}
            />
          </FormControl>
          <FormControl id="brand">
            <FormLabel>Brand</FormLabel>
            <Input 
            type="text" 
            name="brand"
            value={product.brand}
            onChange={handleChange}
            />
          </FormControl>
          <FormLabel>Gender</FormLabel>
          <Select name='gender' value={category} onChange={handleCategory}>
            <option value="">Select Category</option>
            <option value="makeup">makeup</option>
            <option value="skin">skin</option>
            <option value="hair">hair</option>
          </Select>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              type="submit"
              >
              Add Product
            </Button>
          </form>
        </Stack>
      </Box>
    </Stack>
  </Flex>

        </Box>  
   
      </Box>
      </>
     )

}
/////////////////////////////////////////////////////////////


const SidebarContent = ({ onClose, ...rest }) => {
    return (
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
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
export default AddProduct
//   {
//     "id":3,
//     "Image": "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/9/994f68922998_S1_8901030863127.jpg",
//     "Keywords": "",
//     "cssqlopj4_URL": "https://www.nykaa.com/lakme-complexion-care-face-cream-37836/p/37835?productId=37835&pps=3",
//     "title": "Lakme 9 To 5 Complexion Care Face CC Cream SPF 30 PA++ - Beige",
//     "originalprice": 360,
//     "price": 324,
//     "discount": 10,
//     "ratingcount":  33819,
//     "color":"pink",
//     "brand":"lakme",
//     "img1":"https://images-static.nykaa.com/media/catalog/product/9/9/994f68922998_S2_8901030863127.jpg",
//     "img2":"https://images-static.nykaa.com/media/catalog/product/9/9/994f68922998_S3_8901030863127.jpg",
//     "img3":"https://images-static.nykaa.com/media/catalog/product/9/9/994f68922998_S4_8901030863127.jpg",
//     "img4":"https://images-static.nykaa.com/media/catalog/product/9/9/994f68922998_S5_8901030863127.jpg",
//     "star":3.0,
//     "starcount":"★★★☆☆",
//     "shades": "6 Shades"
// }