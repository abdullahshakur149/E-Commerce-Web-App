import React from 'react'
import Header from "../components/layouts/Header.jsx"
import Hero from "../components/Route/Hero/Hero.jsx"
import Categories from "../components/Route/Categories/Categories.jsx"
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx"
import FeaturedProducts from "../components/Route/FeaturedProducts.jsx"
import Events from "../components/Events/Events.jsx"
import Sponsered from "../components/Sponsered/Sponsered.jsx"
import Footer from "../components/layouts/footer.jsx"
const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <Categories />
        <BestDeals />
        <FeaturedProducts />
        <Events />
        <Sponsered />
        <Footer />
    </div>
  )
}

export default HomePage