import { Outlet, NavLink } from "react-router-dom";
import styles from "../style/nav.module.css";

export default function Nav(props) {
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
            <Outlet />
        </div>
    );
}
