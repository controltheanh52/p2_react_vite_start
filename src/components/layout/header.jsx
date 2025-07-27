import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <>
            <ul>
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link className="active" to="/users">Users</Link></li>
                <li><Link className="active" to="/products">products</Link></li>
            </ul>

        </>
    )
}

export default Header;