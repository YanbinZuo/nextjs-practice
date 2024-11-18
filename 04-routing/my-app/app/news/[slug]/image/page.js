import { DUMMY_NEWS } from '@/dummy-news';
import React from 'react'

function FullScreenImagePage({params}) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(news => news.slug === newsSlug);

  
  console.log("newsSlug: ", newsSlug)
  console.log("newsItem: ", newsItem)
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}

export default FullScreenImagePage