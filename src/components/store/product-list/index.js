import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import {
  ProductCard,
  ProductImage,
  ProductInfo,
  Price
} from "./product-styled-components";

const Product = props => {
  const { url } = props.match;
  return (
    <Fragment>
      <ProductCard>
        <Link to={`${props.match.url}/:id`}>
          <ProductImage />
        </Link>
        <ProductInfo>basic 2.0 - grey</ProductInfo>
        <Price>£79.95</Price>
      </ProductCard>
    </Fragment>
  );
};

export default Product;
