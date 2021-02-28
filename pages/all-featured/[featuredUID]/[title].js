import { useRouter } from 'next/router';
import FeaturedItems from '../../../components/featured/featured.data';

const FeaturedItemPage = () => {
    const router = useRouter();
    const { featuredUID, title } = router.query;

    return(
        FeaturedItems.map((item) => {
            if (String(title).localeCompare(item.title) == 0) {
                return(
                    <div>{item.title}</div>
                )
            }
        })
    ) 
}

export default FeaturedItemPage;