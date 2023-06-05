"use client";

import { Weather } from "../types";
import { useQuery } from "@tanstack/react-query";
import React from "react";

async function getWeathers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/Weathers");
  const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Paris&cnt=5&appid=829e54a4fd8c931ddfeac6a91823cffb`);
  const weathers = (await res.json()) as Weather[];
  return weathers;
}

export default function Listweathers({ weathers }: { weathers: Weather[] }) {
    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["initial-weathers"],
        queryFn: () => getWeathers(),
        initialData: weathers,
    });
    // console.log(data.list[1].dt)

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>

      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          <h3>{data.cnt}</h3>
          {/* {data.map((weather) => (
            <div
              key={weather.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >

              <h3>{weather.city}</h3>
            </div>
          ))} */}
        </div>
      ) : null}
    </main>
  );
}
