import Carousel from "../components/Carousel/Carousel"
import Category from "../components/category/Category"
import Features from "../components/Features/Features"
import MidBanner from "../components/MidBanner/MidBanner"


const Home = () => {
  return (
    <div>
      <Carousel />
      <Category />
      <MidBanner />
      <Features />
    </div>
  )
}

export default Home
