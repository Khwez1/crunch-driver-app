import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Header = () => {
    const navigate = useNavigate()
    const {user, logoutUser} = useAuth()

    const logoutClick = () => {
        navigate('/login')
    }

  return (
    <div className="header">

        <div className="links--wrapper">
            {user (
            <>
                <Link to="/" className="header--link">Home</Link>
                <Link to="/profile" className="header--link">Profile</Link>

                <button onClick={logoutUser} className="btn">Logout</button>
            </>
            )}
        </div>
    </div>
  )
}

export default Header
