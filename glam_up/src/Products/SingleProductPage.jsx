// import { StarIcon } from '@chakra-ui/icons';
import { Box,Text, HStack,VStack,Divider,Center,Tooltip,Collapse,Button,useDisclosure,Image,UnorderedList,ListItem, useToast } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useLocation, useParams } from 'react-router-dom';
import {  addCartData, getProduct} from '../Redux/action';
import {FaProductHunt} from "react-icons/fa"
import { AiOutlineRollback} from "react-icons/ai"
import {CiLocationOn} from "react-icons/ci";
import './ProductPage.css';
// import ReactImageMagnify from 'react-image-magnify';
import {BiChevronDown} from 'react-icons/bi'

const SingleProductPage = () => {
    const toast = useToast();
    const param=useParams();
    const location = useLocation();
  //  console.log(location.pathname);
    const dispatch = useDispatch();
        const data = useSelector(store=> {
           return  (store.productReducer.product)
        });
   // console.log("data",data)
    const addedData = useSelector(store =>{
      return (store.productReducer.cartData)
    })   
    let [currimage,setcurrImage]=useState(data.Image);
   
    const handleAddToCart=()=>{
        
           dispatch(addCartData(data))
           toast({
            title: `Product added to bag`,
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
    }
    
    function CollapseEx() {
        const { isOpen, onToggle } = useDisclosure()
      
        return (
          <>
            <Button onClick={onToggle} className='readMore'>Read More <BiChevronDown color='#fc2779' size='30px'/></Button>
            <Collapse in={isOpen} animateOpacity>
              <Box
                p='40px'
                color='white'
                mt='4'
                
                rounded='md'
                shadow='md'
              >
                <Image src={data.img1} alt='img1'></Image>
                <Box>
                        <Text fontSize='xl' color='black' m='15px 0px'>
                            Prep your face for <Text as='b' color='#fc2779'>flawless makeup </Text> application with the Kay Beauty Color Correcting 
                            Primer range. These <Text as='b' color='#fc2779'>100% Silicone Free primers</Text>  don't just help you achieve that
                            seamless base, they also conceal specific skin concerns, like redness, dullness, 
                            unwanted pigmentation or dark circles.You can take your pick from <Text as='b' color='#fc2779'>five different shades</Text>  
                            that work on all skin types, and blend in beautifully so you end up 
                            with clear skin before starting your makeup routine. Now that's what we <Text as='b' color='#fc2779'>call a win-win!</Text> 
                        </Text>
                </Box>          
                <Image src={data.img3} alt='img3'></Image>
                   <Box color='black'>
                    <Text fontSize='2xl' as='b'>Why Make It Yours?</Text>
                    <UnorderedList fontSize='xl' color='gray'>
                      <ListItem>100% Silicone Free</ListItem>
                      <ListItem>Color Correcting</ListItem>
                      <ListItem>Water Based Formula with high hydration</ListItem>
                      <ListItem>High Definition</ListItem>
                      <ListItem>ightweight formula</ListItem>
                      <ListItem>Infused with light-diffusing technology</ListItem>
                      <ListItem>Makes your makeup Transfer proof</ListItem>
                      <ListItem>Extends the life of your makeup</ListItem>
                    </UnorderedList>
                    </Box>
                     <Divider />  
                    <Box color='gray' fontSize='lg' pt='20px'>
                        <Text>Explore the entire range of <Text as='ins' color='#fc2779'>Face Primer</Text> available on Nykaa. Shop more
                             Kay Beauty products here.You can browse through the complete world of 
                             <Text as='ins' color='#fc2779'>Kay Beauty Face Primer .</Text></Text>
                        <Text mb='20px'>Alternatively, you can also find many more products from the<Text as='ins' color='#fc2779'> Kay Beauty Colour Correcting Primer range.</Text>
                             </Text>
                         <Text as='b'>Expiry Date: 15 April 2024</Text>
                         <Text mb='20px'><Text as='b'>Country of Origin:</Text>India</Text>
                         <Text><Text as='b'>Manufacturer: </Text>Nykaa - KK Beauty Pvt Ltd</Text>
                          <Text><Text as='b'>Address: </Text>104 Vasan Udyog Bhavan Sun Mill Compound Senapati Bapat Marg, 
                            Lower Parel, Mumbai City Maharashtra - 400013</Text>

                        </Box>      
              </Box>
            </Collapse>
          </>
        )
      }

   useEffect(()=>{
    dispatch(getProduct(location.pathname))
   },[])
  // console.log("data",data)
  return ( 
    <Box p='20px 0px' backgroundColor='rgb(243,243,243)' >
        <Box height={'100%'} width='90%' h='450px'
         backgroundColor='white'
         boxShadow='base'
         marginTop='50px' margin='auto'  
         >
        <Box width={'100%'} display='flex' h='100%'>
             <Box w='43%' h='95%' borderRight='2px solid rgb(243,243,243)' padding={'5px'} >    
                <Box display='flex' gap='20px' >
                     <VStack>
                        <Box className='imagehover' onMouseOver={()=>setcurrImage(data.img1)} ><img src={data.img1} alt="img1"  width='50px'/></Box>
                        <Box className='imagehover' onMouseOver={()=>setcurrImage(data.img2)} ><img src={data.img2} alt="img2"  width='50px'/></Box>
                        <Box className='imagehover' onMouseOver={()=>setcurrImage(data.img3)} ><img src={data.img3} alt="img3"  width='50px'/></Box>
                        <Box className='imagehover' onMouseOver={()=>setcurrImage(data.img4)} ><img src={data.img4} alt="img4"  width='50px'/></Box>
                     </VStack>
                     <Box  padding='10px'  className='hoverimage'>

                              {/* <Image src={currimage} h='90%' alt='.'></Image> */}
                              <img src={currimage} alt="hello" width={'80%'} />
                             {/* <ReactImageMagnify {...{
                            smallImage: {
                                    alt: 'image',
                                    isFluidWidth: true,
                                    src: currimage
                                     },
                           largeImage: {
                                src: currimage,
                                width: 1200,
                                height: 1800,
                                    }
                               }} /> */}
                     </Box>
                </Box>
                 
             </Box>
             <Center height='100%'>
                   <Divider orientation='vertical' />
             </Center>
            <Box width={'60%'} padding='10px' textAlign='left'>
               
               <Text mb='30px' textAlign='left' fontWeight={500} fontSize={20}>{data.title}</Text>
               <Box className='buttonAndAll'>
                <HStack><Text padding='3px' fontSize='lg'>{data.starcount}</Text><Text padding='3px'> {data.star}/5</Text><Text> {data.ratingcount} ratings </Text></HStack>
                <HStack m='6px 0px' fontSize='20px'><Text color='gray'>MRP:</Text> <Text as='s' color='gray'>₹{data.originalprice}</Text><Text as='b' fontWeight='600'>₹{data.price}</Text><Text fontSize='lg' color='green'> {data.discount}% off</Text></HStack>
                 <Text color='gray' fontSize='18px' >inclusive of all taxes</Text>
                
                    <HStack mt='50px' width='100%' spacing={10} >
                    <Box display='grid' width={'40%'}><button  onClick={handleAddToCart}  className='addToBag'> Add To Bag</button></Box>
                    <Center height='130px'></Center><Box><HStack><CiLocationOn size='25px' color='gray'/><Text fontSize='18px' color='gray' fontWeight='500'>Delivery Options</Text></HStack>
                    <Box display='flex'> <input className='enterPincode' placeholder='Enter Pincode'  /><button className='check'>Check</button>
                     </Box></Box>
                    </HStack>
                   
                  </Box>
                  <Box  display='flex' justifyContent='space-between' alignItems='center' p='15px'  bg='rgba(105, 102, 102, 0.111)'>
                  <Tooltip p='10px' borderRadius='6px' boxShadow='dark-lg' bg='white' color='black' hasArrow arrowSize={15} placement='top' label="100% Authentic, directly purchased from Maybelline New York." aria-label='A tooltip'>
                         <HStack> <FaProductHunt/><Text>100% Genuine Products </Text> </HStack>   
                  </Tooltip>
                  <Tooltip p='10px' borderRadius='6px' boxShadow='dark-lg' bg='white' color='black' hasArrow arrowSize={15}  placement='top' label="Returns/replacements are accepted for unused products only in case of defects, damages during delivery, missing, or wrong products delivered. Return requests can be raised on the 'My Order' section within 15 days of delivery." aria-label='A tooltip'>
                        <HStack><AiOutlineRollback/><Text>Easy Return Policy</Text> </HStack>    
                  </Tooltip>
                    
                    <Box>Sold by :NYKAA E RETAIL PRIV...</Box>
                  </Box>
            </Box>
            </Box>  </Box>
            <Box margin='auto' textAlign='left' w='90%' p='20px 10px 0px 0px'><Text fontSize='2xl' as='b' > Product Description</Text></Box> 
            <Box display='flex' gap='20px' w='90%' margin='auto' textAlign='left'>
            
             <Box boxShadow='md' p='30px' w='70%'  bg='white' className='showImage' ><CollapseEx /></Box>
              <Box w='30%' ></Box>
         </Box>
       
    </Box>
  )
}
export default SingleProductPage;
