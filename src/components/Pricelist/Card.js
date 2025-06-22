// src/components/Card.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FF from "../../assets/1f.jpg";
import SF from "../../assets/2f.jpg";
import TF from "../../assets/3f.jpg";
import FOF from "../../assets/4f.jpg";

const framesData = [
  {
    title: "Portrait Frames",
    size: '8" x 12"',
    material: "High-Quality Wood Finish",
    price: 1000,
    image: FF,
  },
  {
    title: "Landscape Frames",
    size: '20" x 24"',
    material: "Premium Aluminum Alloy",
    price: 2200,
    image: SF,
  },
  {
    title: "Portrait Frames",
    size: '16" x 20"',
    material: "Premium Polycarbonate",
    price: 1900,
    image: TF,
  },
  {
    title: "Landscape Frames",
    size: '4" x 6"',
    material: "Durable Acrylic Frame",
    price: 500,
    image: FOF,
  },
];

const Card = () => {
  const [quantities, setQuantities] = useState(Array(framesData.length).fill(0));
  const navigate = useNavigate();

  const handleIncrease = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
  };

  const handleDecrease = (index) => {
    const updatedQuantities = [...quantities];
    if (updatedQuantities[index] > 0) {
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  };

  const handleGenerateBill = () => {
    const selectedItems = framesData
      .map((frame, index) => ({
        ...frame,
        quantity: quantities[index],
        total: frame.price * quantities[index],
      }))
      .filter(item => item.quantity > 0);

    navigate('/bill', { state: { selectedItems } });
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {framesData.map((frame, index) => (
          <div
            key={index}
            className="dark:bg-gray-800 dark:border-gray-700 rounded-2xl shadow-lg p-5 flex flex-col justify-between hover:scale-[1.01] transition-transform"
          >
            <div className="flex justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-indigo-700">{frame.title}</h3>
                <p className="text-sm text-gray-500 mt-1">Size – {frame.size}</p>
                <div className="mt-2">
                  <p className="text-sm font-semibold text-gray-600">Frame Details:</p>
                  <p className="text-sm text-gray-500">Material: {frame.material}</p>
                </div>
                <p className="text-green-500 text-xl font-bold mt-3">Rs. {frame.price}</p>
              </div>
              <img
                src={frame.image}
                alt="frame"
                className="w-40 h-32 object-cover rounded-xl flex-shrink-0"
              />
            </div>
            <div className="flex justify-center items-center gap-4 mt-4">
              <button
                className="bg-blue-700 text-white rounded-full w-8 h-8 text-lg hover:bg-blue-500"
                onClick={() => handleDecrease(index)}
              >
                −
              </button>
              <span className="text-lg text-gray-400 font-medium">{quantities[index]}</span>
              <button
                className="bg-blue-700 text-white rounded-full w-8 h-8 text-lg hover:bg-blue-500"
                onClick={() => handleIncrease(index)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-indigo-700 transition"
          onClick={handleGenerateBill}
        >
          Generate Bill
        </button>
      </div>
    </div>
  );
};

export default Card;
