import Posts from "@/components/Posts";
import { getPosts } from "@/lib/posts";
import { Suspense } from "react";

// async function LatestPosts() {
//   const latestPosts = await getPosts(2);
//   return <Posts posts={latestPosts} />
// }

export default async function Home() {
  const latestPosts = await getPosts(2);
  console.log("latestPosts: ", latestPosts)

  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <Posts posts={latestPosts} />
        </Suspense>
      </section>
    </>
  );
}
