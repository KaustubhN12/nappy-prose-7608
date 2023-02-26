import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { Auth } from "../firebase";
import { async } from "@firebase/util";
import { useDispatch } from "react-redux";
import { getlogin, getSignIn } from "../Redux/Authentication/Action";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [f_email, setF_email] = useState("");
  const [f_password, setF_password] = useState("");
  const [f_name, setF_name] = useState("");
  const [l_name, setL_name] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const handle = (e) => {
    // if (f_name === "" && l_name === "") {
    //   alert("Please enter Full Name !");
    // } else if (f_name === "") {
    //   alert("Please enter First Name !");
    // } else if (l_name === "") {
    //   alert("Please enter Last Name !");
    // } else if (f_email === "") {
    //   alert("Please enter Email !");
    // } else if (f_password === "") {
    //   alert("Please enter Password !");
    // }
    createUserWithEmailAndPassword(Auth,f_email,f_password).then(async(res)=>{
      const user = res.user
     await updateProfile(user,{
        displayName:f_name,
      });
     dispatch(getlogin(user.displayName));
      toast({
        title: `Welcome, ${f_name}`,
        description: "We've created your account for you.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }).catch((err)=>{
      console.log(err)
    })
    setF_email("");
    setF_name("");
    setF_password("");
    setL_name("");
    navigate("/");
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
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={f_name}
                    onChange={(e) => setF_name(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={l_name}
                    onChange={(e) => setL_name(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={f_email}
                onChange={(e) => setF_email(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={f_password}
                  onChange={(e) => setF_password(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Text fontSize={"sm"} color={"grey"} w={"25rem"}>
              By registering you agree to our <Link>Terms & Conditions</Link>
            </Text>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handle}
                loadingText="Submitting"
                size="lg"
                bg={"#fc2779;"}
                color={"white"}
                _hover={{
                  bg: "#fc2779;",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link href="./login" color={"#fc2779;"}>
                  Login
                </Link>
              </Text>
            </Stack>
            <Stack>
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
        </Box>
      </Stack>
    </Flex>
  );
}
