import React from 'react'

const OutfitMaker = () => {

  return (
    <div className="min-h-screen flex">
      <div className="left  w-[70%] bg-slate-300"> hii</div>
      <div className="right   w-[30%] flex flex-col gap-24 justify-center items-center">
        <div className="w-96">
          <p className="text-black text-4xl font-bold">
            {" "}
            True style is the art of crafting your unique expression, blending
            authenticity with creativity to leave an indelible mark.
          </p>
        </div>
        <div className="btn flex flex-col gap-3 ">
          <button className="  text-white text-xl font-bold w-96 p-3 bg-[#FF3E6C] rounded-md">
            Customize your style
          </button>
          <button className="  text-white text-xl font-bold w-96 p-3 bg-[#FF3E6C] rounded-md">
            Customize your style
          </button>
        </div>
      </div>
    </div>
  );
}

export default OutfitMaker