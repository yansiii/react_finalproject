import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "./Navbar";
import { Card } from "./Card";

export const AllCards = () => {
  const data = useSelector((state) => state.putData.value);
  const srcData = useSelector((state) => `${state.srcDataImput.value}`);
  return (
    <Link to={`/recipes`}>
      <div className="bg-origin-padding from-zinc-50 to-zinc-900">
        <div className="bg-zinc-50">
          <Navbar></Navbar>
          <div className="text-center m-auto md:mt-3">
            <h1 className="text-red-800 font-medium p-6">
              All DummyJSON`s recipes
            </h1>
          </div>
          <div className="text-center m-auto ">
            <h2 className="text-black font-medium text-3xl p-6">
              {"Select a recipes for more info"}
            </h2>
          </div>
        </div>
        <div className="grid grid-col lg:grid-cols-2  xl:grid-cols-3 justify-center">
          {srcData == ""
            ? data.map((recipe) => (
                <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
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
                  />
                </Link>
              ))
            : data
                .filter(
                  (recipe) =>
                    recipe.name.toLowerCase().includes(srcData.toLowerCase()) ||
                    recipe.tags.some((tag) =>
                      tag.toLowerCase().includes(srcData.toLowerCase())
                    ) ||
                    recipe.ingredients.some((ingredient) =>
                      ingredient.toLowerCase().includes(srcData.toLowerCase())
                    )
                )
                .map((recipe) => (
                  <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
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
                    />
                  </Link>
                ))}
        </div>
      </div>
    </Link>
  );
};
