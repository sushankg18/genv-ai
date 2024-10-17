import { Avatar, Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex w={'100vw'} bgColor={'#212121'} color={'white'} borderBottom={'1px solid rgb(35,35,35)'} h={'10vh'} >
      <Flex justifyContent={'space-between'} w={'100%'} p={'.3rem 2rem'}>
        <Heading fontSize={'1.5rem'}>GEN.V-AI</Heading>

        <Avatar />
      </Flex>
    </Flex>
  )
}

export default Navbar
