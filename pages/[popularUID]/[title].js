import { useRouter } from 'next/router';
import AllPopularItems from '../../components/populars/popular.data';

const AllItems = () =>{
    const router = useRouter();

    const {popularUID, title} = router.query;

    return(
        AllPopularItems.map((item) => {
            if(title.localeCompare(item.title) == 0){
                return(
                    <div key={popularUID}>
                        <h1>{item.title}</h1>
                    </div>
                )
            }
        })
    )
}

export default AllItems;