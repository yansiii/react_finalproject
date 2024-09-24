import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

import { useDispatch, useSelector } from "react-redux";
import { srcDataImput } from "../redux/srcDataSlice";
export const Navbar = () => {
  const dispatch = useDispatch();
  const srcData = useSelector((state) => `${state.srcDataImput.value}`);
  return (
    <div className="p-3 bg-origin-padding from-zinc-50 to-zinc-300">
      <ul className=" text-black text-center text-lg grid grid-cols-1 lg:grid-cols-4">
        <li className="p-2.5 lg:min-w-40 ">
          <Link to={"/"}>Home</Link>
        </li>
        <li
          className="p-2.5 lg:min-w-40"
          onClick={() => dispatch(srcDataImput(""))}
        >
          <Link to={`/recipes`} key={srcData}>
            Recipes
          </Link>
        </li>
        <li className="p-2.5 lg:min-w-40">
          <Link to={"/favourites"}>Your Favorites</Link>
        </li>
        <li className="align-center">
          <SearchBar />
        </li>
      </ul>
    </div>
  );
};
