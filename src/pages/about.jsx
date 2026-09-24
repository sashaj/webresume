import Text from "../components/text";
import ctSVG from "../assets/companies/codingteam.svg";
import endySVG from "../assets/companies/endy.svg";
import leadgidSVG from "../assets/companies/leadgid.svg";
import mostSVG from "../assets/companies/most.svg";
import platformaSVG from "../assets/companies/platforma.svg";
import stngSVG from "../assets/companies/stng.svg";
import redLabSVG from "../assets/companies/redlab.svg";
import restomarketPNG from "../assets/companies/restomarket.png?w=300&format=webp";
import glavbeerPNG from "../assets/companies/glavbeer.png?w=300&format=webp";
import polarairPNG from "../assets/companies/polarair.png?w=300&format=webp";
import telezavrPNG from "../assets/companies/telezavr.png?w=300&format=webp";
import yakutskPNG from "../assets/companies/yakutsk.png?w=300&format=webp";
import RPCJPG from "../assets/companies/RPC.jpg?w=300&format=webp";
import { Link } from "react-router-dom";
import styles from "../style/about.module.css";

export default function About() {
    const skillText = [
        { key: "1ab", text: "Hello! My name is Alexander Ivanov" },
        { key: "2ab", text: "I'm a Senior front-end developer" },
        { key: "3ab", text: "Based in Da Nang, Vietnam (gmt/utc +7)" },
        //{ key: "4ab", text: "Test 7 main" },
    ];

    const imgs = [
        { link: "https://aostng.ru/", src: stngSVG },
        { link: "https://leadgid.ru/", src: leadgidSVG },
        { link: "https://codingteam.ru/", src: ctSVG },
        { link: "https://glav-beer.ru/", src: glavbeerPNG },
        { link: "https://redlab.dev/", src: redLabSVG },
        { link: "https://endylab.ru/", src: endySVG },
        { link: "https://restomarket.me/", src: restomarketPNG },
        { link: "https://appmost.ru/", src: mostSVG },
        { link: "https://patriarchia.ru/", src: RPCJPG },
        { link: "https://polar-aero.ru/", src: polarairPNG },
        { link: "https://telezavr.com/", src: telezavrPNG },
        { link: "https://yakutskcity.ru/", src: yakutskPNG },
    ];

    const imgItems = imgs.map((el) => (
        <Link key={el.link} to={el.link} target="_blank" rel="noopener noreferrer">
            <img src={el.src} alt="" loading="lazy" decoding="async" width="300" height="80" />
        </Link>
    ));

    return (
        <div>
            <Text items={skillText}></Text>
            <p className={styles.workedwith}>Worked with:</p>
            <div className={styles.companies}>{imgItems}</div>
        </div>
    );
}
