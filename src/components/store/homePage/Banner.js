import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/images/logo-light.png";

import {
  TopBanner,
  Logo,
  Cart,
  CartText,
  Center
} from "../store-styled-components";

const Banner = () => {
  return (
    <TopBanner>
      <Center>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Cart>
          <CartText> your shopping</CartText>
          <FontAwesomeIcon icon={faShoppingCart} />
          (0)
        </Cart>
      </Center>
    </TopBanner>
  );
};
export default Banner;
