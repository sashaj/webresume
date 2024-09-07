import Text from "../components/text";

export default function skills() {
    const skillText = [
        { key: "1sk", text: "JavaScript, TypeScript, HTML5, CSS3, SCSS, Tailwind" },
        { key: "2sk", text: "Vue stack: Vue 2/3, Nuxt, Options/Composition API, Pinia, Router" },
        { key: "3sk", text: "React stack: React 18, Pinia, Router" },
        { key: "4sk", text: "Languages: Russian Native, English C1" },
    ];

    return <Text items={skillText}></Text>;
}
