import NewsList from "@/components/NewsList";
import { getAllNews } from "@/lib/news";

async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}

export default NewsPage;
