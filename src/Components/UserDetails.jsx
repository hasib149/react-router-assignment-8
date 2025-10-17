import React from "react";
import { useParams } from "react-router";
import useProduct from "../CustomHooks/useProduct";

const UserDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProduct();
  const product = products.find((p) => String(p.id) === id);

  if (loading) return <p>loading</p>;
  if (!product) return <p className="text-center py-10">Product not found!</p>;

  return <div>user details</div>;
};

export default UserDetails;
