import text from "../style/text.module.css";
import { Link } from "react-router-dom";
import styles from "../style/works.module.css";

export default function Text(props) {
    if (props.items[0].key !== "1wo") {
        const textItems = props.items.map((el, index) => <p key={el.key}>{el.text}</p>);
        return <div>{textItems}</div>;
    } else {
        const linkItems = props.items.map((el, index) => (
            <Link key={el.key} to={el.link} className={styles.link}>
                {el.text}
            </Link>
        ));
        return <div>{linkItems}</div>;
    }
}
