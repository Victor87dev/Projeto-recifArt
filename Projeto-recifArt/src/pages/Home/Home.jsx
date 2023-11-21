import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

import {
  Gracas,
  Derby,
  Seguranca,
  Sustentabilidade,
  Inspiracao,
  Art,
  Compose,
  Sci,
  Green,
  Duck,
  Star,
} from "../../components/image";

const Home = () => {
  return (
    <>
      <div id="container-home">
        <header>
          <Navbar />
        </header>

        <Footer />
      </div>
    </>
  );
};

export default Home;
