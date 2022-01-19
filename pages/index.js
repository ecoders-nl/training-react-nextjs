import styles from "../styles/Home.module.css";
import Link from "next/link";
import Menu from "../components/Menu";

export default function Home() {
  const title = "Hello again Bandung!";

  return (
    <div className={styles.container}>
      <Menu />

      <h1>{title}</h1>
    </div>
  );
}
