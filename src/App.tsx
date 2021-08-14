import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import Actions from './redux/actions/tabledata'
// експорт по вибраних в дропадуні пунктах

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Actions.fetchTabledata())
  })

  return (
    <h1>hello</h1>
  )
}

export default App
