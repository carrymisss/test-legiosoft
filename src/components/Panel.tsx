import React, { ChangeEvent, RefObject } from 'react'
import { Box, Button, Spacer, HStack, Flex, Select } from '@chakra-ui/react'


interface IProps {
    handleChangeStatus: (e: ChangeEvent<HTMLSelectElement>) => void,
    handleChangeType: (e: ChangeEvent<HTMLSelectElement>) => void,
    handleUploadFile: (e: ChangeEvent<HTMLInputElement>) => void,
    handleImportFile: () => void,
    inputRef: RefObject<HTMLInputElement>,
    disabled: boolean
}

const Panel = ({ handleChangeStatus, handleChangeType, handleUploadFile, handleImportFile, inputRef, disabled }: IProps) => {
    return (
        <Box w="100%">            
            <Flex p={3}>
                <HStack>
                    <Select disabled={disabled} onChange={handleChangeStatus} placeholder="Status" borderColor="purple.500">
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </Select>
                    <Spacer />
                    <Select disabled={disabled} onChange={handleChangeType} placeholder="Type" borderColor="purple.500">
                        <option value="refill">Refill</option>
                        <option value="withdrawal">Withdrawal</option>
                    </Select>
                </HStack>
                <Spacer />
                <HStack>    
                    <input ref={inputRef} onChange={handleUploadFile} id="importBtn" type="file" accept=".csv" style={{ display: 'none' }} />
                    <Button onClick={handleImportFile} colorScheme="purple" variant="solid">Import</Button>
                    <Spacer />
                    <Button disabled={disabled} colorScheme="purple" variant="outline">Export</Button>
                </HStack>
            </Flex>
        </Box>
    )
}

export default Panel