import PopularData from './popular.data';


const PopularHomeComponent = () => {
    return(
        <div className="pt-5 lg:pt-10">
            <div className="text-center">
                <h4 className="featured-header tracking-widest subpixel-antialiased sm:tracking-wider">Popular</h4>
            </div>
            <div className="grid grid-cols-3 p-4 text-center text-white space-x-2">
                {PopularData.map((popular) =>(
                    <div className="shadow-xl popular-box h-60 bg-gray-700 bg-opacity-50 rounded-md" style={{backgroundImage:`url(${popular.image})` }} key={popular.id}>
                        <div className="bg-gray-900 lg:bg-opacity-0 hover:bg-opacity-80 h-20 w-full bg-opacity-80 transition ease-in duration-300">
                            <h2 className="text-md sm:text-2xl">{popular.title}</h2>
                            <p className="text-xs md:text-sm">{popular.description}</p>
                        </div>
                    </div>
                )
                )}
            </div>
            <div className="text-center pt-1">
                <button className="border-solid border-4 h-10 w-20 bg-gray-100 transform scale-100 hover:scale-125 rounded text-md tracking-wider shadow-xl opacity-100 transition ease-in duration-700">more</button>
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