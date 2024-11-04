import s from "./Menu.module.scss";

const Menu = () => {
    return (
        <section className={s.MenuContainer}>
            <ul>
                <li><a href="#">BTC</a></li>
                <li><a href="#">ETH</a></li>
                <li><a href="#">LTH</a></li>
                <li><a href="#">DOG</a></li>
            </ul>
            <p><a href="#">Signup</a></p>
            <p><a href="#">Login</a></p>
        </section>
    );
};

export default Menu;