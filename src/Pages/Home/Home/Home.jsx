import Jobs from "../../Job/Jobs/Jobs";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Search from "../Search/Search";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Search></Search>
      <Info></Info>
      <Jobs></Jobs>
    </div>
  );
};

export default Home;
