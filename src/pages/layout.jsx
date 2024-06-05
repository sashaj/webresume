import { Outlet, NavLink, Link } from "react-router-dom";
import Nav from "../components/nav";

export default function Layout() {
    const navItems = [
        {
            name: "about",
            link: "/about",
            key: "123",
        },
        {
            name: "skills",
            link: "/skills",
            key: "123123",
        },
        {
            name: "works",
            link: "/works",
            key: "15345",
        },
        {
            name: "contacts",
            link: "/contacts",
            key: "1239012391209s",
        },
    ];
    return (
        <>
            <Nav items={navItems}></Nav>
        </>
    );
}
