import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const { user, setUser } = useContext(UserContext)
    
    const handleLogin = (e) => {
        e.preventDefault()
        // Simulate a login
        setUser({ username, password })
    }

  return (
    <div>
        <h2>Login</h2>
        <form>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            /> <br />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}

export default Login