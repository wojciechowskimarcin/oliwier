import s from './Header.module.scss';
import logo from '../../assets/img/bitcoin.png';
import HMenu from "./HMenu/HMenu.jsx";
import Menu from "./HMenu/Menu.jsx";

function Header() {

    return (
        <header className={s.headerContainer}>
            <img src={logo} alt="logo bitcoin" className={s.menuLogo}/>
            <HMenu />
            <Menu />
        </header>
    );
}

export default Header;