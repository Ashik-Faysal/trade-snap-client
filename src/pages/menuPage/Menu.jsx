import React, { useEffect, useState } from "react";
import Category from "../HomePage/Categories/Category";
import { ToastContainer } from "react-toastify";

const Menu = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      <h3 className="my-4 text-center text-4xl font-bold">Our Products</h3>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded mr-2"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">All Categories</option>
          {/* Add options for each category dynamically */}
          {Array.from(new Set(items.map((item) => item.category))).map(
            (category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item, index) => (
          <Category key={index} item={item} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Menu;
