import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCartData, cartDataEmptySuccess } from "../Redux/action";

const OrderSuccessfull = () => {
  const navigate = useNavigate();

  return (
    <div>
      <VStack
        margin="auto"
        style={{
          // border: "3px solid #FC2779",
          width: "40%",
          margin: " auto",
          marginTop: "0PX",
          marginBottom: "100px",
          boxShadow:
            "box-shadow: rgb(206, 10, 85) 0px 10px 36px 0px, rgba(225, 18, 97, 0.06) 0px 0px 0px 1px;",
        }}
      >
        <div style={{border:"0px solid black" , height:"380px"}}>
          <img
            src="https://www.pinkwigscloset.com/images/success-tick.gif"
            alt="gif-img"
          />
        </div>

        <Button
          width="50%"
          style={{ marginTop: "0px", marginBottom: "10px" }}
          onClick={() => navigate("/")}
          fontSize="x"
          padding={5}
          colorScheme="pink"
        >
          Order placed successfully
        </Button>

        <Button
          width="30%"
          style={{ marginTop: "0px", marginBottom: "10px" }}
          onClick={() => navigate("/")}
          fontSize="x"
          padding={1}
          colorScheme="pink"
        >
          Explore more
        </Button>
      </VStack>
    </div>
  );
};

export default OrderSuccessfull;
