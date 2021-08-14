interface IDataState {
  items: any[],
  isLoading: boolean
}

const initialState: IDataState = {
  items: [],
  isLoading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: IDataState = initialState, { type, payload }: any): IDataState => {
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