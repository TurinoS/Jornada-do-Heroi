'use client'

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Button from "@/components/Button";
import Header from "@/components/Header";
import HeroCard from "@/components/HeroCard";
import Sidebar from "@/components/Sidebar";
import { ContextAPI } from "@/context/ContextAPI";
import { useContext } from "react";
import Modal from "@/components/Modal";
import ReturnToTop from "@/components/ReturnToTop";

export default function Home() {
  const { data, page, setPage, heroesPerPage, heroesToRender, cardsSelection } = useContext(ContextAPI);

  return (
    <main className="min-h-screen flex">
      <Sidebar />
      <div className="w-full py-4 ml-[175px]">
        <Header />
        <div className="flex justify-between px-10 pt-4">
          <Button onClick={() => {page > 1 && setPage(page - 1)}}><AiOutlineLeft />Previous Page</Button>
          <p>page {page} / {Math.ceil(data.length / heroesPerPage)}</p>
          <Button onClick={() => {page < (data.length / heroesPerPage) && setPage(page + 1)}}>Next Page<AiOutlineRight /></Button>
        </div>
        <section className="flex gap-6 flex-wrap px-10 py-8 justify-between">
          {heroesToRender.map((hero) => (
            <HeroCard key={hero.id} powerstats={hero.powerstats} name={hero.name} imgs={hero.images} id={hero.id} sm={false} />
          ))}
        </section>
        <ReturnToTop />
        {cardsSelection.length === 2 && <Modal />}
      </div>
    </main>
  )
}
