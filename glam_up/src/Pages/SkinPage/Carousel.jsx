import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { Box, Image } from "@chakra-ui/react";

const images = [
  "https://images-static.nykaa.com/uploads/47bf4126-69fb-46f4-b64a-502295a2fd4e.jpg",
  "https://images-static.nykaa.com/uploads/f0dfb4fa-1537-4db5-977b-180197e1e26f.png",
  "https://images-static.nykaa.com/uploads/151d8b06-aebd-42d7-92e2-cb04c4b2bc21.jpg",
  "https://images-static.nykaa.com/uploads/95033d95-c22d-4f11-9f71-add67db61481.jpg?tr=w-2400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/a45e7ece-6896-451f-82a0-a28fda84e784.jpg",
  "https://images-static.nykaa.com/uploads/9ef6a6c2-9107-487c-8a4b-e886becea619.jpg?tr=w-2400,cm-pad_resize",
];


const CarouselSlider = () => {
  return (
    <Carousel autoPlay infiniteLoop stopOnHover showIndicators={false}>
      {images.map((image,i) => (
        <Box key={i}>
          <Image src={image} alt='' width="" heigth=""/>
        </Box>
      ))}
    </Carousel>
  );
};
export default CarouselSlider;
