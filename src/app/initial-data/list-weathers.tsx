"use client";

import { Weather } from "../types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from 'next/image'
import {
    MainContainer,
    MainContainerBlock,
    SubContainer,
    SubContainerBlock,
    City,
    Temperature,
    WeatherContainer,
    DateSub,
    DescSub,
    NowDate,
    MainDesc
} from './list-weathers.styled'

async function getWeathers() {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Paris&cnt=5&appid=7c1fa394b754413638f4de935b582079`);
  const weathers = (await res.json()) as Weather[];
  return weathers;
}

export default function Listweathers({ weathers }: { weathers: Weather[] }) {
    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["initial-weathers"],
        queryFn: () => getWeathers(),
        initialData: weathers,
    });

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>

    <WeatherContainer>
        <MainContainer>
            <div>
                <MainContainerBlock>
                    <City>Munich</City>
                    <NowDate>Wed 22 August</NowDate>
                </MainContainerBlock>
                <MainContainerBlock>
                    <Temperature>30 C</Temperature>
                    <MainDesc>27 / 17 C</MainDesc>
                    <p>Moderate or heavy rain shower</p>
                </MainContainerBlock>
                <MainContainerBlock>
                    <MainDesc>Wind: 7 km/h</MainDesc>
                    <MainDesc>Moderate or heavy rain shower</MainDesc>
                </MainContainerBlock>
            </div>
            <div>
                <Image
                    // className={styles.logo}
                    src="/pluvieux.png"
                    alt="Next.js Logo"
                    width={120}
                    height={120}
                    priority
                />
            </div>
        </MainContainer>
        <SubContainer>
            <SubContainerBlock>
                <DateSub>Thu 23 August</DateSub>
                <DescSub>Moderate or heavy rain shower</DescSub>
                <small>27 / 17 C</small>
            </SubContainerBlock>
            <SubContainerBlock>
                <DateSub>Thu 23 August</DateSub>
                <DescSub>Moderate or heavy rain shower</DescSub>
                <small>27 / 17 C</small>
            </SubContainerBlock>
            <SubContainerBlock>
                <DateSub>Thu 23 August</DateSub>
                <DescSub>Moderate or heavy rain shower</DescSub>
                <small>27 / 17 C</small>
            </SubContainerBlock>
            <SubContainerBlock>
                <DateSub>Thu 23 August</DateSub>
                <DescSub>Moderate or heavy rain shower</DescSub>
                <small>27 / 17 C</small>
            </SubContainerBlock>
        </SubContainer>
    </WeatherContainer>

      {/* {error ? (
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
          {data.map((weather) => (
            <div
              key={weather.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >

              <h3>{weather.city}</h3>
            </div>
          ))} 
        </div>
      ) : null} */}
    </main>
  );
}
