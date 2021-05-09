import './Header.css';
import Logo from '../logo';
import Menu from '../menu';
import PropTypes from "prop-types";

const linkList = [
    { url: 'map', text: "Карта", id: 0 },
    { url: 'profile', text: "Профиль", id: 1 },
    { url: 'logout', text: "Выйти", id: 2 }
];

const Header = (props) => { 
    const {handleClick} = props;
    return (
        <header className="main-header" data-testid="main-header">
            <div className="main-header-wrap">
                <Logo/>
                <Menu linkList={linkList} handleClick={handleClick}/>
            </div>
        </header>
    )      
};

Header.propTypes = {
    handleClick: PropTypes.func
}
  
export default Header;