import Link from "next/link";
import React from "react";

function NewsList({news}) {
  return (
    <div>
      <ul className="news-list">
        {news.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
