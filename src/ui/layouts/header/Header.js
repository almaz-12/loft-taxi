import './header.css';
import Logo from '../../components/logo/Logo';
import Menu from '../../components/menu/Menu';

const logo = './images/header-logo.svg';

const linkList = [
    { url: 'login', text: "Логин", id: 0 },
    { url: 'map', text: "Карта", id: 1 },
    { url: 'profile', text: "Профиль", id: 2 },
    { url: 'logout', text: "Выйти", id: 3 }
];

const Header = (props) => (    
    <header className='main-header'>
        <div className='main-header-wrap'>
            <Logo logo={logo}/>
            <Menu linkList={linkList} handleClick={props.handleClick}/>
        </div>
    </header>
);
  
export default Header;