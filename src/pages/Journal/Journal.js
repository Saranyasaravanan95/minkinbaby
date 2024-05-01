import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Minkin baby shop</span>{" "}
          Discover the joy of documenting your baby's milestones and special
        moments with Minkin Journals. Our journaling feature is designed to
        complement your baby shopping experience, allowing you to create lasting
        memories alongside the finest baby products.
        Share your journey, from the first adorable onesies to the unforgettable
        bedtime stories. Capture the little details and big milestones in your
        baby's life, and connect with a community of parents who share similar
        joys and challenges.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping for your kids
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
