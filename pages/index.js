import styles from "../styles/Home.module.css";
import Link from "next/link";
import Menu from "../components/Menu";
import Card from "../components/Card";
import Login from "../components/Login";

const cards = [
  {
    title: "Amsterdam",
    description:
      "The capital of the Netherlands is a beautiful city with a lot of history. A nice place to live and work.",
    image: "/images/amsterdam.jpg",
    width: 300,
    height: 200,
  },
  {
    title: "Indonesia",
    description:
      "Indonesia is a beautiful country with a lot of nature. It has thousands of islands and a lot of beautiful beaches.",
    image: "/images/indonesia.jpg",
    width: 283,
    height: 188,
  },
  {
    title: "eCoders",
    description:
      "eCoders is a Dutch company that develops web applications. We are located in Amsterdam.",
    image: "/images/ecoders.svg",
    width: 300,
    height: 107,
  },
];

export default function Home() {
  const title = "Hello everybody in the world!";

  return (
    <div className={styles.container}>
      <Menu />

      <Login />

      <h1>{title}</h1>

      {cards.map(function (card) {
        return (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
            width={card.width}
            height={card.height}
          />
        );
      })}
    </div>
  );
}
