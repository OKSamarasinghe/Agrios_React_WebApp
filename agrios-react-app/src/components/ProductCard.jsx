import React from 'react';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={image} alt={name} className="w-full h-32 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-green-500 text-xl">${price}</p>
    </div>
  );
};

export default ProductCard;
