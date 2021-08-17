export interface IDataItemsElement {
  status: 'payment' | 'invoice' | 'withdrawal' | 'deposit',
  type: 'payment' | 'invoice' | 'withdrawal' | 'deposit',
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
  isLoading: true,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: IData = initialState, { type, payload }: {type: string, payload: (IDataItemsElement[] | any)}): IData => {
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
    default:
      return state
  }
}