import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import {RiDeleteBin5Line} from "react-icons/ri"  
import { useDispatch, useSelector } from 'react-redux';
import { Box, Image, Text ,Button,HStack, SimpleGrid,useToast,useDisclosure} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import {SlHandbag} from "react-icons/sl";
import {HiArrowRight} from 'react-icons/hi';
import { addCartData, removeCartData } from '../Redux/action';
export const DrawerCart = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const cartData = useSelector(store=> {
        return  (store.productReducer.cartData)
     });
     const totalPrice = useSelector(store=> {
        return  (store.productReducer.totalPrice)
     });
    // function DrawerExample() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()

        // const handleIncrement= (product) => {
   
        //     const productExist = cartData.find((el) => el.id === product.id);
        //     if (productExist.quantity >= 1) {
        //       if(productExist.quantity >= 4){
        //         toast({
        //           title: 'Now,You have reached the maximum limit.',
        //           status: 'warning',
        //           duration: 6000,
        //           isClosable: true,
        //         })
        //       }
        //       dispatch(addCartData(cartData.map((el) =>el.id === product.id
        //             ? { ...productExist, quantity: productExist.quantity + 1 }
        //             : el
        //         )
        //       ));
        //     }
        //   };
      
        // const handleDecrement = (product) => {
        //   const productExist = cartData.find((el) => el.id === product.id);
        //   if (productExist.quantity === 1) {
        //     dispatch(addCartData((cartData.filter((el) => el.id !== product.id))))
              
        //   } else {
        //     dispatch(addCartData(
        //       cartData.map((el) =>
        //         el.id === product.id
        //           ? { ...productExist, quantity: productExist.quantity - 1 }
        //           : el
        //       )
        //      ));
        //   }
        // };
        const handleDelete=(el)=>{
            dispatch(removeCartData(el)) 
         }


        return (
          <>
            <Button ref={btnRef} colorScheme='white' onClick={onOpen}>
              <SlHandbag color='black' size='22px'/>
            </Button>
            <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader><Box display='flex' alignItems='center' justifyContent='left' gap='8px'> <Text>Bag</Text><Text color='gray' fontSize='small'> {cartData.length} items</Text></Box></DrawerHeader>
                
                <DrawerBody padding='5px'>
                 <Box textAlign='center'>
                    {cartData.length <= 0 && <Box>
                    <Image src="https://asset.nykaafashion.com/static/assets/empty-cart.37b1b704.png" alt='empty-cart'></Image>
                     <Text as='b' fontSize='2xl'>Your Shopping Bag is Empty</Text>
                     <Text fontSize='lg'>This feels too light! Go on, add all your favourites</Text>
                     <Link  to='/makeup'><Button colorScheme='pink'>Start Shopping</Button></Link>
                     </Box>
                    }
                    </Box>

              <Box  border='1px solid rgba(82, 79, 79, 0.249)' borderRadius='6px' p='2px'>  {cartData.map((el) => (
          
          
          <SimpleGrid key={el.id} mt='10px' className="cart-shown">
              <HStack className="selected_item"align='center' display='flex'>
              <Image w='90px' h='90px' src={el.Image}></Image>
              <Text >{el.title}</Text>
              <button onClick={()=>handleDelete(el)}><RiDeleteBin5Line/></button>
              </HStack>
            <Box display='flex' justifyContent='space-between' alignItems='center'> 
                {/* <HStack>
                  <button colorScheme="red" variant="outline" onClick={()=>handleDecrement(el)}>-</button>
                  <Text> {"  "+el.quantity+"  "}</Text>
                  <button colorScheme="green" variant="outline" disabled={el.quantity >= 5}  onClick={()=>handleIncrement(el)}>+</button>
                </HStack> */}
                <Box></Box>
                <Box><Text as='b' align='right'>₹{(el.price)}</Text></Box>
            </Box><hr/>
           
           </SimpleGrid>

        ))} </Box>
        {cartData.length>0 && 
        <Box className='cartPrice'>
            <Box border='1px solid rgba(82, 79, 79, 0.249)' borderRadius='6px' mt='10px' p='2px'>
            <Box><Text as='b' fontSize='xl'>Price Details</Text></Box>
            <Box  display='flex' justifyContent='space-between' alignItems='center'><Text>Bag MRP ({cartData.length} items)</Text><Text>₹{totalPrice}</Text></Box>
            {/* <Box  display='flex' justifyContent='space-between' alignItems='center'><Text>Shipping</Text><Text>₹50</Text></Box> */}
            <Box as='b' display='flex' justifyContent='space-between' alignItems='center'><Text fontSize='xl'> Grand Total:</Text><Text>₹{totalPrice}</Text></Box>
            </Box>
        </Box>}
            </DrawerBody>
            <DrawerFooter>
                {cartData.length >0 &&  <Link  to='/address'><Button colorScheme='pink' w='150px'>Proceed <HiArrowRight/></Button></Link>}
           
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
          </>
        )
      }
