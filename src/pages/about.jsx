import Text from "../components/text";

export default function About() {
    const skillText = [
        { key: "1ab", text: "Hello, my name is Alexander Ivanov" },
        { key: "2ab", text: "I'm a front-end developer" },
        { key: "3ab", text: "Currently based in Yakutsk, Russia" },
        { key: "4ab", text: "(GMT/UTC +9)" },
    ];

    return <Text items={skillText}></Text>;
}
