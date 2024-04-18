import React from 'react'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/login')
  }
  return (
    <div>
        <h1>Register</h1>
        <button onClick={handleBack}>Back</button>
        <input />
    </div>
  )
}

export default Register