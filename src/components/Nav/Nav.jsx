import './Nav.css';

const Nav = ({user}) => {
    return (
        <nav>
            <ul className='ul-nav'>
                <li className='li-nav'><a href="#">Meus Anúncios</a></li>
                <li className='li-nav'><a href="#">Produtos</a></li>
                <li className='li-nav'>Olá, {user}</li>
            </ul>
        </nav>
    );
}

export default Nav;