"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter } from "next/navigation";
import React from "react";

function InterceptedFullScreenImagePage({ params }) {
  const router = useRouter
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  console.log("newsSlug: ", newsSlug);
  console.log("newsItem: ", newsItem);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back}/>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}

export default InterceptedFullScreenImagePage;
