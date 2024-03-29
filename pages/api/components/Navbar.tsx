import { Flex } from '@chakra-ui/react';
import * as React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import NotConnectedModal from './NotConnectedModal';
import { useMetamask } from './context/metamsk.context';
import ConnectedModal from './ConnectedModal';

const Navbar=() =>{
    const {
        isWalletConnected,
        walletAddress,
        chain,
        currentWallet,
      } = useMetamask()
    return(
        <Flex px={"20px"} py={"15px"} flexDirection={"row"} width={"100vw"} bgColor={"black"} >
            <ButtonGroup>
                <a href='../../Homepage' ><Button variant={"ghost"} colorScheme={"whiteAlpha"}>Home</Button></a>
                <a href='../../ExplorePage' ><Button variant={"ghost"} colorScheme={"whiteAlpha"}>Explore</Button></a>
                <Button variant={"ghost"} colorScheme={"whiteAlpha"}>Create</Button>
            </ButtonGroup>
            {isWalletConnected && walletAddress && chain && currentWallet ?(<><ConnectedModal/></>):<NotConnectedModal/>}

        </Flex>
    )
}

export default Navbar