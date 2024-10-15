import path from "path";
import fs from "fs/promises";
import Link from "next/link";
// import Link from "next/link";

export default function Home(props) {
  const { products } = props;

  // const products = [{ id: "p1", title: "product 1" }];

  // console.log("products: ", products)
  // console.log(">>> testttttt")
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}> {product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log(">>> home page getStaticProps");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notfound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
