import Text from "../components/text";

export default function works() {
    const cvText = [
        { key: "1cv", link: "https://drive.google.com/file/d/1efPpqmave8WzRxaKiXEYvPCzTenfkuI6/view?usp=sharing", text: "Russian.pdf" },
        { key: "2cv", link: "https://drive.google.com/file/d/11bwjBUfwBeiFdYHNCfGOxqCl1uE8KGV4/view?usp=sharing", text: "English.pdf" },
    ];

    return <Text items={cvText}></Text>;
}
