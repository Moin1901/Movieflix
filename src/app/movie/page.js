import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";
const movie = async () => {
  const url = process.env.RAPID_KEY;
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e7a660642bmshe740aaef27b814bp1d507cjsnb32a7d558568",
      "X-RapidAPI-Host": "netflix-data.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(main_data);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default movie;
