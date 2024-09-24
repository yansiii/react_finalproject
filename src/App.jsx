import "./App.css";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { srcDataImput } from "./redux/srcDataSlice";
import { putData } from "./redux/dataSlice";
function App() {
  const [data, setData] = useState([]);
  const url = "https://dummyjson.com/recipes?limit=50";
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.recipes));
  }, []);
  dispatch(putData(data));
  return (
    <Link to={`/`}>
      <div className=" bg-zinc-50 pb-16 ">
        <div className="text-justify">
          <Navbar />
        </div>
        <div className="text-center grid-cols-1 mt-36 mx-8">
          <h1 className="text-red-800 font-medium">
            Welcome to DummyJSON`s recipes!
          </h1>
          <p className="text-zinc-500 text-center max-w-xl mx-auto mt-32 text-lg">
            Welcome to DummyJSON`s kitchen! Discover the joy of cooking with our
            diverse collection of recipes that cater to every taste and
            occasion. <br />
            From comforting classics to adventurous culinary creations, our site
            is your culinary companion on a journey through flavors and aromas.
            <br /> Explore a world of delicious possibilities as you browse
            through our curated selection of recipes, each crafted with care and
            expertise. <br /> Happy cooking!
          </p>
        </div>
        <div className="flex justify-center p-10">
          <button
            type="submit"
            className="bg-zinc-300 text-black hover:cursor-pointer  shadow-black shadow-md transition-transform duration-300 transform hover:scale-105"
            onClick={() => dispatch(srcDataImput(""))}
          >
            <Link to={"/recipes"}>See All DummyJSON`S RECIPES</Link>
          </button>
        </div>
      </div>
    </Link>
  );
}
export default App;
