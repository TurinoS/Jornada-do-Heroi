import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <h2 className="text-black">Hello, World!</h2>
      </div>
    </main>
  )
}
