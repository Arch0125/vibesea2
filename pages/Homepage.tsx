import { Box, Flex } from '@chakra-ui/react';
import * as React from 'react';

export const Homepage =()=>{
    return(
        <Flex bgColor={"black"} height={"100vh"} width={"100vw"} flexDirection={"row"} >
            <Box width={"70%"} height={"100vh"} bgGradient='linear(to-br, #0A0081, #000000)' >

            </Box>
            <Box flex={"1"} height={"100vh"} bgGradient='linear(to-bl, #0A0081, #000000)'>

            </Box>
        </Flex>
    )
}