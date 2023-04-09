import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const Header = () => {
    return (
        <Box
            backgroundImage="url(src/assets/bike.jpg)"
            backgroundSize="cover"
            backgroundPosition="center"
            height="100vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Text
                fontSize="5vw"
                fontWeight="bold"
                color="white"
                textAlign="center"
                textShadow="2px 2px black"
                fontFamily="Georgia, serif"
                letterSpacing="0.1em"
            >
                DOMINA EL TERRENO
            </Text>
            <Box display="flex" justifyContent="center">
                <Button
                    colorScheme="red"
                    size="lg"
                    fontSize="2vw"
                    borderRadius="50px"
                    margin="0 20px"
                    fontWeight="bold"
                    fontFamily="Georgia, serif"
                    letterSpacing="0.1em"
                    _hover={{
                        background: "transparent",
                        color: "white",
                        boxShadow: "none",
                        border: "3px solid white",
                    }}
                >
                    VER VIDEO
                </Button>
                <Button
                    colorScheme="red"
                    size="lg"
                    fontSize="2vw"
                    borderRadius="50px"
                    margin="0 20px"
                    fontWeight="bold"
                    fontFamily="Georgia, serif"
                    letterSpacing="0.1em"
                    _hover={{
                        background: "transparent",
                        color: "white",
                        boxShadow: "none",
                        border: "3px solid white",
                    }}
                >
                    VER DETALLES
                </Button>
            </Box>
        </Box>
    );
};

export default Header;
