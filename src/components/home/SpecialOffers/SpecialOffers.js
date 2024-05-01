import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Born Baby Shoe"
          price="35.00"
          color="Black and White"
          badge={true}
          des="Step into a world of adorability with our Born Baby Shoes"
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Kid (Boy Baby Shoes)"
          price="180.00"
          color="Gray"
          badge={true}
          des="Discover the joy of every tiny step with our Kid Boy shoes."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Kid (Girl Baby Shoes"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Discover the joy of every tiny step with our Kid Girl Shoes)"
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="kid (Part Wear shoes)"
          price="220.00"
          color="Black"
          badge={true}
          des="Discover the joy of every tiny step with our Kid party wear shoes"
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
