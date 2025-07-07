import Text from "../components/text";
import ctSVG from "../assets/companies/codingteam.svg";
import endySVG from "../assets/companies/endy.svg";
import leadgidSVG from "../assets/companies/leadgid.svg";
import mostSVG from "../assets/companies/most.svg";
import platformaSVG from "../assets/companies/platforma.svg";
import stngSVG from "../assets/companies/stng.svg";
import redLabSVG from "../assets/companies/redlab.svg";
import restomarketPNG from "../assets/companies/restomarket.png";
import glavbeerPNG from "../assets/companies/glavbeer.png";
import polarairPNG from "../assets/companies/polarair.png";
import telezavrPNG from "../assets/companies/telezavr.png";
import yakutskPNG from "../assets/companies/yakutsk.png";
import { Link } from "react-router-dom";
import styles from "../style/about.module.css";

export default function About() {
    const skillText = [
        { key: "1ab", text: "Hello! My name is Alexander Ivanov" },
        { key: "2ab", text: "I'm a front-end developer" },
        { key: "3ab", text: "Based in Yakutsk, Russia (gmt/utc +9)" },
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
        { link: "https://platforma.bz/", src: platformaSVG },
        { link: "https://appmost.ru/", src: mostSVG },
        { link: "https://polar-aero.ru/", src: polarairPNG },
        { link: "https://telezavr.com/", src: telezavrPNG },
        { link: "https://yakutskcity.ru/", src: yakutskPNG },
    ];

    const imgItems = imgs.map((el, index) => (
        <Link key={el.index} to={el.link} target="_blank">
            <img src={el.src}></img>
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
