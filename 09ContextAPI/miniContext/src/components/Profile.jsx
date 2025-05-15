import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)
  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <p>Welcome, {user.username}!</p>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  )         
}

export default Profile