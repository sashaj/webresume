import Text from "../components/text";

export default function skills() {
    const skillText = [
        { key: "1sk", text: "HTML5, CSS3, Javascript(ECMA 2023)" },
        { key: "2sk", text: "Vue stack: Vue 2/3, Options/Composition API, Pinia, Router" },
        { key: "3sk", text: "React stack: Pinia, Router" },
        { key: "4sk", text: "Other: Jira, Figma, Photoshop, Agile, Vscode" },
        { key: "2sk", text: "Hi" },
    ];

    return <Text items={skillText}></Text>;
}
