import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Container, Flex, Spacer, Box, Stack, VStack, HStack } from '@chakra-ui/react'
import Panel from './components/Panel'
import Table from './components/Table'
import Actions from './redux/actions/tabledata'

// експорт по вибраних в дропадуні пунктах

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Actions.fetchTabledata())
  })

  return (
    <Container maxW="container.xl">
      <VStack>
        <Panel />
        <Table />
      </VStack>
    </Container>
  ) 
}

export default App
