import { takeEvery, put } from 'redux-saga/effects'
import Actions from '../actions/tabledata'

export interface IMockData {
    status: 'payment' | 'invoice' | 'withdrawal' | 'deposit',
    type: 'payment' | 'invoice' | 'withdrawal' | 'deposit',
    clientName: string,
    amount: number,
    transactionId: number
}

export default function* watchFetchTabledata(): any {
    yield takeEvery('FETCH_ITEMS', fetchTabledata)
}

function* fetchTabledata() {
    yield put(Actions.setLoading(true))
    const Tabledata: IMockData[] = yield fetch('https://6117dd4b30022f0017a06001.mockapi.io/mck')
    .then((response) => {
        return response.json()
    })
    yield put(Actions.setTabledata(Tabledata))
    yield put(Actions.setLoading(false))
}