import styles from "../styles/Home.module.css";
import Link from "next/link";
import Menu from "../components/Menu";

const cards = [
  {
    title: "Amsterdam",
    description:
      "The capital of the Netherlands is a beautiful city with a lot of history. A nice place to live and work.",
    image: "images/amsterdam.jpg",
  },
  {
    title: "Indonesia",
    description:
      "Indonesia is a beautiful country with a lot of nature. It has thousands of islands and a lot of beautiful beaches.",
    image: "images/indonesia.jpg",
  },
  {
    title: "eCoders",
    description:
      "eCoders is a Dutch company that develops web applications. We are located in Amsterdam.",
    image: "images/ecoders.svg",
  },
];

export default function Home() {
  const title = "Hello again Bandung!";

  return (
    <div className={styles.container}>
      <Menu />

      <h1>{title}</h1>
    </div>
  );
}
