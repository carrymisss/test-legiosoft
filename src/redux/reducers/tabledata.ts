export type TStatus = 'pending' | 'completed' | 'cancelled' | ''
export type TType = 'refill' | 'withdrawal' | ''

export interface ISortOptions {
    status: TStatus
    type: TType
}

export interface IDataItemsElement extends ISortOptions {
    clientName: string,
    amount: number,
    transactionId: number
}

export interface IData {
    items: IDataItemsElement[],
    isLoading: boolean
}


const initialState: IData = {
    items: [],
    isLoading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: IData = initialState, { type, payload }: { type: string, payload: (IDataItemsElement[] | ISortOptions | any)}): IData => {
    switch (type) {
        case 'SET_ITEMS':
            return {
                ...state,
                items: payload,
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: payload
            }
        case 'SORT_DATA':
            return {
                ...state,
                // eslint-disable-next-line array-callback-return
                items: state.items.sort((a: IDataItemsElement, b: IDataItemsElement): any => {
                    if (!payload.status && !payload.type) {
                        return a.transactionId - b.transactionId
                    }
                    if (a.status.toLowerCase() === payload.status && !payload.type) {
                        return -1
                    } 
                    if (a.type.toLowerCase() === payload.type && !payload.status) {
                        return -1
                    }
                    if (payload.status && payload.type) {
                        if (a.status.toLowerCase() === payload.status && a.type.toLowerCase() === payload.type) {
                            return -1
                        }
                    }
                })
            }
        case 'UPDATE_STATUS':
            return {
                ...state,
                items: state.items.map((el: IDataItemsElement): IDataItemsElement => {
                    if (el.transactionId === payload.id) {
                        el.status = payload.newStatus
                        return el
                    } else {
                        return el
                    }
                })
            }
        case 'DELETE_TRANSACTION':
            // eslint-disable-next-line array-callback-return
            const idx: number = state.items.findIndex((el: IDataItemsElement): IDataItemsElement | undefined => {
                if (el.transactionId === payload) return el
            })
            state.items.splice(idx, 1)

            return {
                ...state,
            }
        default: return state
    }
}