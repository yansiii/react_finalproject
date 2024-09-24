import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { List } from "./List";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUtensils,faPerson,faSquareCheck,faListOl,faCircleXmark,} from "@fortawesome/free-solid-svg-icons";
export const CardDetails = () => {
  const { cardId } = useParams();
  const cards = useSelector((state) => state.putData.value);
  const card = cards.filter((recipe) => recipe.id == cardId.toString());

  useEffect(() => {
    let favContCheck = localStorage.getItem("favContainer")
      ? JSON.parse(localStorage.getItem("favContainer"))
      : [];

    const isAlreadySaved = favContCheck.some(
      (favContCheck) => favContCheck.id === card[0].id
    );
    isAlreadySaved ? setIsSaved(true) : setIsSaved(false);
  }, []);
  const [isSaved, setIsSaved] = useState(false);

  const handleFavorites = () => {
    const favContainerString = localStorage.getItem("favContainer");
    let favContainer = favContainerString ? JSON.parse(favContainerString) : [];

    const isAlreadySaved = favContainer.some(
      (favContainer) => favContainer.id === card[0].id
    );

    if (!isAlreadySaved) {
      favContainer = [...favContainer, card[0]];
      localStorage.setItem("favContainer", JSON.stringify(favContainer));
      setIsSaved(true);
    } else {
      favContainer = favContainer.filter(
        (savedCard) => savedCard.id !== card[0].id
      );
      localStorage.setItem("favContainer", JSON.stringify(favContainer));
      setIsSaved(false);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="md:py-3">
        <div
          id="card"
          className="p-5 rounded-3xl shadow-lg shadow-black m-3 bg-gradient-to-tl from-zinc-50 to-zinc-200"
        >
          <div className="text-center m-auto grid grid-cols-10">
            <div className="col-span-9">
              <h1 className="text-red-800 font-medium p-6">{card[0].name}</h1>
            </div>

            <div className="flex justify-center col-span-1 text-3xl pt-4">
              <Link to={"/recipes"} className="text-black">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="hover:cursor-pointer shadow-md rounded-full shadow-zinc-600 transition-transform duration-300 transform hover:scale-125"
                />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black md:p-10 text-lg">
            <div className="col-span-1 md:col-span-1">
              <div>
                <div>
                  <p className="mb-4 justify-center md:justify-normal  text-center md:text-left">
                    <FontAwesomeIcon icon={faClock} className="mr-2" />
                    Prep: {card[0].prepTimeMinutes} min, Cooking:{" "}
                    {card[0].cookTimeMinutes} min
                  </p>
                </div>
                <div
                  className="grid grid-cols-2 justify-left
         text-left"
                >
                  <p>
                    <FontAwesomeIcon icon={faUtensils} className="mr-1" />{" "}
                    Cuisine: {card[0].cuisine}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPerson} className="mr-1" />{" "}
                    Servings: {card[0].servings} people
                  </p>
                  <p>Difficulty: {card[0].difficulty}</p>
                  <p>Rating: {card[0].rating} </p>
                </div>
              </div>
              <img
                src={card[0].image}
                alt={card[0].name}
                className="block w-full rounded-xl my-3 shadow-lg shadow-black"
              />
            </div>
            <div className="col-span-1 md:col-span-2 px-5">
              <p className="text-2xl font-bold">
                {" "}
                <FontAwesomeIcon icon={faSquareCheck} className="mr-1" />{" "}
                Ingredients:
              </p>
              <ul className="list-disc ml-4 md:ml-16 grid grid-cols-1 md:grid-cols-2">
                {card[0].ingredients.map((ingredient, index) => (
                  <List key={index}>{ingredient}</List>
                ))}
              </ul>
              <p className="mt-5 text-2xl font-bold">
                <FontAwesomeIcon icon={faListOl} className="mr-1" />{" "}
                Instructions:
              </p>
              <ul className=" ml-4 md:ml-16 list-decimal">
                {card[0].instructions.map((instruction, index) => (
                  <List key={index}>{instruction}</List>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center mb-3 ">
            <button
              className={` hover:cursor-pointer  shadow-black shadow-md transition-transform duration-300 transform hover:scale-105 ${
                !isSaved ? "bg-zinc-300 text-black" : "bg-slate-700 text-white"
              } `}
              onClick={handleFavorites}
            >
              {!isSaved
                ? "Add to your favorites"
                : "Remove from your favourites"}
            </button>
            <button className="hover:cursor-pointer  shadow-black shadow-md transition-transform duration-300 transform hover:scale-105 ml-2 bg-zinc-700">
              <Link to={"/favourites"}>Go to your favorites</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
