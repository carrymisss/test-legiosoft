import React, { useEffect, useRef, useState } from 'react'
import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useToast } from '@chakra-ui/react'
import Panel from '../components/Panel'
import Actions from '../redux/actions/tabledata'
import { IDataItemsElement, TStatus, TType } from '../redux/reducers/tabledata'


const PanelComponent = () => {
    const [status, setStatus] = useState<TStatus>('')
    const [type, setType] = useState<TType>('')
    const [disabled, setDisabled] = useState<boolean>(true)
    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const toast = useToast()

    useEffect(() => {
        dispatch(Actions.sortData(status, type))
        dispatch(Actions.sortData(status, type))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status, type])

    const getText = (file: File | undefined, callback: (result: string | ArrayBuffer | null) => void): void => {
        const reader: FileReader = new FileReader()
        reader.addEventListener('load', () => callback(reader.result)) 
        reader.readAsText(file as File)
    }

    const handleChangeStatus = (e: ChangeEvent<HTMLSelectElement>): void => {
        setStatus(e.target.value as TStatus)
    }

    const handleChangeType = (e: ChangeEvent<HTMLSelectElement>): void => {
        setType(e.target.value as TType)
    }
    
    const handleUploadFile = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files?.length) {
            try {
                getText(e.target.files?.[0], fileData => {
                    if (fileData) {
                        const arr: any[] | undefined = fileData?.toString().split(/\r\n|\n/)
                        arr?.shift()
                        if (arr.length) {
                            const formatedArr: IDataItemsElement[] = []
                            arr?.forEach((el: string, i: number) => {
                                arr[i] = el.split(',')
                                formatedArr.push({
                                    transactionId: parseInt(arr[i][0]),
                                    status: arr[i][1],
                                    type: arr[i][2],
                                    clientName: arr[i][3],
                                    amount: arr[i][4]
                                })
                            })
                            dispatch(Actions.setTabledata(formatedArr))
                            setDisabled(false)
                        } else {
                            toast({
                                title: 'The file has the wrong structure.',
                                status: 'error',
                                duration: 5000,
                                isClosable: true,
                                position: 'top'
                            })
                            setDisabled(true)
                        }
                    } else {
                        toast({
                            title: 'You cannot upload an empty file.',
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                            position: 'top'
                        })
                        setDisabled(true)
                    }
                })
            } catch (er) {
                throw new Error(er)
            }
        }    
    }

    const handleImportFile = (): void => {
        inputRef.current?.click()
    }

    return (
        <Panel
            disabled={disabled}
            inputRef={inputRef}
            handleImportFile={handleImportFile}
            handleUploadFile={handleUploadFile}
            handleChangeType={handleChangeType}
            handleChangeStatus={handleChangeStatus}
        />
    )
}

export default PanelComponent
