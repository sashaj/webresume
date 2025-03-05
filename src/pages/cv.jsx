import Text from "../components/text";

export default function works() {
    const cvText = [
        { key: "1cv", link: "https://drive.google.com/file/d/1e6FwWlAi93XhFwxNd98d2nv0zLRThMhi/view?usp=sharing", text: "Russian.pdf" },
        { key: "2cv", link: "https://drive.google.com/file/d/182x97RaS9COFNxQu15a7GVAm0PTNsfYB/view?usp=sharing", text: "English.pdf" },
    ];

    return <Text items={cvText}></Text>;
}
