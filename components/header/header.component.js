import Link from 'next/link';

const HeaderComp = () => {
    return(
        <div className="hidden md:block p-4 bg-gray-600 subpixel-antialiased font-sans text-white text-opacity-95">
            <nav className="flex cursor-pointer">
                <header className="flex-grow">
                <Link href="/"><span className="py-3 px-6 hover:bg-gray-400 rounded-md hover:font-serif hover:text-gray-900">Home</span></Link>
                </header>
                <div className="flex-grow text-right block">
                    <span className="p-3 hover:bg-gray-400 rounded-md hover:font-serif hover:text-gray-900">Near you</span>
                    <span className="p-3 hover:bg-gray-400 rounded-md hover:font-serif hover:text-gray-900">Featured</span>
                    <span className="p-3 hover:bg-gray-400 rounded-md hover:font-serif hover:text-gray-900">Top Rated</span>
                    <span className="p-3 hover:bg-gray-400 rounded-md hover:font-serif hover:text-gray-900">Local Favourites</span>
                    <Link href="/blogs"><span className="p-3 hover:bg-gray-400 rounded-md hover:font-serif hover:text-gray-900">Food Blogs</span></Link>
                    <span className="p-3 hover:bg-gray-400 rounded-md hover:font-serif hover:text-gray-900">Login</span>
                </div>
            </nav>
        </div>
    )
}

export default HeaderComp;
