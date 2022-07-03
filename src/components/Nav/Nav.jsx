import './Nav.css';

const Nav = ({user}) => {
    return (
        <nav>
            <ul className='ul-nav'>
                <li className='li-nav'><a href="#my-products">Meus Anúncios</a></li>
                <li className='li-nav'><a href="#products">Produtos</a></li>
                <li className='li-nav'>Olá, {user}</li>
            </ul>
        </nav>
    );
}

export default Nav;