import About from "../components/About";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import Queries from "./Queries";

const Home = () => {
  return (
    <div>
      <Banner />
      <Queries />
      <About />
      <FAQ />
    </div>
  );
};

export default Home;
