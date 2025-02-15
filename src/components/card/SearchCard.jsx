// rafce
import React, { useEffect, useState } from "react";
import useEcomStore from '../../store/ecomStore';
import Slider from '@mui/material/Slider';

const SearchCard = () => {
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products);
  const actionSearchFilters = useEcomStore((state) => state.actionSearchFilters);
  const getCategory = useEcomStore((state) => state.getCategory);
  const categories = useEcomStore((state) => state.categories);

  const [text, setText] = useState("");
  const [categorySelected, setCategorySelected] = useState([]);
  const [price, setPrice] = useState([10, 300]);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (text) {
        actionSearchFilters({ query: text });
      } else {
        getProduct();
      }
    }, 300);
    return () => clearTimeout(delay);
  }, [text]);

  const handleCheck = (e) => {
    const inCheck = e.target.value;
    const inState = [...categorySelected];
    const findCheck = inState.indexOf(inCheck);
    if (findCheck === -1) {
      inState.push(inCheck);
    } else {
      inState.splice(findCheck, 1);
    }
    setCategorySelected(inState);

    if (inState.length > 0) {
      actionSearchFilters({ category: inState });
    } else {
      getProduct();
    }
  };

  useEffect(() => {
    actionSearchFilters({ price });
  }, [ok]);

  const handlePrice = (value) => {
    setPrice(value);
    setTimeout(() => {
      setOk(!ok);
    }, 300);
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-semibold mb-4 text-gray-800">ค้นหาสินค้า</h1>
  
      {/* Search by Text */}
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="ค้นหาสินค้า..."
        className="border border-gray-300 rounded-md w-full p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-400"
      />
  
      {/* Search by Category */}
      <div className="mb-4">
        <h2 className="text-lg font-medium text-gray-700 mb-2">หมวดหมู่สินค้า</h2>
        <div className="space-y-2">
          {categories.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                onChange={handleCheck}
                value={item.id}
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label className="text-gray-700">{item.name}</label>
            </div>
          ))}
        </div>
      </div>
  
      {/* Search by Price */}
      <div>
        <h2 className="text-lg font-medium text-gray-700 mb-2">ค้นหาตามราคา</h2>
        <Slider
          value={price}
          onChange={(e, newValue) => handlePrice(newValue)}
          valueLabelDisplay="auto"
          min={10}
          max={300}
          className="text-blue-600"
        />
        <div className="text-sm text-gray-600 mt-1">ช่วงราคา: {price[0]} - {price[1]} บาท</div>
      </div>
    </div>
  );
};

export default SearchCard;
