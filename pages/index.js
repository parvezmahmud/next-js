import Layout from '../layout/layout';
import FeaturedRestaurants from '../components/featured/featured.components';
import PopularHomeComponent from '../components/populars/popular.home.component';
import NearYouHomeComponent from '../components/near-you/nearYou.home.component';

export default function Home() {
  return (
    <Layout>
      <FeaturedRestaurants />
      <PopularHomeComponent />
      <NearYouHomeComponent />
    </Layout>
  )
}
