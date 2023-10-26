import { useEffect } from "react";
import { useState } from "react";
import Category from "./Category";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Categories = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <h3 className="text-4xl font-bold">Our Products</h3>
      <div className="grid md:grid-cols-3 lg:grid-cols-4">
        {items.slice(0, 12).map((item, index) => (
          <Category key={index} item={item} />
        ))}
      </div>
      <div className="my-4 flex justify-center">
        <Link
          to="/menu"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          See More
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Categories;
