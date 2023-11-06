import Image from "next/image"

type CardProps = {
    id: number,
    name: string,
    img: string,
}

export default function HeroCard({ id, name, img }: CardProps) {
    return(
        <div>
            <Image src={img} alt={name} width={150} height={150} />
            <h3>{name}</h3>
        </div>
    )
}