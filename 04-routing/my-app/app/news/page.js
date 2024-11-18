import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import NewsList from "@/components/NewsList";

function page() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}

export default page;
