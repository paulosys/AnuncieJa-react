import Logo from "../Logo/Logo.jsx";
import "./FooterPag.css";

const FooterPage = () => {
    return (
        <footer>
            <div className="container-footer">
                <div className="content-footer">
                    <div className="logo-footer">
                        <Logo/>

                    </div>
                    <nav className="nav-footer">
                        <ul>
                            <li><a href="#myProduct">Meus Anúncios</a></li>
                            <li><a href="#product">Produtos</a></li>
                        </ul>
                    </nav>

                </div>
                <div className="privacity-page">
                    <p>© 2022 - Todos os direitos reservados</p>
                </div>
            </div>
    </footer>
    );
}

export default FooterPage;