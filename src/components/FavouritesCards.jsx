import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { srcDataImput } from "../redux/srcDataSlice";

export const FavouritesCards = () => {
  const [favContainer, setFavContainer] = useState([]);
  useEffect(() => {
    const favContainerString = localStorage.getItem("favContainer");
    favContainerString ? setFavContainer(JSON.parse(favContainerString)) : [];
    console.log(favContainer);
  }, []);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div className="text-center m-auto md:mt-3">
        <h1 className="text-red-800 font-medium p-6">
          Your Favourites Recipes
        </h1>
      </div>
      <div
        className={`${
          favContainer.length
            ? "grid grid-col lg:grid-cols-2  xl:grid-cols-3 justify-center"
            : "flex justify-center"
        }`}
      >
        {favContainer.length > 0 ? (
          favContainer.map((recipe) => (
            <Link to={`/favourites/${recipe.id}`} key={recipe.id}>
              <Card
                title={recipe.name}
                ingredients={recipe.ingredients}
                image={recipe.image}
                instructions={recipe.instructions}
                prepTimeMinutes={recipe.prepTimeMinutes}
                cookTimeMinutes={recipe.cookTimeMinutes}
                cuisine={recipe.cuisine}
                servings={recipe.servings}
                difficulty={recipe.difficulty}
                rating={recipe.rating}
              ></Card>
            </Link>
          ))
        ) : (
          <div>
            <p className="text-black text-2xl text-left">
              No Recipes in your favourites list
            </p>
            <button
              className="bg-zinc-300 text-black hover:cursor-pointer  shadow-black shadow-md transition-transform duration-300 transform hover:scale-105 m-4 text-center"
              onClick={() => dispatch(srcDataImput(""))}
            >
              <Link to={"/recipes"}>See All DummyJSON`S RECIPES</Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
};
