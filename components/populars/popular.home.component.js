import PopularData from './popular.data';
import Link from 'next/link';


const PopularHomeComponent = () => {
    return(
        <div className="pt-5 lg:pt-10">
            <div className="text-center">
                <h4 className="featured-header tracking-widest subpixel-antialiased sm:tracking-wider">Popular</h4>
            </div>
            <div className="grid grid-cols-3 p-4 text-center text-white space-x-2">
                {PopularData.slice(0,3).map((popular, index) =>(
                    <div key={index} className="cursor-pointer">
                        <Link as={`/all-populars/${popular.popularUID}/${popular.title}`} href="/all-populars/[popularUID]/[title]">
                            <div className="shadow-xl popular-box h-60 bg-white rounded-md" style={{backgroundImage:`url(${popular.image})` }} key={popular.popularUID}>
                                <div className={`${popular.classes}`}>
                                    <h2 className="text-md sm:text-2xl">{popular.title}</h2>
                                    <p className="text-xs md:text-sm">{popular.description}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
                )}
            </div>
            <div className="text-center pt-1">
                <Link href="/popular">
                    <button className="h-10 w-20 bg-white transform scale-100 hover:scale-125 rounded text-md tracking-wider shadow-xl opacity-100 transition ease-in duration-700">more</button>
                </Link>
            </div>
            <style>
                {
                    `
                    .popular-box{
                        background-repeat: no-repeat;
                        background-position: center;
                        overflow: hidden;
                        position: relative;
                    }
                    .popular-box div{
                        position: absolute;
                        bottom: 0px;
                    }
                    `
                }
            </style>
        </div>
    )
}

export default PopularHomeComponent;