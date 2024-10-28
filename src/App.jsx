import React from 'react';
import './index.scss'
import { Success } from './components/Success';
import { Users } from './components/users';

function App() {
  const [users, setUsers] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    try {
      fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
        console.log(json.data);
        setUsers(json.data)
        setLoading(false)
      }).catch(err => {
        console.error('Error - ', err)
      })
    } catch (error) {
      console.error('Error - ', error)
    }
  }, [])

  return (
    <div className="App">
      <Users items={users} isLoading={isLoading}/>
      {/* <Success /> */}
    </div>
  );
}

export default App;