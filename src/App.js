import { useEffect } from 'react';
import { getApi } from './data'
import { useStore, downJob } from './stores'
import AddItem from "./components/AddItem/AddItem";
import InputItem from './components/InputItem/InputItem';
import ListItem from './components/ListItem/ListItem';
import { Container } from './components/style/common'
function App() {
  const [ state, dispatch ] = useStore()
  const api = 'https://db-fake-api.herokuapp.com/expense'
  useEffect(()=> {
    getApi(api)
      .then(data => {
        if(data.length > 0) {
          dispatch(downJob(data))
        }
      })
  }, [])
  return (
    <Container>
      {
        state.isTrue ? <AddItem /> : <InputItem />
      }
      {
        state.jobs.length > 0 
        ? <ListItem />
        : <h1 style={{textAlign: 'center'}}>No iTems</h1>
      }
    </Container>
  )
}

export default App;
