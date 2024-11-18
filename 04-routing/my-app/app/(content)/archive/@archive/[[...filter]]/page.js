import NewsList from "@/components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import React from "react";

function page({ params }) {
  const filter = params.filter;
  console.log("filter: ", filter);

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let newsContent = <p>No news found for the selected period.</p>;
  let yearsMonths = getAvailableNewsYears();
  let news;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    yearsMonths = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    yearsMonths = [];
  }

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)) ||
    (filter && filter.length > 2)
  ) {
    throw new Error("Invalid filter.");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {yearsMonths.map((ym) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${ym}`
                : `/archive/${ym}`;

              return (
                <li key={ym}>
                  <Link href={href}>{ym}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}

export default page;
