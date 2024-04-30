import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
    const { logout } = useLogout()

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
                    <div>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;