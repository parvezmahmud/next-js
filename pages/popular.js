import _ from 'lodash';
import Link from 'next/link';

import AllPopular from '../components/populars/popular.data';
import Layout from '../layout/layout';


const PopularItem = () => {
    return(
        <Layout>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {AllPopular.map((item, index) => (
                    <div className="pb-3 lg:pb-6" key={index}>
                        <div className="mx-auto shadow-xl rounded-xl bg-white overflow-hidden">
                            <div className="flex">

                                <div className="flex-shrink-0">
                                    <img className="h-48 w-56 object-cover" src={item.image} />
                                </div>

                                <div className="p-8">
                                    <Link as={`/all-populars/${item.popularUID}/${item.title}`} href="/all-populars/[popularUID]/[title]" >
                                        <p className="text-lg font-light tracking-wider hover:underline cursor-pointer text-blue-500 lg:text-black">{item.title}</p>
                                    </Link>
                                    <section>

                                        {_.times(parseInt(item.rating), () => 
                                        <img className="w-4 h-4 inline" src={item.iconSource}/>
                                        )}

                                    </section>
                                    <p className="pt-2 text-sm">{item.description}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}   

export default PopularItem;