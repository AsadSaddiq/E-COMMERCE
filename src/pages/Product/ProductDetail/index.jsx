import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  return <div className="data">ProductDetail {id}</div>;
};

export default ProductDetail;
