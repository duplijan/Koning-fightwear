import React, { Fragment } from "react";

import { ProductHeader } from "./product-styled-components";

const ProductDetail = props => {
  const { id } = props.match.params;
  return (
    <Fragment>
      <ProductHeader>{id}</ProductHeader>
    </Fragment>
  );
};

export default ProductDetail;
