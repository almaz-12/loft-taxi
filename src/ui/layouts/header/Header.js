import './header.css';
import Logo from '../../components/logo/Logo';
import Menu from '../../components/menu/Menu';

const logo = './images/header-logo.svg';

const linkList = [
    { url: '/map', text: "Карта" },
    { url: '/profile', text: "Профиль"},
    { url: '/logout', text: "Выйти" }
];

const Header = () => (
    <header className='main-header'>
        <div className='main-header-wrap'>
            <Logo logo={logo}/>
            <Menu linkList={linkList}/>
        </div>
    </header>
);
  
export default Header;