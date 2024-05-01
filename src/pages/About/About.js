import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Minkin shop</span>{" "}
          
          <img src="assets/minkin-logo.jpg" alt="Minkin Logo" />
       
         <h3>Welcome to Minkin, a haven for quality baby products designed with love and care. At Minkin, our mission is clear: to provide parents with the highest quality baby essentials that prioritize safety, comfort, and style. We understand the unique needs of both babies and parents, and we are committed to crafting products that not only meet but exceed your expectations.
          The story of Minkin is one of passion and dedication. Our journey began with a simple yet profound idea – that baby products should not only be functional but also beautiful. Over time, Minkin has evolved into a trusted name, synonymous with quality and innovation in the baby care industry. We are proud to be a part of your parenting journey, enhancing the joy of parenthood with our thoughtfully crafted products.

Our values are the cornerstone of Minkin. We place safety above all else, subjecting every product to rigorous testing to ensure it meets and surpasses industry standards. Sustainability is also a core value for us, as we strive to create products that are gentle on both babies and the environment.

At Minkin, we see ourselves as more than just a brand – we are a community. Our commitment extends beyond providing exceptional products; it includes offering support to parents on their journey. Our customer service team is here for you, ready to assist and ensure your experience with Minkin is nothing short of extraordinary.

Meet the passionate individuals behind Minkin – our dedicated team. From designers to customer service representatives, each member plays a vital role in bringing Minkin products to life. We take pride in our work and are driven by the joy and satisfaction our products bring to families like yours.</h3> 




        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            kids shopping ...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
