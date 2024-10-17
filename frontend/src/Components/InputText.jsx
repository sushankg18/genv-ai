import { Flex, Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import { FaPauseCircle } from "react-icons/fa";

const InputText = () => {
    const [processing, setProcessing] = useState(false)
    return (
        <Flex w={'80%'}>
            <InputGroup alignItems={'center'}>
                <Input borderColor={'#212121'} p={'1.5rem 1rem'} fontSize={'1.3rem'} bgColor={'#2F2F2F'} focusBorderColor='#2F2F2F' placeholder='ask anything to Genv ai' />
                <InputRightAddon p={'1.4rem 1rem'}>
                    {
                        processing ? <FaPauseCircle /> : <IoSend color='black' fontSize={'1.3rem'} />
                    }
                </InputRightAddon>
            </InputGroup>
        </Flex>
    )
}

export default InputText
