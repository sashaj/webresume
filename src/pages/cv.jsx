import Text from "../components/text";

export default function works() {
    const cvText = [
        { key: "1cv", link: "https://drive.google.com/file/d/182x97RaS9COFNxQu15a7GVAm0PTNsfYB/view?usp=sharing", text: "English" },
        { key: "2cv", link: "https://drive.google.com/file/d/1uxvhr-HfXQ2TXPwg8VVDaqP160-kF4Dm/view", text: "Russian" },
    ];

    return <Text items={cvText}></Text>;
}
