"use client";

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
  const {
    data,
    page,
    setPage,
    heroesPerPage,
    heroesToRender,
    cardsSelection,
    search,
  } = useContext(ContextAPI);

  return (
    <main className="min-h-screen flex">
      <Sidebar />
      <div className="w-full md:py-4 py-1 md:ml-[175px] mb-[150px] md:mb-0">
        <Header />
        <div className="flex justify-center gap-4 px-2 pt-4">
          <Button
            onClick={() => {
              page > 1 && setPage(page - 1);
            }}
          >
            <AiOutlineLeft />
          </Button>
          <p>
            Page {page} / {Math.ceil(data.length / heroesPerPage)}
          </p>
          <Button
            onClick={() => {
              page < data.length / heroesPerPage && setPage(page + 1);
            }}
          >
            <AiOutlineRight />
          </Button>
        </div>
        {heroesToRender.length === 0 && search ? (
          <span className="flex justify-center pt-32 text-2xl">
            Hero not found
          </span>
        ) : heroesToRender.length === 0 ? (
          <span className="flex justify-center pt-32 text-2xl">Loading...</span>
        ) : (
          <section className="flex gap-2 md:gap-6 flex-wrap px-2 md:px-10 py-8 justify-center md:justify-between">
            {heroesToRender.map((hero) => (
              <HeroCard
                key={hero.id}
                powerstats={hero.powerstats}
                name={hero.name}
                imgs={hero.images}
                id={hero.id}
                sm={false}
              />
            ))}
          </section>
        )}
        <ReturnToTop />
        {cardsSelection.length === 2 && <Modal />}
      </div>
    </main>
  );
}
