import { Box, Flex, Heading, Image } from "@chakra-ui/react";

import TwoCard from "./Components/TwoCardPerRow";
import ONeCard from "./Components/OneCardPerRow";
import ThreeCard from "./Components/ThreeCardPerRow";
import FiveCard from "./Components/FiveCardPerRow";
import MainHeading from "./Components/MainHeading";
import CardItem from "./Components/CardItem";

import CarouselSlider from "./Carousel";

import { after_Carousel_images } from "./Data/afterCarouselImages";
import { TopBrands_Images } from "./Data/TopBrandsImages";
import { afterTopBrands } from "./Data/afterTopBrands";
import { OnlyAtNykaa } from "./Data/OnlyAtNykaa";
import TransParentCard from "./Components/TransparentCard";
import { afterOnlyatNaykaa } from "./Data/afterOnlyatNaykaa.js";
import { FeaturedBrands, afterFeatureBrand } from "./Data/FeaturedBrand";
import { BeautyAdvice } from "./Data/BeautyAdvice";
import { CategoriesInFocus } from "./Data/CategoriesInFocus";

const HomePage = () => {
  return (
    <>
      <Box border={"0px solid red"} marginTop="5">
        <MainHeading >The SkinCare Store</MainHeading>
        <Box mt={"15px"}>
          <CarouselSlider />
        </Box>
      </Box>

      <TwoCard>
        {after_Carousel_images.map((image, index) => (
          <Box key={index}>
            <Image src={image} alt={image} width="" height="" mt={"15px"} />
          </Box>
        ))}
      </TwoCard>

      <ONeCard>
        <Image
          src="https://images-static.nykaa.com/uploads/4f15f1b3-3fe5-476b-af54-a38a91808b74.jpg"
          marginTop={"20px"}
          alt={""}
          width=""
          height=""
        />
      </ONeCard>

      <MainHeading>Top Brands</MainHeading>

      <ThreeCard border="1px solid red">
        {TopBrands_Images.map(({ src, pink, grey }, i) => (
          <CardItem
            key={i}
            src={src}
            h1Size={"20px"}
            h1Weight={"600"}
            h1color={"#E80071"}
            h1={pink}
            h3Size={"16px"}
            h3Weight={"500"}
            h3color={"#5C6873"}
            h3={grey}
            paddingY={"20px"}
          />
        ))}
      </ThreeCard>

      <Box marginTop={"50px"}>
        <TwoCard>
          {afterTopBrands.map((image, i) => (
            <Box key={i}>
              <Image src={image} alt={image} width="" height="" />
            </Box>
          ))}
        </TwoCard>
      </Box>

      <MainHeading>Only At Nykaa</MainHeading>

      <ThreeCard>
        {OnlyAtNykaa.map(({ src, h1, h3 }, i) => (
          <CardItem
            key={i}
            src={src}
            h1Size={"20px"}
            h1Weight={"600"}
            h1color={"black"}
            h1={h1}
            h3Size={"16px"}
            h3Weight={"500"}
            h3color={"#5C6873"}
            h3={h3}
            paddingY={"20px"}
          />
        ))}
      </ThreeCard>

      <MainHeading>Discover Our Favourites</MainHeading>

      <ONeCard>
        <Image
          src="https://images-static.nykaa.com/uploads/4f200b59-3e37-435b-8531-7a3a5765d48d.jpeg"
          margin="auto"
          alt={""}
          width=""
          height=""
        />
      </ONeCard>

      <FiveCard>
        {afterOnlyatNaykaa.map(({ src, text }, i) => (
          <TransParentCard src={src} text={text} key={i} />
        ))}
      </FiveCard>

      <MainHeading>Featured Brands</MainHeading>
      <FiveCard>
        {FeaturedBrands.map(({ src, text, disc }, i) => (
          <CardItem
            key={i}
            src={src}
            h1Size={"20px"}
            h1Weight={"600"}
            h1color={"black"}
            h1={text}
            h3Size={"16px"}
            h3Weight={"500"}
            h3color={"#5C6873"}
            h3={disc}
            paddingY={"20px"}
          />
        ))}
      </FiveCard>

      <ThreeCard>
        {afterFeatureBrand.map(({ src, text, disc }, i) => (
          <CardItem
            key={i}
            src={src}
            h1Size={"20px"}
            h1Weight={"600"}
            h1color={"black"}
            h1={text}
            h3Size={"16px"}
            h3Weight={"500"}
            h3color={"#5C6873"}
            h3={disc}
            paddingY={"20px"}
          />
        ))}
      </ThreeCard>
      <MainHeading>Categories In Focus</MainHeading>

      <TwoCard>
        {CategoriesInFocus.map(({ src, id }) => (
          <Box key={id}>
            <Image src={src} alt={src} width="" height="" />
          </Box>
        ))}
      </TwoCard>
      <Flex marginLeft="20" marginTop={"5"} direction="column">
        <Heading as="h3" fontSize={"24px"} fontFamily="Inter">
          Beauty Advice
        </Heading>
        <Heading as="h3" fontSize={"18px"} fontFamily="Inter" color="grey">
          Discover Latest Tips & Tricks
        </Heading>
      </Flex>
      <Box marginTop={"3rem"} marginBottom="2rem">
        <TwoCard>
          {BeautyAdvice.map(({ src, text, disc }, i) => (
            <CardItem
              key={i}
              h1Size={"16px"}
              h1Weight={"600"}
              h1color="black"
              h1={text}
              h3={disc}
              h3Size={"16px"}
              h3Weight="500"
              h3color={"#E80071"}
              src={src}
              paddingY={"20px"}
            />
          ))}
        </TwoCard>
      </Box>
    </>
  );
};
export default HomePage;
