import React, { useEffect, useState } from "react";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.fetchedSales);
  const [isLoading, setIsLoading] = useState(false);

  console.log(">>> sales: ", sales);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://nextjs-project-c1b4b-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        const fetchedSales = [];
        // data from Firebase is object, we are converting it to array
        for (const key in data) {
          fetchedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(fetchedSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!sales) {
    return <p>No data yet</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          <p>userName: {sale.username}</p>
          <p>Volume: {sale.volume}</p>
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;

export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-project-c1b4b-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();
  const fetchedSales = [];
  for (const key in data) {
    fetchedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return {
    props: {
      fetchedSales: fetchedSales
    }
  }
}
