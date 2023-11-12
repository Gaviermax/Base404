import { Outlet, Link } from "react-router-dom"
import '../App.css';

function Layout(){
    return(
        <>
            {/* <nav className="nav navbarexpadnd-lg bg-primary bg-body-tertiary">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="services">Services</Link>
                    </li>
                </ul>
            </nav> */}
            

            <nav className="navbar navbar-expand-lg bg-danger shadow">
                <div className="container-fluid ">

                    <a className="navbar-brand fw-bold text-light ms-5 " href="#">COMPS</a>
                    {/* burger menu for mobile view */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active text-light" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-light" href="#">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-light" href="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Services" className="nav-link text-light" href="#">Services</Link>
                        </li>
                        
                    </ul>
                <form className="d-flex" role="search">
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                    <button className="btn btn-outline-light  fw-medium me-4 rounded-0" type="button">Sign Up</button>
                    <button className="btn btn-light text-danger me-5 fw-medium rounded-0" type="button">Log In</button>
                </form>
                </div>
            </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;