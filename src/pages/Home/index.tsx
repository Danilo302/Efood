import Header from '../../components/Header'
import ListRestaurant from '../../components/ListRestaurant'
import Loader from '../../components/Loader'

import { useGetFeaturedRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data } = useGetFeaturedRestaurantQuery()

  if (data) {
    return (
      <>
        <Header />
        <ListRestaurant restaurants={data} />
      </>
    )
  }
  return <Loader />
}

export default Home
