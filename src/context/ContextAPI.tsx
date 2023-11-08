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
  };

type ContextAPI = {
    data: HeoresData[];
    cardsSelection: CardProps[];
    setCardsSelection: Dispatch<SetStateAction<CardProps[]>>;
}

export const ContextAPI = createContext<ContextAPI>({
    data: [],
    cardsSelection: [],
    setCardsSelection: () => {},
})

export default function ContextAPIProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<HeoresData[]>([])
    const [cardsSelection, setCardsSelection] = useState<CardProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans');
            const jsonData = await res.json();
            setData(jsonData);
        };
        fetchData();
    }, []);

    return(
        <ContextAPI.Provider value={{ data, cardsSelection, setCardsSelection }}>
            {children}
        </ContextAPI.Provider>
    )
}