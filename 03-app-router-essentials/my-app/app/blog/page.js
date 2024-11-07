import Link from "next/link";
import React from "react";

function BlogPage() {
  return (
    <main>
      <h1>Blog page</h1>
      <p>
        <Link href="/blog/blog-1">Blog 1</Link>
      </p>
      <p>
        <Link href="/blog/blog-2">Blog 2</Link>
      </p>
    </main>
  );
}

export default BlogPage;
