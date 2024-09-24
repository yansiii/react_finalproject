import { useState } from "react";
import { useDispatch } from "react-redux";
import { srcDataImput } from "../redux/srcDataSlice";
import { Link } from "react-router-dom";
export const SearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(srcDataImput(value));
    setValue("");
    console.log(value);
  };
  const handleInput = (e) => {
    setValue(`${e.target.value}`);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="search recipes"
        className=" bg-slate-700 text-white rounded-lg py-3 text-center mr-3 shadow-black shadow-md transition-transform duration-300 transform hover:scale-105"
        onChange={handleInput}
        value={value}
        required
      />
      <Link to={"/recipes"}>
        <button
          type="submit"
          className={
            "bg-zinc-300 text-black disabled:text-gray-400 hover:cursor-pointer  shadow-black shadow-md transition-transform duration-300 transform hover:scale-105"
          }
          onClick={handleSubmit}
          disabled={value == "" ? true : false}
        >
          Search
        </button>
      </Link>
    </form>
  );
};
