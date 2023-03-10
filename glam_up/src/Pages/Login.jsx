import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Center,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Auth } from "../firebase";
import { getlogin } from "../Redux/Authentication/Action";

export default function SimpleCard() {
  const [f_email, setF_email] = useState("");
  const [f_password, setF_password] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast()

  const handle = () => {
    signInWithEmailAndPassword(Auth,f_email,f_password).then(async(res)=>{
      dispatch(getlogin(res.user.displayName));
      toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='pink.400'>
            {`Welcome Back, ${res.user.displayName} 😍`}
          </Box>
        ),
      })
    }).catch((err)=>{
      console.log(err)
    })

    setF_email("");
    setF_password("");
    navigate("/")
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"#fc2779;"} w={"25rem"}>
            Track your deliveries, curate a wishlist, and unlock exclusive
            benefits
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={f_email}
                onChange={(e) => setF_email(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={f_password}
                onChange={(e) => setF_password(e.target.value)}
              />
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"#fc2779;"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handle}
                bg={"#fc2779;"}
                color={"white"}
                _hover={{
                  bg: "#fc2779;",
                }}
              >
                Sign in
              </Button>
              <Link href="./signup" color={"#fc2779;"}>
                  Sign Up
                </Link>
              <Stack>
              <Link href="./admin-login" color={"#fc2779;"}>
                 Login as Admin
                </Link>
                <Button
                  w={"full"}
                  maxW={"md"}
                  variant={"outline"}
                  leftIcon={<FcGoogle />}
                >
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
