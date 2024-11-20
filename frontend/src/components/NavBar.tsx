import { Container, Flex, Text, HStack, Button } from '@chakra-ui/react';
import { PlusSquareIcon } from 'lucide-react';
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          color={"black"}
        >
          <Link  to={"/"}>Product Store 🛒</Link>
         

        </Text>

        <HStack padding={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
   {/*        <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
          </Button> */}
        </HStack>
      </Flex>
    </Container>

  );
};
export default NavBar;
