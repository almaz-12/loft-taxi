import './Header.css';
import Logo from '../logo';
import Menu from '../menu';

const linkList = [
    { url: 'map', text: "Карта", id: 0 },
    { url: 'profile', text: "Профиль", id: 1 },
    { url: 'logout', text: "Выйти", id: 2 }
];

const Header = () => { 
    return (
        <header className="main-header" data-testid="main-header">
            <div className="main-header-wrap">
                <Logo/>
                <Menu linkList={linkList}/>
            </div>
        </header>
    )      
};
  
export default Header;