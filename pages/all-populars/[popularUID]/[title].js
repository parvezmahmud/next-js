import { useRouter } from 'next/router';
import AllPopularItems from '../../../components/populars/popular.data';
import Layout from '../../../layout/layout';
import _ from 'lodash';

const AllItems = () =>{
    const router = useRouter();

    const {popularUID, title} = router.query;

    return(
        AllPopularItems.map((item) => {
            if(String(title).localeCompare(item.title) == 0){
                return(
                  <Layout>
                      <div className="bg-white lg:p-16 p-4 text-center" key={popularUID}>
                          <div className="bg-gray-50 shadow-xl lg:p-12 p-4">
                          <img src={item.image} className="mx-auto lg:w-auto lg:h-96 lg:pb-8 pb-2.5" />
                          <h2 className="text-2xl lg:text-4xl tracking wide lg:tracking-wider font-extralight font-monospaced">{item.title}</h2>
                          <span className="text-base font-thin pt-2">{item.description}</span>
                          <section className="pt-2">
                          {
                            _.times(parseInt(item.rating), ()=>
                            <img className="w-6 h-6 inline" src={item.iconSource} />
                          )
                        }
                        </section>
                          <p className="pt-10 px-6 text-base font-serif font-thin text-justify">{item.reviewPost}</p>
                          </div>
                      </div>
                  </Layout>
                )
            }
        })
    )
}

export default AllItems;
