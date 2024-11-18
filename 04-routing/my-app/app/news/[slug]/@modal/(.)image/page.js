import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

function InterceptedFullScreenImagePage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  console.log("newsSlug: ", newsSlug);
  console.log("newsItem: ", newsItem);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}

export default InterceptedFullScreenImagePage;
