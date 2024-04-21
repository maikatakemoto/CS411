import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/getUsers')
    .then((users) => {
      console.log('Users fetched:', users.data); // Log the data received from the server
      setUsers(users.data)
    }).catch(err => console.log(err))
  } , [])

  console.log('Current users state:', users);
  return (
    <div>
      {
        users.map(user => {
          return <div> 
            <h3> {user.name} </h3>
            <h3> {user.age} </h3>
            </div>
        })
      }

    </div>
  )
}

export default App
