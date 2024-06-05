import { Outlet, NavLink } from "react-router-dom";

export default function Layout(props) {
    console.log(props);
    const listItems = props.items.map((el, index) => (
        <li>
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
