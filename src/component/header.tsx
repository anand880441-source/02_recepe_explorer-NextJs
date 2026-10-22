import Link from "next/link"

const Header = () => {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
                <Link
                    href="/"
                    className="text-lg font-bold tracking-tight text-emerald-900"
                >
                    EVERYDAY-RECIPES
                </Link>

                <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
                    <Link className="transition-colors hover:text-emerald-800" href="/">Recipe</Link>
                    <Link className="transition-colors hover:text-emerald-800" href="/cuisines">Cuisines</Link>
                    <Link className="transition-colors hover:text-emerald-800" href="/about">About</Link>
                </nav>

                <Link
                    href="/recipes/new"
                    className="rounded-md bg-emerald-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-900"
                >
                    Add-Recipe +
                </Link>
            </div>
        </header>
    )
}

export default Header