import { useState } from 'react';
import hamenu from '../../../assets/img/hmenu.svg';
import s from "./HMenu.module.scss";
import MoblieMenu from "./MoblieMenu.jsx";


function  HMenu() {
    const [view, setViewMenu] = useState(0);

    const clickToogleHandler = () => {

        setViewMenu(prev => !prev)

        }
    console.log(view);
    return (
        <div className={s.mobileView}>

            <img src={hamenu} alt="menu hamburger" className={s.hamburger} onClick={clickToogleHandler}/>
            {view ? <MoblieMenu fshow={clickToogleHandler} /> : null}
        </div>
    );

}

export default HMenu;