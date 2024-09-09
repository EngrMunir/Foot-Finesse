import Image from "next/image";
import React from "react";

// Define the type for the props
interface ShoeCardProps {
  shoe: {
    name: string;
    description: string;
    imageUrl: string;
    price: number;
  };
}

// Update the component to accept props
const ShoeCard: React.FC<ShoeCardProps> = ({ shoe }) => {
    const {category,discountPrice,id,image, price,rating,shoeName,shortDescription,_id}= shoe;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <Image
          src={image}
          width={70}
          height={50}
          alt=""
        />
      </figure>
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
