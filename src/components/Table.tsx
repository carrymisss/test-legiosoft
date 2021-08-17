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
    HStack,
    ButtonGroup
} from '@chakra-ui/react'
import {
    Paginator,
    Container,
    Previous,
    Next,
    PageGroup,
    usePaginator
} from 'chakra-paginator'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'
import { IData, IDataItemsElement } from '../redux/reducers/tabledata'


const DataTable = () => {
    const {items, isLoading}: any = useSelector((state: IData) => state)
    const { currentPage, setCurrentPage, pagesQuantity, offset, pageSize } = usePaginator({
        total: items.length,
        initialState: {
            currentPage: 1,
            pageSize: 15
        } 
    })
    
    return (
        <>
        {
            isLoading 
            ?   <h1>loading</h1>
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
                                                <Button width="100%" variant="solid" mr="-px">Edit</Button>
                                                <Button width="100%" variant="outline">Delete</Button>
                                            </ButtonGroup>
                                        </Td>
                                    </Tr>
                                })
                            }
                        </Tbody>
                    </Table>
                </Box>
        }
        </>
    )
}

export default DataTable
