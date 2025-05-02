import React from "react";
import Section1 from "./home/Section1";
import Section2 from "./home/Section2";
import Section3 from "./home/Section3";
import "../assets/sass/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <section>
        <Section1 />
      </section>
      <section>
        <Section2 />
      </section>
      <section>
        <Section3 />
      </section>
    </div>
  );
};

export default Home;
