import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1> Carbon Footprint Tracker </h1>
                </Link>
                <Link to="/calculator" className="btn">
                    Calculator
                </Link>
                <Link to="/about" className="btn">
                    About
                </Link>
            </div>
        </header>
    )
}

export default Navbar;