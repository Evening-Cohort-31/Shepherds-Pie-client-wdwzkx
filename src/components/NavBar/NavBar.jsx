import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
                {/* w-100: Force the list to take full width 
                   d-flex: Enable flexbox
                   justify-content-evenly: Space items equally including edges
                */}
                <ul className="navbar-nav w-100 d-flex justify-content-evenly">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Pizza Builder</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/orderlist">Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    
                    {/* Logout Logic moved inside the main list so it spaces correctly */}
                    {localStorage.getItem("shepards_pies_employee") ? (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to=""
                                onClick={() => {
                                    localStorage.removeItem("shepards_pies_employee")
                                    navigate("/", { replace: true })
                                }}
                            >
                                Logout
                            </Link>
                        </li>
                    ) : null}
                </ul>
            </div>
        </nav>
    )
}