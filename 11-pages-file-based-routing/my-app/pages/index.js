import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
        <Link href="/blogs">Blogs</Link>
        </li>
        <li>
        <Link href="clients">Clients</Link>
        </li>
        <li>
        <Link href="portfolio">Portfolio</Link>
        </li>
      </ul>
    </>
  );
}
