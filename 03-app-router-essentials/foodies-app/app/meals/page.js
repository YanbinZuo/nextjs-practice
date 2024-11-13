import { getMeals } from "@/lib/meals";
import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid";
import MealsLoading from "@/components/loading/LoadingOut";

export const metadata = {
  title: "All meals",
  description: "Browse the delicious meals shared by us",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals || []} />;
}

function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>

      <Suspense fallback={<MealsLoading />}>
        <Meals />
      </Suspense>
    </>
  );
}

export default MealsPage;
