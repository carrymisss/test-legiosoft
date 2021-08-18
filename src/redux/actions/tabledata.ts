import { IDataItemsElement, ISortOptions, TStatus, TType } from '../reducers/tabledata'

interface IActions {
  setTabledata: (T: IDataItemsElement[]) => {
    type: string,
    payload: typeof T
  },
  fetchTabledata: () => {
    type: string
  },
  setLoading: (B: boolean) => {
    type: string,
    payload: typeof B
  }
  sortData: (status: TStatus, type: TType) => {
    type: string,
    payload: ISortOptions
  }
}

const Actions: IActions = {
  setTabledata: items => ({
    type: 'SET_ITEMS',
    payload: items
  }),
  fetchTabledata: () => ({
    type: 'FETCH_ITEMS'
  }),
  setLoading: status => ({
    type: 'SET_LOADING',
    payload: status
  }),
  sortData: (status, type) => ({
    type: 'SORT_DATA',
    payload: { status, type }
  })
  // addMessage: message => (dispatch, getState) => {
  //   const { dialogs } = getState()
  //   const { currentDialogId } = dialogs

  //   if (currentDialogId === message.dialog._id) {
  //     dispatch({
  //       type: 'MESSAGES:ADD_MESSAGE',
  //       payload: message
  //     })
  //   }
  // },
}

export default Actions