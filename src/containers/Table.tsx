import React, { useState } from 'react'
import { usePaginator } from 'chakra-paginator'
import { useSelector, useDispatch } from 'react-redux'
import { IData, IDataItemsElement, TStatus } from '../redux/reducers/tabledata'
import { useDisclosure } from '@chakra-ui/react'
import Actions from '../redux/actions/tabledata'
import Table from '../components/Table'


const TableComponent = () => {
    const { items, isLoading }: any = useSelector((state: IData) => state)
    const { currentPage, setCurrentPage, pagesQuantity, offset, pageSize } = usePaginator({
        total: items.length,
        initialState: {
            currentPage: 1,
            pageSize: 15
        }
    })
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()
    const [radioValue, setRadioValue] = useState<string | undefined>()
    const [prevRadioValue, setPrevRadioValue] = useState<string | undefined>()
    const [saveBtnDisable, setSaveBtnDisable] = useState<boolean>(true)
    const [elId, setElId] = useState<number | undefined>()
    const dispatch = useDispatch()

    const handleEditModalPrepare = (id: number): void => {
        setElId(id)
        setPrevRadioValue(items.find((el: IDataItemsElement) => { return el.transactionId === id }).status)
        setRadioValue(items.find((el: IDataItemsElement) => { return el.transactionId === id }).status)
        onEditOpen()
    }

    const handleDeleteModalPrepare = (id: number): void => {
        setElId(id)
        onDeleteOpen()
    }

    const handleRadioChange = (value: string): void => {
        setRadioValue(value)
        if (value !== prevRadioValue) {
            setSaveBtnDisable(false)
        } else {
            setSaveBtnDisable(true)
        }
    }

    const handleEdit = (): void => {
        dispatch(Actions.updateTransactionStatus(radioValue as TStatus, elId as number))
        onEditClose()
        setElId(undefined)
        setPrevRadioValue(undefined)
        setRadioValue(undefined)
        setSaveBtnDisable(true)
    }

    const handleDelete = (): void => { 
        dispatch(Actions.deleteTransaction(elId as number))
        onDeleteClose()
        setElId(undefined)
    }

    return (
        <Table 
            isLoading={isLoading}
            items={items}
            pagesQuantity={pagesQuantity}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            offset={offset}
            pageSize={pageSize}
            handleEditModalPrepare={handleEditModalPrepare}
            handleDeleteModalPrepare={handleDeleteModalPrepare}
            isEditOpen={isEditOpen}
            onEditOpen={onEditOpen}
            onEditClose={onEditClose}
            isDeleteOpen={isDeleteOpen}
            onDeleteOpen={onDeleteOpen}
            onDeleteClose={onDeleteClose}
            handleRadioChange={handleRadioChange}
            radioValue={radioValue}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            saveBtnDisable={saveBtnDisable}
        />
    )
}

export default TableComponent
