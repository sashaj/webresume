import Text from "../components/text";

export default function works() {
    const cvText = [
        { key: "1cv", link: "https://drive.google.com/file/d/1e6FwWlAi93XhFwxNd98d2nv0zLRThMhi/view?usp=sharing", text: "Russian.pdf" },
        { key: "2cv", link: "https://drive.google.com/file/d/1iBVkJ5cH_aQP-neP0FKmdximDzohcn1a/view?usp=sharing", text: "English.pdf" },
    ];

    return <Text items={cvText}></Text>;
}
