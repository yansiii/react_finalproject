/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUtensils,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

export const Card = ({
  title,
  image,
  prepTimeMinutes,
  cookTimeMinutes,
  cuisine,
  servings,
  difficulty,
  rating,
}) => {
  return (
    <div className="flex flex-col m-6 p-5 text-center rounded-3xl bg-gradient-to-tl from-slate-400 to-slate-700 max-w-lg shadow-lg transition-transform duration-300 transform hover:scale-105 shadow-black">
      <div>
        <h2 className="text-red-500 font-thin text-3xl m-3">{title}</h2>
        <div>
          <p className="mb-2">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            Prep: {prepTimeMinutes} min, Cooking: {cookTimeMinutes} min
          </p>
        </div>
        <div
          className="grid grid-cols-2 justify-center
         text-center"
        >
          <p>
            <FontAwesomeIcon icon={faUtensils} className="mr-1" /> Cuisine:{" "}
            {cuisine}
          </p>
          <p>
            <FontAwesomeIcon icon={faPerson} className="mr-1" /> Servings:{" "}
            {servings} people
          </p>
          <p>Difficulty: {difficulty}</p>
          <p>Rating: {rating} </p>
        </div>

        <div className="my-6">
          <img src={image} alt={title} className="block w-full" />
        </div>
      </div>
    </div>
  );
};
