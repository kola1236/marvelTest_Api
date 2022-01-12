import { Link } from 'react-router-dom'; //страничка меняется без перезагрузки страницы

function Header() {
    return (
        <nav className=' light-blue'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>
                    react SHOP
                </Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contacts'>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
