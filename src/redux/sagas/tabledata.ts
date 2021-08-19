import { takeEvery, put } from 'redux-saga/effects'
import Actions from '../actions/tabledata'
import { IDataItemsElement } from '../reducers/tabledata'


export default function* watchFetchTabledata(): any {
    yield takeEvery('FETCH_ITEMS', fetchTabledata)
}

function* fetchTabledata() {
    yield put(Actions.setLoading(true))
    const Tabledata: IDataItemsElement[] = yield fetch('https://6117dd4b30022f0017a06001.mockapi.io/mck')
    .then((response) => {        
        return response.json()
    })
    yield put(Actions.setTabledata(Tabledata))
    yield put(Actions.setLoading(false))
}