import { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import styles from "../style/nav.module.css";

export default function Nav(props) {
    const { pathname } = useLocation();
    const [waiting, setWaiting] = useState(false);

    const listItems = props.items.map((el, index) => (
        <li className={styles.navItem}>
            <NavLink to={el.link} key={el.key}>
                {el.name}
            </NavLink>
        </li>
    ));

    return (
        <div>
            <nav>
                <ul>{listItems}</ul>
            </nav>
            <div key={pathname} className={`${styles.fadeIn} ${waiting ? styles.paused : ""}`}>
                <Outlet context={{ setWaiting }} />
            </div>
        </div>
    );
}
