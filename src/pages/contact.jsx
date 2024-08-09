import Text from "../components/text";

export default function contact() {
    const contactText = [
        { key: "1co", link: "mailto:alexanderivanovset@gmail.com", text: "alexanderivanovset@gmail.com" },
        { key: "2co", link: "https://telegram.me/to_adf", text: "Telegram: @to_adf" },
        { key: "3co", link: "https://www.linkedin.com/in/alxndrivanov/", text: "LinkedIn" },
        { key: "4co", link: "https://hh.ru/resume/e24afbd4ff0c768c7e0039ed1f47726c753258", text: "HeadHunter" },
        { key: "5co", link: "https://github.com/sashaj", text: "Github" },
        { key: "7o", link: "https://github.com/sashaj", text: "TEST7 Main" },
    ];

    return <Text items={contactText}></Text>;
}
