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
    Highlight,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { FcGoogle } from "react-icons/fc";
  import { useDispatch } from "react-redux";
  import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

  const [f_email, setF_email] = useState("");
  const [f_password, setF_password] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const statuses = ['success', 'error', 'warning', 'info'];
  
  const handle = () => {

    if(f_email=="kaustubh@gmail.com" && f_password=="1234"){
        toast({
            position: 'bottom-left',
            render: () => (
              <Box color='white' p={3} bg='pink.400'>
                {`Welcome Admin 😍`}
              </Box>
            ),
          })
          navigate("/admin");
          return;
    }
           toast({
            position: 'bottom',
            render: () => (
              <Box color='white' p={3} bg='red.400'>
               Incorrect Email Id or Password !!
              </Box>
            ),
          })
      setF_email("");
      setF_password("");
    
console.log(f_email,f_password)
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
        <Heading lineHeight='tall' fontSize={"3xl"}>
            <Highlight
            query='Admin'
             styles={{ px: '2', py: '1', rounded: 'full', bg: 'pink.200' }}
             >
          Sign In To Your Admin Account
        </Highlight>
        </Heading>
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
                  Sign Up as User
                </Link>
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
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default AdminLogin
