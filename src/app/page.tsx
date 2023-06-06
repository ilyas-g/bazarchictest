"use client"
import React from 'react';
import styles from './page.module.css'
import ListWeathers from "./initial-data/list-weathers";
import { Weather } from "./types";

async function getWeathers(city: string) {

  const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=7c1fa394b754413638f4de935b582079`);
  const weathers = (await res.json()) as Weather[];
  return weathers;
}

export default async function Home() {
  const weathers = await getWeathers('Paris');
  return (

    <main className={styles.main}>
      <ListWeathers weathers={weathers} />
    </main>
  )
}
