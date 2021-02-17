import Link from 'next/link';
import SearchBar from '../search/searchBar.home.component';

const HeaderComp = () => {
    return(
        <nav className="hidden md:flex bg-gray-900 h-12 w-screen">
            <div className="lg:flex-1">
                <h6 className="pl-16 lg:pl-32 pt-2.5 text-xl tracking-widest italic font-light pr-16 lg:pr-0">Title</h6>
            </div>
            <div className="flex-1 flex text-center space-x-2 lg:space-x-1.5 cursor-pointer ">
                <span className="flex-1 h-auto w-auto text-xl tracking-wide lg:tracking-widest font-light pt-2.5 hover:bg-gray-600 rounded-lg">item 1</span>
                <span className="flex-1 h-auto w-auto text-xl tracking-wide lg:tracking-widest font-light pt-2.5 hover:bg-gray-600 rounded-lg">item 2</span>
                <span className="flex-1 h-auto w-auto text-xl tracking-wide lg:tracking-widest font-light pt-2.5 hover:bg-gray-600 rounded-lg">item 3</span>
                <span className="flex-1 h-auto w-auto text-xl tracking-wide lg:tracking-widest font-light pt-2.5 hover:bg-gray-600 rounded-lg">item 4</span>
            </div>
            <div className="flex-1 lg:pl-4 flex">
                <div className="flex-1 pt-2.5">
                    <form className="pl-6 lg:pl-8">
                        <input type="text" placeholder="Search all places near you" className="h-7 w-48 placeholder-gray-500 focus:placeholder-gray-900 placeholder-opacity-100 lg:w-80 text-red-300 rounded text-center lg:tracking-widest font-normal text-sm"/>
                        <button type="submit" className="hidden"></button>
                    </form>
                </div>
                <div className="text-center pt-2 pr-3">
                    <button className="h-7 w-auto lg:px-3 px-1 text-xl tracking-widest font-light rounded-lg">login</button>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComp;
