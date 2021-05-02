import './Header.css';
import Logo from '../../components/logo/Logo';
import Menu from '../../components/menu/Menu';

const logo = './images/header-logo.svg';

const linkList = [
    { url: 'map', text: "Карта", id: 0 },
    { url: 'profile', text: "Профиль", id: 1 },
    { url: 'logout', text: "Выйти", id: 2 }
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