import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Box,
    Button,
    ButtonGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Radio,
    RadioGroup,
    Stack
} from '@chakra-ui/react'
import {
    Paginator,
    Container,
    Previous,
    Next,
    PageGroup,
} from 'chakra-paginator'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import UploadTip from './UploadTip'
import { IDataItemsElement } from '../redux/reducers/tabledata'


interface IProps {
    isLoading: boolean,
    items: IDataItemsElement[],
    pagesQuantity: number,
    currentPage: number,
    setCurrentPage: (page: number) => void,
    offset: number,
    pageSize: number,
    handleEditModalPrepare: (id: number) => void,
    handleDeleteModalPrepare: (id: number) => void,
    isEditOpen: boolean,
    onEditOpen: () => void,
    onEditClose: () => void,
    isDeleteOpen: boolean,
    onDeleteOpen: () => void,
    onDeleteClose: () => void,
    handleRadioChange: (value: string) => void,
    radioValue: string | undefined,
    handleEdit: () => void,
    handleDelete: () => void,
    saveBtnDisable: boolean
}

const DataTable = ({ 
    isLoading, 
    items, 
    pagesQuantity, 
    currentPage, 
    setCurrentPage, 
    offset, 
    pageSize, 
    handleEditModalPrepare, 
    handleDeleteModalPrepare, 
    isEditOpen, 
    onEditOpen, 
    onEditClose, 
    isDeleteOpen, 
    onDeleteOpen, 
    onDeleteClose, 
    handleRadioChange, 
    radioValue, 
    handleEdit, 
    handleDelete, 
    saveBtnDisable 
}: IProps) => {
    return (
        <>
        {
            isLoading || !items.length
            ?   <UploadTip />
            :   <Box w="100%">
                    <Table marginTop={55} variant="striped" colorScheme="gray">
                        <TableCaption>
                                <Paginator
                                    pagesQuantity={pagesQuantity}
                                    currentPage={currentPage}
                                    onPageChange={setCurrentPage}
                                    innerLimit={3}
                                    outerLimit={2}
                                >
                                    <Container align="center" justify="space-between" mx="-24px">
                                        <Previous colorScheme="purple">{<ChevronLeft />}</Previous>
                                        <PageGroup isInline align="center" />
                                        <Next colorScheme="purple">{<ChevronRight />}</Next>
                                    </Container>
                                </Paginator>
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Status</Th>
                                <Th>Type</Th>
                                <Th>Client name</Th>
                                <Th>Amount</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                items.slice(offset, offset + pageSize).map((el: IDataItemsElement) => {
                                    return <Tr key={el.transactionId}>
                                        <Td>{el.transactionId}</Td>
                                        <Td>{el.status}</Td>
                                        <Td>{el.type}</Td>
                                        <Td>{el.clientName}</Td>
                                        <Td>{el.amount}</Td>
                                        <Td>
                                            <ButtonGroup w="100%" colorScheme="purple" size="sm" isAttached>
                                                <Button onClick={() => handleEditModalPrepare(el.transactionId)} width="100%" variant="solid" mr="-px">Edit</Button>
                                                <Button onClick={() => handleDeleteModalPrepare(el.transactionId)} width="100%" variant="outline">Delete</Button>
                                            </ButtonGroup>
                                        </Td>
                                    </Tr>
                                })
                            }
                        </Tbody>
                    </Table>
                </Box>
        }
            <Modal isOpen={isEditOpen} onClose={onEditClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Сhange transaction status</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <RadioGroup onChange={handleRadioChange} value={radioValue}>
                            <Stack direction="row">
                                <Radio colorScheme="purple" value="pending">Pending</Radio>
                                <Radio colorScheme="purple" value="completed">Completed</Radio>
                                <Radio colorScheme="purple" value="cancelled">Cancelled</Radio>
                            </Stack>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="purple" variant="outline" mr={3} onClick={onEditClose}>Cancel</Button>
                        <Button onClick={handleEdit} disabled={saveBtnDisable} colorScheme="green">Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal size={'xs'} isOpen={isDeleteOpen} onClose={onDeleteClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete transaction</ModalHeader>
                    <ModalBody>Are you sure? You can't undo this action afterwards.</ModalBody>
                    <ModalCloseButton />
                    <ModalFooter justifyContent="center">
                        <Button colorScheme="purple" variant="outline" mr={3} onClick={onDeleteClose}>Cancel</Button>
                        <Button onClick={handleDelete} colorScheme="red" >Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default DataTable
