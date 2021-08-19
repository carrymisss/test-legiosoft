import React from 'react'
// import React, {useEffect} from 'react'
// import { useDispatch } from 'react-redux'
import { Container, VStack } from '@chakra-ui/react'
import Panel from './containers/Panel'
import Table from './containers/Table'
// import Actions from './redux/actions/tabledata'


const App = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(Actions.fetchTabledata())
  // })

  return (
    <Container maxW="container.lg">
      <VStack>
        <Panel />
        <Table />
      </VStack>
    </Container>
  ) 
}

export default App
