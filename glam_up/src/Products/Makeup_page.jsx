import React from 'react'
import {Box,Text,SimpleGrid,Image,Container,Button,Flex,VStack,Heading, useToast} from '@chakra-ui/react';
import {useState,useEffect} from 'react';
import { GrNext, GrPrevious} from 'react-icons/gr';
import './ProductPage.css';
import {BsHeart} from "react-icons/bs"
//import { useSelector } from 'react-redux'
//import { useLocation, useSearchParams } from 'react-router-dom';
import {GrDown} from 'react-icons/gr'
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

 const Loading=()=>{
        return(
          <Container>
            <Image w='200px' h='200px' ml='180px'  src='https://reiwa.com.au/ux/reiwa/ux/images/pd/spinner.gif'/>
          </Container>
           )
       }
const Makeup_page = () => {

  const toast = useToast();
 const [product,setDatas]=useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [page, setPage] = useState(1);
 const [originalDatas,setOriginalDatas] = useState([]);
 const location = useLocation();
// const dispatch = useDispatch();
 // const products = useSelector(store=> {
 //    return  (store.productReducer.product)
 // });
 //console.log(products)
// const [searchParams] = useSearchParams();
// const location = useLocation();
 // console.log(location)
//     const obj ={
//     params:{
//         brand:searchParams.getAll('brand'),
//         color:searchParams.getAll('color'),
//         _sort : searchParams.get("order" || "review") && "price" || "ratingcount",
//         _order : searchParams.get('order' || "review")
//            }
//   }
const getData=()=>{
 setIsLoading(true)
   axios.get(`https://api-nykaa-database.vercel.app/makeup?_page=${page}&_limit=20`)
   .then((res)=>{
       setDatas(res.data);
       setOriginalDatas(res.data)
       setIsLoading(false);
      // console.log(res.data);
   })
      .catch((error)=>{
       setIsLoading(false)
       console.log(error)
   })
 }
// handle discount function  
const handleRated = ()=>{
 const  newData = [...product].sort((a, b) => {
   return b.ratingcount - a.ratingcount
     });
     setDatas(newData);
    };   
// handle sort name
const handleSortName = ()=>{
  const  newData = [...product].sort((a, b) => {
  const nameA = b.title.toUpperCase(); 
  const nameB = a.title.toUpperCase();
  if (nameA > nameB) {
   return -1;
  }
  if (nameA < nameB) {
   return 1;
  }
     });
     setDatas(newData);
    
    };
// handle price sort
const lowtohigh = () => {

const  newData = [...product].sort((a, b) => {
return b.price - a.price
 });

setDatas(newData); 
};

const hightolow = ()=>{
 
const  newData = [...product].sort((a, b) => {
return a.price - b.price
  });
 
  setDatas(newData);
 };   
// handle discount
const lowDiscount = ()=>{
 const  newData = [...product].sort((a, b) => {
   return b.discount - a.discount
     });
     setDatas(newData);
}        
const  handleFilterMac= (brands)=> {
  console.log("product",product);
// filter brand   
   var filterBrand = originalDatas.filter(function (item) {
   return item.brand === brands;
 });
 console.log(product);
 setDatas(filterBrand);
}
// filter color
const  handleFilterColor= (color)=> {
var filterColor = originalDatas.filter(function (el) {
  return el.color === color;
});
setDatas(filterColor);
}
// filter price ranges
const  handleFilterPrice= (a,b)=> {
 var filterPrice = originalDatas.filter(function (el) {
 return el.price >= +a && el.price < +b;
});
setDatas(filterPrice);
}
// filter discount percentage
const  handleFilterDiscount= (a)=> {
var filterPrice = originalDatas.filter(function (el) {
 return el.discount >= +a ;
});
setDatas(filterPrice);
}  
// filter by star 
const  handleFilterStar = (ele)=> {
  var filterStars = originalDatas.filter(function (el) {
   return el.star >= +ele ;
  });
  setDatas(filterStars);
  }  

  //========= Add To Cart ================ //
const addToBag=()=>{
  toast({
    title: `Product added to bag`,
    status: 'success',
    duration: 4000,
    isClosable: true,
  })


}  
useEffect(()=>{
 getData(page);
},[page])


  return( isLoading ? ( <Loading/>) : ( 

    <Box bg='rgb(243, 243, 243)' p='10px'>
    <Box display='grid' justifyContent='center' alignItems='center' w='100%' h='100px'>
    <Text as='b' fontSize='2xl'>Face Primer Collection</Text>
    <Text as='b' fontSize='2xl'>All Products</Text>
    </Box>
    <Flex gap='15px' margin='auto' w='90%'>  
    <Box w='24%'> 
    <Box>
      <Box className='a-sidebar' h='max-content' >
          <Box className="alldropdown">
                 <details className="sidebar-dropdown" >
                          <summary><Box className='sidebar-title' borderRadius='10px'><Text fontSize='lg' fontWeight='500'>Sort By Popularity</Text> <GrDown/></Box> </summary>
                          <ul>
                              <li><Box className='sidebar-checkbox'><Text>Discount</Text><Box onClick={lowDiscount}><input className='input-checkbox'  id='pink' type='radio'  /></Box></Box></li>
                              <li><Box className='sidebar-checkbox'><Text>Name</Text><Box onClick={handleSortName}><input className='input-checkbox'  id='pink' type='radio'  /></Box></Box></li>
                              <li><Box className='sidebar-checkbox' onChange={handleRated}><label>Customer Top Rated</label><input className='input-checkbox'  id='pink' type='radio'  /></Box></li>
                              <li><Box className='sidebar-checkbox' onClick={lowtohigh}><label>Price: High To Low</label><input  id='pink' className='input-checkbox' type='radio' name='order' /></Box></li>
                              <li><Box className='sidebar-checkbox' onClick={hightolow}><label>Price: Low To High</label><input  id='pink' className='input-checkbox' type='radio' name='order' /></Box></li>
                          </ul>
                      </details> 
                      <hr />
                      <details className="sidebar-dropdown">
                          <summary><Box className='sidebar-title'><Text fontSize='lg' fontWeight='500'>Brand</Text> <GrDown/></Box> </summary>
                            <ul>
                              <li><Box className='sidebar-checkbox'  onClick={()=>handleFilterMac("mac")}  ><label>M.A.C </label><input id='pink' name="brand" type='checkbox' value='mac'/></Box></li>
                              <li><Box className='sidebar-checkbox'  onClick={()=>handleFilterMac("lakme")} ><label>Lakme</label><input  id='pink' name="brand" className='input-checkbox' type='checkbox' value='lakme' /></Box></li>
                              <li><Box className='sidebar-checkbox'  onClick={()=>handleFilterMac("lba")} ><label>Lba</label><input  id='pink' name="brand" className='input-checkbox' type='checkbox' value='lba' /></Box></li>
                              <li><Box className='sidebar-checkbox'  onClick={()=>handleFilterMac("milani")} > <label>Milani</label><input id='pink' name="brand" className='input-checkbox' type='checkbox' value='milani'/></Box></li>
                          </ul>
                      </details>
                      <hr />
                      <details className="sidebar-dropdown">
                      <summary><Box className='sidebar-title'><Text fontSize='lg' fontWeight='500'>Color</Text> <GrDown/></Box> </summary>
                           <ul>
                              <li><Box className='sidebar-checkbox'  onClick={()=>handleFilterColor("brown")}  ><label>Brown </label><input id='pink' name="color" type='checkbox' /></Box></li>
                              <li><Box className='sidebar-checkbox'  onClick={()=>handleFilterColor("white")} ><label>White</label><input  id='pink' name="color" className='input-checkbox' type='checkbox' /></Box></li>
                              <li><Box className='sidebar-checkbox' onClick={()=>handleFilterColor("black")} ><label>Black</label><input  id='pink' name="color" className='input-checkbox' type='checkbox' /></Box></li>
                              <li><Box className='sidebar-checkbox' onClick={()=>handleFilterColor("pink")} > <label>Pink</label><input id='pink' name="color" className='input-checkbox' type='checkbox' /></Box></li>
                          </ul>
                  </details>  <hr />
                  <details className="sidebar-dropdown">
                          <summary><Box className='sidebar-title'><Text fontSize='lg' fontWeight='500'>Price</Text> <GrDown/></Box> </summary>
                           <ul>
                              <li><Box className='sidebar-checkbox'  onClick={()=>handleFilterPrice("0","499")}  ><label>Rs. 0 - Rs. 499 </label><input id='pink' name="price" type='checkbox' /></Box></li>
                              <li><Box className='sidebar-checkbox'  onClick={()=>handleFilterPrice("500","999")} ><label>Rs. 500 - Rs. 999</label><input  id='pink' name="price" className='input-checkbox' type='checkbox' /></Box></li>
                              <li><Box className='sidebar-checkbox' onClick={()=>handleFilterPrice("999","1999")} ><label>Rs. 1000 - Rs. 1999</label><input  id='pink' name="price" className='input-checkbox' type='checkbox' /></Box></li>
                              <li><Box className='sidebar-checkbox' onClick={()=>handleFilterPrice("1999","3999")} > <label>Rs. 2000 - Rs. 3999</label><input id='pink' name="price" className='input-checkbox' type='checkbox' /></Box></li>
                              <li><Box className='sidebar-checkbox' onClick={()=>handleFilterPrice("4000","10000")} > <label>Rs. 4000 & Above</label><input id='pink' name="price" className='input-checkbox' type='checkbox' /></Box></li>
                           </ul>
                  </details >
                  <hr />
                  <details className="sidebar-dropdown">
                          <summary><Box className='sidebar-title'><Text fontSize='lg' fontWeight='500'>Discount</Text> <GrDown/></Box> </summary>
                            <ul>
                              <li><Box className='sidebar-checkbox'  onClick={()=> handleFilterDiscount("50")}  ><label>50% and above</label><input id='pink' name="discount" type='checkbox' /></Box></li>
                              <li><Box className='sidebar-checkbox'  onClick={()=> handleFilterDiscount("40")} ><label>40% and above</label><input  id='pink' name="discount" className='input-checkbox' type='checkbox' /></Box></li>
                              <li><Box className='sidebar-checkbox' onClick={()=> handleFilterDiscount("30")} ><label>30% and above</label><input  id='pink' name="discount" className='input-checkbox' type='checkbox' /></Box></li>
                              <li><Box className='sidebar-checkbox' onClick={()=> handleFilterDiscount("20")} > <label>20% and above</label><input id='pink' name="discount" className='input-checkbox' type='checkbox' /></Box></li>
                              <li><Box className='sidebar-checkbox' onClick={()=> handleFilterDiscount("10")} > <label>10% and above</label><input id='pink' name="discount" className='input-checkbox' type='checkbox' /></Box></li>
                            </ul>
                      </details>
                      <hr />
                  <details className="sidebar-dropdown">
                      <summary><Box className='sidebar-title'><Text fontSize='lg' fontWeight='500'>Avg Customer Rating </Text> <GrDown/></Box> </summary>
                            <ul>
                              <li><Box className='sidebar-checkbox'  onClick={()=> handleFilterStar("5")}  ><label>5 Star and above</label><input id='pink' name="star" type='checkbox' /></Box></li>
                              <li><Box className='sidebar-checkbox'  onClick={()=> handleFilterStar("4")} ><label>4 Star and above</label><input  id='pink' name="star" className='input-checkbox' type='checkbox' /></Box></li>
                              <li><Box className='sidebar-checkbox' onClick={()=> handleFilterStar("3")} ><label>3 Star and above</label><input  id='pink' name="star" className='input-checkbox' type='checkbox' /></Box></li>
                              <li><Box className='sidebar-checkbox' onClick={()=> handleFilterStar("2")} > <label>2 Star and above</label><input id='pink' name="star" className='input-checkbox' type='checkbox' /></Box></li>
                        
                            </ul>
                  </details>
                  <hr />
                </Box>
          </Box>
      </Box>
        </Box>
              
   
<Box  w='80%'>
   <VStack>
<Box>

   <SimpleGrid columns={{base:1,sm:2,md:2,lg:3}} padding= '0 0.65rem'>
         {product.length>0 && product.map((el) => (
      
        <Box 
          borderRadius='8px'
          className='products'
         key={el.id}
         style={{
        
          marginBottom: '1.5rem',
          position: 'relative',
          height: '440px',
          minWidth: '270px',
          width: '33.33%',
          overflow: 'hidden',
          background:'white',
          display: "flex",
          flexDirection: "column",
             }}
        > 
           <Link  to= {`${location.pathname}/${el.id}`} key={el.id}>
       <Image src={el.Image}></Image>
      <VStack>
          <Heading
        as={"p"}
        fontSize="15px"
        h='50px'
        overflow='hidden'
        fontWeight='500'
        letterSpacing="-0.1px"
        >
        {el.title}
        </Heading>
         <Box h='20px' display='flex' gap='6px' alignItems='center' justifyContent='center'>MRP: 
             <Text  as='del' fontSize='md' color='gray'>₹{el.originalprice} </Text>
             <Text  fontWeight='600' fontSize='md'>₹{el.price}</Text>
             <Text  fontSize='md' color='green'>{el.discount}% off </Text>
          </Box>
              <Text fontSize='md' color='gray'>{el.starcount} ({el.ratingcount} )</Text>
      </VStack> 
   </Link>
          <Flex  mt='15px'  gap="2" justifyContent="center" display='none' className='likeAndCartButton'>
        <Button  bg="white" w='20%'>
          <BsHeart color='#FC2779'/>
        </Button>
        <Button
          h='48px'
          w='80%'
          color="white"
          bg="#FC2779"
          borderRadius='0px'
          p='10px'
          onClick={addToBag}
          >
          Add to bag
          </Button>
          </Flex>
          </Box>
         
          ))}
  </SimpleGrid>
  </Box>
   </VStack>
  </Box> 
  </Flex>
  <Box mb='10px' padding='30px'>
  <Button disabled={page === 1} boxShadow='md' className='button_pagination' colorScheme='white' borderRadius='50%'  onClick={() => setPage(page - 1)}>
     <GrPrevious />
    </Button>
    <Button boxShadow='md' className='pageNumber' m='30px' colorScheme='rgb(255, 0, 157)' borderRadius='50%'>{page}</Button>
    <Button boxShadow='md' className='button_pagination' colorScheme='white'   borderRadius='50%' disabled={page === 3}  onClick={() => setPage(page + 1)}>
     <GrNext color='rgb(255, 0, 157)'/>
    </Button>
  </Box>
  
</Box>
)
  )
}

export default Makeup_page;