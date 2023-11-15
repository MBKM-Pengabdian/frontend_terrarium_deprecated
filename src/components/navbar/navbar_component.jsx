import { Link } from 'react-router-dom'

export const NavbarComponent = () => {
    return (
        <>
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-2 shadow-sm">
                <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 jakarta-sanss fw-semibold">Terrarium Medan</h2>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/" className="nav-item nav-link">About</Link>
                        <Link to="/" className="nav-item nav-link">Services</Link>
                        <Link to="/" className="nav-item nav-link">Projects</Link>
                        <Link to="/product" className="nav-item nav-link">Product</Link>
                        <Link to="/event" className="nav-item nav-link">Event</Link>
                        <Link to="/" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
        </>
    )
}
