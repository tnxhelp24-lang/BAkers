import React from "react";
import HeroSlider from "./components/HeroSlider";
import Header from "./components/Header";
import CakeFestival from "./components/CakeFestival";
import Menu from "./components/Menu";
import Stats from "./components/Stats";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import About from "./components/About";
import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";
import Team from "./components/Team";
import Order from "./components/Order";

const App = () => {
  return (
    <div className="font-sans text-[#3b3b3b] overflow-x-hidden">
      <Header />
      <HeroSlider />
      <About />
      <CakeFestival />
      <Categories />
      <Menu />
      <Team />
      <Order />
      <Stats />
      <Blog />
      <Newsletter />
      <Footer />
    </div>

  );
}

export default App;
