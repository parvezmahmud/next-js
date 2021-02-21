import FeaturedData from './featured.data';

const FeaturedRestaurants = () => {
    return(
        <div>
            <div className="text-center">
                <h4 className="featured-header tracking-widest subpixel-antialiased sm:tracking-wider">Featured items</h4>
            </div>
            <div className="grid grid-cols-3 p-4 text-center text-white space-x-2">
            
                {FeaturedData.slice(0,3).map((featured) => (
                    <div className="shadow-xl res-box h-60 rounded-md" style={{backgroundImage:`url(${featured.image})`}}>
                        <div className={`${featured.classes}`}>
                            <h2 className="text-md sm:text-2xl">{featured.title}</h2>
                            <p className="text-xs md:text-sm">{featured.description}</p>
                        </div>
                    </div>
                ))}

        </div>
        <div className="text-center pt-1">
            <button className="border-solid border-4 h-10 w-20 bg-gray-100 transform scale-100 hover:scale-125 rounded text-md tracking-wider shadow-xl opacity-100 transition ease-in duration-700">more</button>
        </div>

        <style>
                {
                    `
                    @import url('https://fonts.googleapis.com/css2?family=Benne&display=swap');

                    .featured-header{
                        font-family: 'Benne', serif;
                        font-size: 25px;
                        font-weight: 100;
                    } 

                    .res-box{
                        background-repeat: no-repeat;
                        background-position: center;
                        overflow: hidden;
                        position: relative;
                    }
                    .res-box div{
                        position: absolute;
                        bottom: 0px;
                    }
                    `
                }
            </style>
    </div>
    )
}

export default FeaturedRestaurants;