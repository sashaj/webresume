import Text from "../components/text";
import ctSVG from "../assets/companies/ct.svg";
import endySVG from "../assets/companies/endy.svg";
import leadgidSVG from "../assets/companies/leadgid.svg";
import mostSVG from "../assets/companies/most.svg";
import platformaSVG from "../assets/companies/platforma.svg";
import rcitPNG from "../assets/companies/rcit.png";
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
        { key: "i1", link: "https://customertimes.com/", src: ctSVG },
        { key: "i3", link: "https://leadgid.ru/", src: leadgidSVG },
        { key: "i4", link: "https://appmost.ru/", src: mostSVG },
        { key: "i5", link: "https://platforma.bz/", src: platformaSVG },
        { key: "i6", link: "https://rcitsakha.ru/", src: rcitPNG },
        { key: "i2", link: "https://endylab.ru/", src: endySVG },
        // { key: "i2", link: "https://endylab.ru/", src: endySVG },
    ];

    const imgItems = imgs.map((el, index) => (
        <Link key={el.key} to={el.link} target="_blank">
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
