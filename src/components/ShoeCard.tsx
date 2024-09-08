import Image from "next/image";
import React from "react";

// Define the type for the props
interface ShoeCardProps {
  shoe: {
    name: string;
    description: string;
    image: string;
    price: number;
    shortDescription: string;
    shoeName: string;
  };
}

// Update the component to accept props
const ShoeCard: React.FC<ShoeCardProps> = ({ shoe }) => {
  const { image, price, shortDescription, shoeName } = shoe;

  return (
    <div className="card bg-base-100 shadow-xl">
      {/* Container for Image with relative positioning */}
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={shoeName}
          layout="fill" // Allows the image to fill the container
          objectFit="cover" // Adjusts the image to cover the container
          className="rounded-t-xl"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{shoeName}</h2>
        <p>{shortDescription}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now - ${price}</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
