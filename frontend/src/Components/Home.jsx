import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import InputText from './InputText.jsx'
import Navbar from './Navbar.jsx'
const Home = () => {
  return (
    <Box bgColor={'#212121'} color={'white'} height={'100vh'} display={'flex'} flexDir={'column'} py={'1rem'} alignItems={'center'} justifyContent={'space-between'}>
      <Navbar />
        <Text>Heading this side</Text>

        <InputText />
    </Box>
  )
}

export default Home
