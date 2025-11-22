import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";


// This should be able to be ported into various pages that have the go back button ( in theory )
export const NavButtons = () => {
  const navigate = useNavigate();

  return (
    <ul className="navButtons">
      <li className="navButton-item">
        <Link className="navButton-link" to="/">
          Back
        </Link>
      </li>
      {localStorage.getItem("shepards_pies_employee") ? (
        <li className="navButton-item navButton-logout">
          <Link
            className="navButton-link"
            to=""
            onClick={() => {
              localStorage.removeItem("shephard_pies_employee");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
