import React, { useState } from "react";

import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import KeyWest from "../assets/keywest.jpg";

const Destinations = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Reset selected image
    setShowModal(false);
  };

  return (
    <div className="max-width[1240px] mx-auto py-16 px-4 text-center">
      <h1>All-Inclusive Resort</h1>
      <p className="py-4">On the Caribbean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 cursor-pointer" src={BoraBora} alt="/" onClick={() => handleImageClick(BoraBora)} />
        <img className="w-full h-full object-cover cursor-pointer" src={BoraBora2} alt="/" onClick={() => handleImageClick(BoraBora2)} />
        <img className="w-full h-full object-cover cursor-pointer" src={Maldives} alt="/" onClick={() => handleImageClick(Maldives)} />
        <img className="w-full h-full object-cover cursor-pointer" src={Maldives2} alt="/" onClick={() => handleImageClick(Maldives2)} />
        <img className="w-full h-full object-cover cursor-pointer" src={KeyWest} alt="/" onClick={() => handleImageClick(KeyWest)} />
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-500/60 z-10">
          <div className="relative w-screen md:w-3/5">
            <img src={selectedImage} alt="/" className=" object-contain" />
            <button type="button" className=" w-8 h-8 absolute top-6 right-6 text-white rounded-full bg-gray-700/70" onClick={handleCloseModal}>
              <span className="absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2">X</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;
