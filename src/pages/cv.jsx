import Text from "../components/text";

export default function works() {
    const cvText = [
        { key: "1cv", link: "https://drive.google.com/file/d/1t1SwNqdu3XsRBna7oWJWl5CMg3xBo6IZ/view?usp=sharing", text: "Russian.pdf" },
        { key: "2cv", link: "https://drive.google.com/file/d/1B4BcM3BcxXN2FCvZmjZ_9uZ5L6DNle7N/view?usp=sharing", text: "English.pdf" },
    ];

    return <Text items={cvText}></Text>;
}
