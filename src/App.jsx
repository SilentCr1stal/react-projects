import React from 'react';
import './index.scss'
import { Success } from './components/Success';
import { Users } from './components/users';

function App() {
  const [users, setUsers] = React.useState([])
  const [invites, setInvites] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
  const [value, setValue] = React.useState('')
  const [success, setSuccess] = React.useState(false)

  const onClickSendInvites = () => {
    setSuccess(true)
  }

  const onClickInviteUser = id => {
    if (invites.includes(id))
      setInvites(prev => prev.filter(_id => _id !== id))
    else
      setInvites(prev => [...prev, id])
  }

  const onChangeSetValue = e => {
    setValue(prev => prev = e.target.value)
  }

  React.useEffect(() => {
    try {
      fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
        console.log(json.data);
        setUsers(json.data)
      }).catch(err => {
        console.error('Error - ', err)
      }).finally(() => setLoading(false))
    } catch (error) {
      console.error('Error - ', error)
    }
  }, [])

  return (
    <div className="App">
      {success ? <Success count={invites.length}/> : (
        <Users value={value} onChangeSetValue={onChangeSetValue} items={users}
          isLoading={isLoading} onClickInviteUser={onClickInviteUser} invites={invites} onClickSendInvites={onClickSendInvites}/>
      )}
    </div>
  );
}

export default App;