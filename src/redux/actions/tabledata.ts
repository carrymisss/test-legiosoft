import { IMockData } from "../sagas/tabledata"

interface IActions {
  setTabledata: (T: IMockData[]) => {
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