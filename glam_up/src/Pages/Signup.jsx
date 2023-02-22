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
} from "@chakra-ui/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [f_email, setF_email] = useState("");
  const [f_password, setF_password] = useState("");
  const [f_name, setF_name] = useState("");
  const [l_name, setL_name] = useState("");
  const navigate = useNavigate();

  const handle = (e) => {
    if (f_name === "" && l_name === "") {
      alert("Please enter Full Name !");
    } else if (f_name === "") {
      alert("Please enter First Name !");
    } else if (l_name === "") {
      alert("Please enter Last Name !");
    } else if (f_email === "") {
      alert("Please enter Email !");
    } else if (f_password === "") {
      alert("Please enter Password !");
    }

    let log_user = {
      email: f_email,
      password: f_password,
    };
    let arr = JSON.parse(localStorage.getItem("user")) || [];
    arr.push(log_user);
    localStorage.setItem("user", JSON.stringify(arr));
    // <Navigate to="/login" />
    navigate("/login");
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
