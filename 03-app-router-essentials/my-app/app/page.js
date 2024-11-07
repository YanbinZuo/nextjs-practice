import Header from "@/component/header";
import Link from "next/link";

export default function Home() {
  console.log("test");
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
      <p>
        <Link href="/blog">blog</Link>
      </p>
    </main>
  );
}
