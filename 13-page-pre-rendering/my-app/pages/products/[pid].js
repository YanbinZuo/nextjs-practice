import React from "react";
import path from "path";
import fs from "fs/promises";

function ProductDetailPage(props) {
  const { product } = props;

  if(!product) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <p>Product Title: {product.title}</p>
      <p>Product Description: {product.description}</p>
    </>
  );
}

export default ProductDetailPage;

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  console.log(">>> ProductDetailPage getStaticProps: ")
  const data = await getData();
  const { params } = context;
  const productID = params.pid;
  const product = data.products.find((product) => (product.id === productID));

  if(!product) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      product: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const pathsWithParams = data.products.map(product => ({params: {pid: product.id}}))
  return {
    paths: pathsWithParams,
    fallback: true
  };
}
