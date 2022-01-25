import Link from "next/link";
import styles from "../styles/Menu.module.css";

export default function Menu() {
  return (
    <ul className={styles.list}>
      <li className={styles.listitem}>
        <Link href="/">Homepage</Link>
      </li>
      <li className={styles.listitem}>
        <Link href="/page2">Page 2</Link>
      </li>
      <li className={styles.listitem}>
        <Link href="/about">About</Link>
      </li>
      <li className={styles.listitem}>
        <Link href="/page4">Page 4</Link>
      </li>
    </ul>
  );
}
