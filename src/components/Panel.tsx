import React, { ChangeEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Spacer, HStack, Flex, Select } from '@chakra-ui/react'
import Actions from '../redux/actions/tabledata'
import { TStatus, TType } from '../redux/reducers/tabledata'


const Panel = () => { 
    const [status, setStatus] = useState<TStatus>('')
    const [type, setType] = useState<TType>('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Actions.sortData(status, type))
    }, [status, type])

    const handleChangeStatus = (e: ChangeEvent<HTMLSelectElement>): void => {
        setStatus(e.target.value as TStatus)
    }

    const handleChangeType = (e: ChangeEvent<HTMLSelectElement>): void => {
        setType(e.target.value as TType)
    }

    return (
        <Box w="100%">            
            <Flex p={3}>
                <HStack>
                    <Select onChange={handleChangeStatus} placeholder="Status" borderColor="purple.500">
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </Select>
                    <Spacer />
                    <Select onChange={handleChangeType} placeholder="Type" borderColor="purple.500">
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