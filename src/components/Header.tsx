import { BiSearchAlt2 } from "react-icons/bi";

export default function Header() {
    return(
        <header className="flex justify-center items-center px-6 py-2 gap-40">
            <h1 className="text-5xl font-bold" style={{ textShadow: "2px 2px 4px var(--purple)" }}>Hero&apos;s Journey</h1>
            <div className="flex items-center text-2xl">
                <span className="relative left-9"><BiSearchAlt2 /></span>
                <input type="text" name="search" id="search" placeholder="Search a hero" className="pl-10 text-base py-1 bg-[var(--black)] rounded-full outline-none border border-[var(--purple)]" />
            </div>
        </header>
    )
}