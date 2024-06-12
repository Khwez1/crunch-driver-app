import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Login = () => {
    const {user, loginUser}  = useAuth()
    const navigate = useNavigate()

    const loginForm = useRef(null)

    useEffect(() => {
        if (user){
          navigate('/')
        }
      })

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = loginForm.current.email.value
        const password = loginForm.current.password.value

        const userInfo = {email, password}
        loginUser(userInfo)
    }

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <form ref={loginForm} onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                    <input 
                        required
                        type="email" 
                        name="email"
                        id="email"
                        className="w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none"
                        placeholder="Enter email..."
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                    <input 
                        type="password" 
                        name="password"
                        id="password"
                        className="w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none"
                        placeholder="Enter password..."
                    />
                </div>
                <div className="mb-6">
                    <input 
                        type="submit" 
                        value="Login"
                        className="w-full bg-red-500 text-white shadow-xl font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 ease-in-out"
                    />
                </div>
            </form>
            <p className="text-center text-gray-600">
                Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-600">Register</Link>
            </p>
        </div>
    </div>
  )
}

export default Login