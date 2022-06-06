import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

import "./Header.css";

const Header = ({userName}) => {
    return (
        <header className="header">
            <Logo/>
            <Nav user={userName}></Nav>
        </header>
    );
}

export default Header;