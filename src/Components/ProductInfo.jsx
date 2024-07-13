import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img5 from "../assets/img5.jpeg";
import { MyContext } from "../Utilities/Context/ContextProvider";

const ProductInfo = () => {
  const { outfit, setOutfit } = useContext(MyContext);
  const handleImageChange = (e) => {
    const newOutfit = e.target.src;
    setOutfit((prevOutfit) => [...prevOutfit, newOutfit]);
  };
  console.log(outfit);
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-300">
      <div>
        <img onClick={handleImageChange} src={img5} alt=" image" />L
        <Link to="/outfitmaker">
          {" "}
          <button className="bg-blue-300 p-2 font-bold">Outfit Maker</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductInfo;
