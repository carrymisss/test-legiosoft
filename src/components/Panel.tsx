import React from 'react'
import { Box, Button, Spacer, HStack, Flex, Select } from '@chakra-ui/react'


const Panel = () => {
    return (
        <Box w="100%">
            <Flex p={3}>
                <HStack>
                    <Select placeholder="Status">
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </Select>
                    <Spacer />
                    <Select placeholder="Type">
                        <option value="refill">Refill</option>
                        <option value="withdrawal">Withdrawal</option>
                    </Select>
                </HStack>
                <Spacer />
                <HStack>
                    <Button colorScheme="purple" variant="solid">Import</Button>
                    <Spacer />
                    <Button colorScheme="purple" variant="outline">Export</Button>
                </HStack>
            </Flex>
        </Box>
    )
}

export default Panel