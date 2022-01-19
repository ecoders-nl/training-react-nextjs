import Link from "next/link";

export default function Menu() {
  return (
    <ul>
      <li>
        <Link href="/">Homepage</Link>
      </li>
      <li>
        <Link href="/page2">Page 2</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/page4">Page 4</Link>
      </li>
    </ul>
  );
}
