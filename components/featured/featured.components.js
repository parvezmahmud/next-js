const FeaturedRestaurants = () => {
    return(
        <div>
            <div className="text-center">
                <h4 className="featured-header tracking-widest subpixel-antialiased sm:tracking-wider">Featured items</h4>
            </div>
            <div className="grid grid-cols-3 p-4 text-center text-white space-x-2">
            <div className="shadow-xl res-box h-60 rounded-md">
                <div className="bg-gray-900 lg:bg-opacity-0 hover:bg-opacity-80 h-20 w-auto bg-opacity-80 transition ease-in duration-300">
                    <h2 className="text-md sm:text-2xl">Featured item 1</h2>
                    <p className="text-xs md:text-sm">This featured item is an excellent place to spend time with friends and family</p>
                </div>
            </div>
            <div className="shadow-xl res-box-1 h-60 rounded-md">
                <div className="bg-red-300 lg:bg-opacity-0 hover:bg-opacity-80 h-20 w-auto bg-opacity-80  transition ease-in duration-300">
                    <h2 className="text-md sm:text-2xl">Featured item 2</h2>
                    <p className="text-xs md:text-sm">This featured item is an excellent place to spend time with friends and family</p>
                </div>
            </div>
            <div className="shadow-xl res-box-2 h-60 rounded-md">
                <div className="bg-green-300 lg:bg-opacity-0 hover:bg-opacity-80 h-20 w-auto bg-opacity-80  transition ease-in duration-300">
                    <h2 className="text-md sm:text-2xl">Featured item 3</h2>
                    <p className="text-xs md:text-sm">This featured item is an excellent place to spend time with friends and family</p>
                </div>
            </div>
            
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
                        background-image: url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80");
                        background-repeat: no-repeat;
                        background-position: center;
                        overflow: hidden;
                        position: relative;
                    }
                    .res-box div{
                        position: absolute;
                        bottom: 0px;
                    }


                    .res-box-1{
                        background-image: url("https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
                        background-position: center;
                        overflow: hidden;
                        position: relative;
                    }
                    .res-box-1 div{
                        position: absolute;
                        bottom: 0px;
                    }

                    .res-box-2{
                        background-image: url("https://images.unsplash.com/photo-1507412306066-2977c0e91a68?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80");
                        background-position: center;
                        overflow: hidden;
                        position: relative;
                    }
                    .res-box-2 div{
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