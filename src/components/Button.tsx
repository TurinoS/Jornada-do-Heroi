import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode,
    onClick: () => void,
}

export default function Button({ children, onClick }: ButtonProps) {
    return(
        <button className="bg-[var(--purple)] rounded-xl px-4 py-1 flex items-center gap-1" onClick={onClick}>{children}</button>
    )
}