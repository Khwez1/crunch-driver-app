import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext'

const RegisterComponent = () => {
    const registerForm = useRef(null)
    const {registerUser} = useAuth()

    const handleSubmit = (e) => {
    e.preventDefault()

    const name = registerForm.current.name.value
    const email = registerForm.current.email.value
    const password1 = registerForm.current.password1.value
    const password2 = registerForm.current.password2.value

    if(password1 !== password2){
        alert('Passwords did not match!')
        return 
    }
    
    const userInfo = {name, email, password1, password2}

    registerUser(userInfo)
}

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <form ref={registerForm} onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                        <input 
                            required
                            type="text" 
                            name="name"
                            id="name"
                            className="w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:border-red-700"
                            placeholder="Enter name..."
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                        <input 
                            required
                            type="email" 
                            name="email"
                            id="email"
                            className="w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:border-red-700"
                            placeholder="Enter email..."
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password1" className="block text-gray-700 font-bold mb-2">Password:</label>
                        <input 
                            type="password" 
                            name="password1"
                            id="password1"
                            className="w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:border-red-700"
                            placeholder="Enter password..."
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password2" className="block text-gray-700 font-bold mb-2">Confirm Password:</label>
                        <input 
                            type="password" 
                            name="password2"
                            id="password2"
                            className="w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:border-red-700" 
                            placeholder="Confirm password..."
                        />
                    </div>
                    <div className="mb-6">
                        <input 
                            type="submit" 
                            value="Register"
                            className="w-full bg-red-500 text-white shadow-xl font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 ease-in-out"
                        />
                    </div>
                </form>
                <p className="text-center text-gray-600">
                    Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-600">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterComponent;
