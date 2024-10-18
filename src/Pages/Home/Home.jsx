import { useState } from "react"
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu"
import Hero_banner from "../../Components/Hero_banner/Hero_banner"
import "./Home.css"
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay"
import AppDownload from "../../Components/AppDownload/AppDownload"

const Home = () => {

    const[category,setCategory] = useState("All")

  return (
    <div>
      <Hero_banner />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  );
}

export default Home
