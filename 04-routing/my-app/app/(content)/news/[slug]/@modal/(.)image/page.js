import ModalBackdrop from "@/components/ModalBackdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

async function InterceptedFullScreenImagePage({ params }) {
  const newsSlug = params.slug;
  // const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);
  const newsItem = await getNewsItem(newsSlug);

  console.log("newsSlug: ", newsSlug);
  console.log("newsItem: ", newsItem);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}

export default InterceptedFullScreenImagePage;
