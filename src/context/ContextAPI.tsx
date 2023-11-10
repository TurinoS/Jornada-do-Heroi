'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface HeoresData {
    id: number,
    name: string,
    // slug: string,
    powerstats: {
        inteligence: number,
        strength: number,
        speed: number,
        durability: number,
        power: number,
        combat: number,
    }
    // appearance: {
    //     gender: string,
    //     race: string,
    //     height: string[],
    //     weight: string[],
    //     eyeColor: string,
    //     hairColor: string,
    // }
    // biography: {
    //     fullName: string,
    //     alterEgos: string,
    //     aliases: string,
    // }
    images: {
        sm: string,
        md: string,
    }
}

type CardProps = {
    id: number;
    imgs: {
      sm: string,
      md: string,
    };
    name: string;
    powerstats: {
      [key: string]: number;
    };
    totalPower: number;
  };

type ContextAPI = {
    data: HeoresData[];
    cardsSelection: CardProps[];
    setCardsSelection: Dispatch<SetStateAction<CardProps[]>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    heroesPerPage: number;
    heroesToRender: HeoresData[];
    search: string;
    setSearch: Dispatch<SetStateAction<string>>
}

export const ContextAPI = createContext<ContextAPI>({
    data: [],
    cardsSelection: [],
    setCardsSelection: () => {},
    page: 1,
    setPage: () => {},
    heroesPerPage: 24,
    heroesToRender: [],
    search: "",
    setSearch: () => {},
})

export default function ContextAPIProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<HeoresData[]>([])
    const [heroesToRender, setHeroesToRender] = useState<HeoresData[]>([])
    const [cardsSelection, setCardsSelection] = useState<CardProps[]>([])
    const [page, setPage] = useState(1);
    const [search , setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans');
            const jsonData = await res.json();
            setData(jsonData);
        };
        fetchData();
    }, []);
      
    const heroesPerPage = 24;
    const startIndex = (page - 1) * heroesPerPage;
    const endIndex = startIndex + heroesPerPage;

    useEffect(() => {
        if (search !== "") {
            const filteredHeroes = data.filter((hero) =>
                hero.name.toLowerCase().includes(search.toLowerCase())
            );
            setHeroesToRender(filteredHeroes)
        } else {
            setHeroesToRender(data.slice(startIndex, endIndex));
        }
    }, [data, page, search, startIndex, endIndex])

    return(
        <ContextAPI.Provider value={{ data, cardsSelection, setCardsSelection, page, setPage, heroesPerPage, heroesToRender, search, setSearch }}>
            {children}
        </ContextAPI.Provider>
    )
}