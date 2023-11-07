'use client'

import { ReactNode, createContext, useEffect, useState } from "react";

interface HeoresData {
    id: number,
    name: string,
    slug: string,
    powerstats: {
        inteligence: number,
        strength: number,
        speed: number,
        durability: number,
        power: number,
        combat: number,
    }
    appearance: {
        gender: string,
        race: string,
        height: string[],
        weight: string[],
        eyeColor: string,
        hairColor: string,
    }
    biography: {
        fullName: string,
        alterEgos: string,
        aliases: string,
    }
    images: {
        md: string,
    }
}

type ContextAPI = {
    data: HeoresData[]
}

export const ContextAPI = createContext<ContextAPI>({
    data: []
})

export default function ContextAPIProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<HeoresData[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans');
            const jsonData = await res.json();
            setData(jsonData);
        };
        fetchData();
    }, []);

    return(
        <ContextAPI.Provider value={{ data }}>
            {children}
        </ContextAPI.Provider>
    )
}