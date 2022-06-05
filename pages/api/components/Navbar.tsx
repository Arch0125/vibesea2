import { Flex } from '@chakra-ui/react';
import * as React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'

const Navbar=() =>{
    return(
        <Flex px={"20px"} py={"10px"} flexDirection={"row"} width={"100vw"} bgColor={"black"} >
            <ButtonGroup>
                <Button variant={"ghost"} colorScheme={"whiteAlpha"}>Home</Button>
                <Button variant={"ghost"} colorScheme={"whiteAlpha"}>Explore</Button>
                <Button variant={"ghost"} colorScheme={"whiteAlpha"}>Create</Button>
            </ButtonGroup>
            <Button ml={"70%"} >Connect wallet</Button>
        </Flex>
    )
}

export default Navbar