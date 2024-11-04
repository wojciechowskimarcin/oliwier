import s from "./MoblieMenu.module.scss";


function MoblieMenu({fshow}) {
    return (
        <section className={s.mobileMenuContainer}>

        <div className={s.closeMenu} onClick={fshow}>
        </div>
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

}

export default MoblieMenu;