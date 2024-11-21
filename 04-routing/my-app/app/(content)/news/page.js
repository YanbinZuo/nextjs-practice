import NewsList from "@/components/NewsList";

async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");
  if (!response.ok) {
    throw new Error("fetch data failed");
  }

  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}

export default NewsPage;
