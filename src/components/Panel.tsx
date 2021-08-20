import React, { ChangeEvent, RefObject } from 'react'
import { Box, Button, Spacer, HStack, Flex, Select } from '@chakra-ui/react'


interface IProps {
    handleChangeStatus: (e: ChangeEvent<HTMLSelectElement>) => void,
    handleChangeType: (e: ChangeEvent<HTMLSelectElement>) => void,
    handleUploadFile: (e: ChangeEvent<HTMLInputElement>) => void,
    handleImport: () => void,
    handleExport: () => void,
    inputRef: RefObject<HTMLInputElement>,
    exportRef: RefObject<HTMLAnchorElement>,
    disabled: boolean
}

const Panel = ({ 
    handleChangeStatus, 
    handleChangeType, 
    handleUploadFile, 
    handleImport, 
    inputRef, 
    disabled, 
    handleExport,
    exportRef
}: IProps) => {
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
                    <Button onClick={handleImport} colorScheme="purple" variant="solid">Import</Button>
                    <Spacer />
                    <Button onClick={handleExport}disabled={disabled} colorScheme="purple" variant="outline">
                        Export
                        {/* eslint-disable jsx-a11y/anchor-is-valid */
                            /* eslint-disable jsx-a11y/anchor-has-content */}
                        <a href="" ref={exportRef} style={{ display: 'none' }} />
                    </Button>
                </HStack>
            </Flex>
        </Box>
    )
}

export default Panel