import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Category = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem(item.id)) || false
  );
  const { description, rating, price, name, image, id } = item;

  const handleFavoriteClick = () => {
    if (isFavorite) {
      // If it's already a favorite, remove it from localStorage
      localStorage.removeItem(id);
      setIsFavorite(false);
      toast.warning(`Removed ${name} from favorites`);
    } else {
      // If it's not a favorite, add it to localStorage
      localStorage.setItem(id, JSON.stringify(item));
      setIsFavorite(true);
      toast.success(`Added ${name} to favorites`);
    }
  };

  return (
    <div className="relative group p-4 transition-transform  transform-gpu text-center">
      <div
        className={`bg-white rounded-lg shadow-md overflow-hidden ${
          isHovered ? "scale-105" : ""
        } transition-transform transform-gpu duration-300`}
      >
        <img src={image} alt={name} className="w-full h-44 object-cover" />

        <div className="flex items-center justify-center p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-4 text-white">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{rating} Stars</p>
          <p className="text-sm text-gray-500">{description} Stars</p>
          <p className="text-lg font-semibold">${price}</p>

          <button className="mt-8 bg-blue-500 text-white p-2 rounded hover-bg-blue-600">
            Buy Now
          </button>
        </div>
        <div className="group absolute top-4 right-4 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
          <button
            className="text-white p-2 rounded-full"
            onClick={handleFavoriteClick}
          >
            {isFavorite ? <AiFillHeart className="text-red-500" size={24}/> : <AiOutlineHeart size={24}/>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
