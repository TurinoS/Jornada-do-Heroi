'use client'

import Button from "@/components/Button";
import Header from "@/components/Header";
import HeroCard from "@/components/HeroCard";
import Sidebar from "@/components/Sidebar";
import { ContextAPI } from "@/context/ContextAPI";
import { useContext, useState } from "react";

export default function Home() {
  const { data } = useContext(ContextAPI);
  const [page, setPage] = useState(1);

  const heroesPerPage = 20;
  const startIndex = (page - 1) * heroesPerPage;
  const endIndex = startIndex + heroesPerPage;
  const heroesToRender = data.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen flex">
      <Sidebar />
      <div className="w-full py-4">
        <Header />
        <div className="flex justify-between px-10 pt-4">
          <Button onClick={() => {page > 1 && setPage(page - 1)}}>Previous Page</Button>
          <p>page {page} / {Math.ceil(data.length / heroesPerPage)}</p>
          <Button onClick={() => {page < (data.length / heroesPerPage) && setPage(page + 1)}}>Next Page</Button>
        </div>
        <section className="flex gap-6 flex-wrap px-10 py-8 justify-between">
          {heroesToRender.map((hero) => (
            <HeroCard key={hero.id} powerstats={hero.powerstats} name={hero.name} img={hero.images.md} />
          ))}
        </section>
      </div>
    </main>
  )
}
