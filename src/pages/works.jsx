import Text from "../components/text";

export default function works() {
    const worksText = [
        { key: "1wo", link: "https://appmost.ru/", text: "appmost.ru" },
        { key: "2wo", link: "https://finadtech.com/", text: "finadtech.com" },
        { key: "3wo", link: "https://restomarket.me/", text: "restomarket.me" },
        { key: "4wo", link: "https://glav-beer.ru/", text: "glav-beer.ru" },
        { key: "5wo", link: "https://fin-loan.com/", text: "fin-loan.com" },
        { key: "6wo", link: "https://aroundtheworld.leadgid.ru/", text: "aroundtheworld.leadgid.ru" },
        { key: "7wo", link: "https://telezavr.com/", text: "telezavr.com" },
        { key: "8wo", link: "https://aostng.ru/", text: "aostng.ru" },
    ];

    return <Text items={worksText}></Text>;
}
