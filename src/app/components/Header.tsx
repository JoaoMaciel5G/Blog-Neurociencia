import Link from "next/link"

export default function Header(){
    return(
        <>
            <header className="flex justify-between py-12 mx-80">
                <div>
                    <Link href="/" className={`font-medium text-3xl`}>Compreendendo o cérebro</Link>
                </div>
                <nav className="flex gap-5">
                    <Link href="/" className="text-xl hover:text-zinc-500">Inicio</Link>
                    <Link href="articles" className="text-xl hover:text-zinc-500">Posts</Link>
                    <Link href="/references" className="text-xl hover:text-zinc-500">Referências</Link>
                </nav>
            </header>
            <div className="bg-zinc-200 py-8 flex justify-center gap-6">
                <Link className="text-xl font-medium border-[1px] border-zinc-800 rounded-lg p-2 hover:bg-zinc-950 hover:text-zinc-50" href="/desenvolvimento-pessoal">Desenvolvimento Pessoal</Link>
                <Link className="text-xl font-medium border-[1px] border-zinc-800 rounded-lg p-2 hover:bg-zinc-950 hover:text-zinc-50" href="/neurociencia">Neurociências</Link>
                <Link className="text-xl font-medium border-[1px] border-zinc-800 rounded-lg p-2 hover:bg-zinc-950 hover:text-zinc-50" href="/dicas">Dicas para o dia a dia</Link>
            </div>
        </>
    )
}