import { Flex, Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import { FaPauseCircle } from "react-icons/fa";

const InputText = () => {
    const [processing, setProcessing] = useState(false)
    return (
        <Flex w={'80%'}>
            <InputGroup>
                <Input />
                <InputRightAddon>
                    {
                        processing ? <FaPauseCircle /> : <IoSend />
                    }
                </InputRightAddon>
            </InputGroup>
        </Flex>
    )
}

export default InputText
