// USO DE RENDERIZADO CONDICIONAL EN COMPONENTES Y PROPIEDADES

import { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  favorite?: boolean;
}

const Card = ({ title, description, image, favorite = false }: CardProps) => {
  const [fav, setFav] = useState(favorite);

  const handleChangeFav = () => {
    setFav(!fav);
  };

  return (
    <div
      onClick={handleChangeFav}
      className={`rounded-lg shadow-md p-6 ${
        fav ? "bg-yellow-100 border-2 border-amber-600" : "bg-white"
      }`}
    >
      {image && (
        <img
          className="w-full h-48 object-cover rounded-md mb-4"
          src={image}
          alt={title}
        />
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
      {fav && <span>⭐</span>}
    </div>
  );
};

export default Card;
