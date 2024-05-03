import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="containerNav">
                <Link to="/">
                    <h1> Carbon Footprint Tracker </h1>
                </Link>
                <Link to="/about" className="btn">
                    About
                </Link>
                <Link to="/trips" className="btn">
                    Trips
                </Link>
                <Link to="/calculator" className="btn">
                    Calculator
                </Link>
                <nav>
                    {user && (
                    <div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                    )}
                    {!user && (
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;