import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';

export const Homepage =()=>{
    return(
        <Flex justifyContent={"center"} alignItems={"center"} bgColor={"black"} height={"100vh"} width={"100vw"} flexDirection={"row"} >
            <Box width={"70%"} height={"100vh"} bgGradient='linear(to-br, #0A0081, #000000)' >
                <Img src='https://svgshare.com/i/i3c.svg' width={"82%"} ml={"3vw"} />
            </Box>
            <Box justifyContent={"center"} pt={"15%"} alignItems={"center"} textAlign={'start'} flex={"1"} height={"100vh"} bgGradient='linear(to-bl, #0A0081, #000000)'>
                <Text fontSize={"60px"} fontWeight={"bold"}  color={"white"}>Welcome,</Text>
                <Text fontSize={"2xl"} color={"white"}>To the social media of NFT creators</Text>
                <Button fontFamily={"heading"} mt={"30px"} fontSize={"2xl"} colorScheme={"purple"} padding={"30px"} rounded={"2xl"} >Launch App</Button>
            </Box>
        </Flex>
    )
}