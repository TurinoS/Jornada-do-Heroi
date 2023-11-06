'use client'

import Header from "@/components/Header";
import HeroCard from "@/components/HeroCard";
import Sidebar from "@/components/Sidebar";
import { ContextAPI } from "@/context/ContextAPI";
import { useContext } from "react";

export default function Home() {
  const { data } = useContext(ContextAPI);

  return (
    <main className="min-h-screen flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <section className="flex gap-6 flex-wrap">
          {data.map((hero) => (
            <HeroCard key={hero.id} id={hero.id} name={hero.name} img={hero.images.md} />
          ))}
        </section>
      </div>
    </main>
  )
}
