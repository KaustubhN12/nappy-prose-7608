import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, color, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import {ArrowBackIcon, ArrowForwardIcon, ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'

const sliderData1 = [
  {image:"https://images-static.nykaa.com/uploads/25a842ec-b66a-46f3-8c67-dd4e5178d5be.jpg"},
  {image:"https://images-static.nykaa.com/uploads/79c1face-6380-476d-9cef-22bfbc4023cb.gif"},
  {image:"https://images-static.nykaa.com/uploads/33c4212d-241b-41de-a8d2-c7b8d7d9cc13.jpg"},
  {image:"https://images-static.nykaa.com/uploads/8e38f956-76f6-4a96-a250-b69573e66696.jpg"},
  {image:"https://images-static.nykaa.com/uploads/9fa1e381-68e0-40ba-b1d3-7d63928dec0c.jpg"},
  {image:"https://images-static.nykaa.com/uploads/d2052bfb-fc68-46ae-a16e-eb0645f19c89.png"},
  {image:"https://images-static.nykaa.com/uploads/8523b59b-1695-4a5d-bbc5-2f918bac1b05.jpg"}
];

const TopBrands = [
  {image:"https://images-static.nykaa.com/uploads/9f0ffc11-6c0c-42fa-80a8-01af1c679f54.jpg",title:"Up To 35% Off",decription:"New Formula for 24HR Shine!"},
  {image:"https://images-static.nykaa.com/uploads/1476dbd5-7861-4e31-9fe9-aa27a6d60e14.jpg",title:"Up To 30% Off",decription:"Ace your base like never before!"},
  {image:"https://images-static.nykaa.com/uploads/f2cf761b-b8a7-4168-b2d4-deebd99d6001.jpg",title:"Flat 10% off on ₹1299+",decription:"Free Shampoo/Mask on ₹1599+"},
  {image:"https://images-static.nykaa.com/uploads/af479252-c00c-41f4-a7fb-3791227c7177.jpg",title:"Purifying properties of Bergamot",decription:"Free Biolage mini serum on 699+"},
  {image:"https://images-static.nykaa.com/uploads/58828fba-90e3-470d-8da6-990c01fb3846.jpg",title:"Oils that grow more powerful with time",decription:"For Visibly Stronger Hair!"},
  {image:"https://images-static.nykaa.com/uploads/e7316117-629b-4774-880f-98701238dd93.jpg",title:"Flat 35% Off",decription:"Hair Oils & Masks"},
  {image:"https://images-static.nykaa.com/uploads/91c524dc-b0b8-467b-883e-b1d5fbed1e23.gif",title:"Up To 30% Off",decription:"Ace your base like never before!"},
  {image:"https://images-static.nykaa.com/uploads/61c7e482-8864-4bde-a7a4-1f0d66c808d2.jpg",title:"Flat 10% Off",decription:"Skincare Kit Worth ₹5000 + Pouch On ₹4000"},
  {image:"https://images-static.nykaa.com/uploads/8440b977-a365-4a3e-a5f9-b4c8df2e936c.jpg",title:"Complete Your Party Look In Minutes",decription:"With Huda Beauty's Lovefest Collection"}
];

const OnlyAtNykaa = [
  {image:"https://images-static.nykaa.com/uploads/9f0ffc11-6c0c-42fa-80a8-01af1c679f54.jpg",title:"Up To 35% Off",decription:"New Formula for 24HR Shine!"},
  {image:"https://images-static.nykaa.com/uploads/1476dbd5-7861-4e31-9fe9-aa27a6d60e14.jpg",title:"Up To 30% Off",decription:"Ace your base like never before!"},
  {image:"https://images-static.nykaa.com/uploads/f2cf761b-b8a7-4168-b2d4-deebd99d6001.jpg",title:"Flat 10% off on ₹1299+",decription:"Free Shampoo/Mask on ₹1599+"},
  {image:"https://images-static.nykaa.com/uploads/af479252-c00c-41f4-a7fb-3791227c7177.jpg",title:"Purifying properties of Bergamot",decription:"Free Biolage mini serum on 699+"},
]

const Home = () => {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
   <Box position="absolute" marginTop="160px" marginLeft="40px" zIndex={1}>
    <ChevronLeftIcon boxSize={10} background="gray.50" borderRadius="50%" color="gray.500" _hover={{color:"pink.400",background:"gray.50"}} {...props} />
   </Box>
  );
  
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <Box position="absolute" marginTop="-160px" marginLeft="1310px">
      <ChevronRightIcon boxSize={10} background="gray.50" borderRadius="50%" color="gray.500" _hover={{color:"pink.400",background:"gray.50"}} {...props} />
    </Box>
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="parent-div">
    <div style={{marginLeft:"30px",marginBottom:"40px"}} className="slider">
    <Text marginLeft="10px" fontSize="2xl" fontWeight="600" align="left">Best In Beuty</Text>
    <Slider {...settings}>
      {sliderData1.map((el,index)=>{
        return<div key={index}>
          <Box padding="10px">
          <Image borderRadius="8px" src={el.image}/>
          </Box>       
        </div>
      })}
    </Slider>
    </div>
    <Box width="80%" margin="auto">
      <Image src="https://images-static.nykaa.com/uploads/d0bf2aa0-ce54-4154-93a4-a3060b3d2d48.gif"/>
    </Box>
    <div style={{margin:"auto",width:"95%",marginTop:"30px"}} className="grids">
    <Grid marginBottom="30px" gridTemplateColumns="repeat(2,1fr)" gap="20px">
      <GridItem>
        <Image src="https://images-static.nykaa.com/uploads/9882cc03-45ed-4d66-b4a7-4d34db83e720.png?tr=w-1200"/>
      </GridItem>
      <GridItem>
        <Image src="https://images-static.nykaa.com/uploads/97b7c067-686a-4fe9-b32e-924dcbcb1f61.jpg?tr=w-1200"/>
      </GridItem>
    </Grid>
    <Box marginBottom="40px">
      <Text marginLeft="10px" marginBottom="10px" fontSize="2xl" fontWeight="600" align="left">First Purchase App Offers</Text>
      <Image borderRadius="8px" src="https://images-static.nykaa.com/uploads/8aa5e37a-3b29-46da-b782-9ed02a4ec064.jpg"/>
    </Box>
    <Text marginLeft="30px" marginBottom="10px" fontSize="2xl" fontWeight="600" align="left">Top Brands</Text>
    <Grid gridTemplateColumns="repeat(3,1fr)" gap="20px" width="95%" margin="auto">
      {
       TopBrands.map((el,index)=>{
        return <GridItem key={index} border="1px solid #E2E8F0" borderRadius="8px">
            <Box>
              <Image borderRadius="8px 8px 0px 0px" src={el.image}/>
            </Box>
            <Box padding="12px">
              <Text fontSize="20px" align="left" color="#ED64A6" fontWeight="600" >{el.title}</Text>
              <Text align="left">{el.decription}</Text>
            </Box>
        </GridItem>
       })
      }
    </Grid>

    <Grid marginTop="40px" marginBottom="60px" gridTemplateColumns="repeat(2,1fr)" gap="20px">
      <GridItem>
        <Image src="https://images-static.nykaa.com/uploads/12ea9993-f29d-4732-aa66-2de20275f641.jpg"/>
      </GridItem>
      <GridItem>
        <Image src="https://images-static.nykaa.com/uploads/c7ae3973-167e-4ce1-b572-1364e1f5c2e2.jpg?tr=w-1200"/>
      </GridItem>
    </Grid>

    <Text marginLeft="8px" marginBottom="10px" fontSize="2xl" fontWeight="600" align="left">Only At Nykaa</Text>

    <Grid gridTemplateColumns="repeat(3,1fr)" gap="20px" >
      {
       OnlyAtNykaa.map((el,index)=>{
        return <GridItem key={index} border="1px solid #E2E8F0" borderRadius="8px">
            <Box>
              <Image borderRadius="8px 8px 0px 0px" src={el.image}/>
            </Box>
            <Box padding="12px">
              <Text fontSize="20px" align="left" color="#ED64A6" fontWeight="600" >{el.title}</Text>
              <Text align="left">{el.decription}</Text>
            </Box>
        </GridItem>
       })
      }
    </Grid>

    </div>

  </div>
  )
}

export default Home
