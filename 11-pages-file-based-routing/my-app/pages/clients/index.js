import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ClientsPage = () => {
  const router = useRouter();
  const clients = [
    { id: 1, name: "Jimmy" },
    { id: 2, name: "Jack" },
  ];

  const handleButtonClick = () => {
    router.push("clients/1")
  }
  return (
    <div>
      <h1>ClientsPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* another way */}
            {/* <Link href={`clients/${client.id}`}>{client.name}</Link> */}
            <Link href={{
              pathname: "clients/[id]",
              query: {id: client.id}
            }}>{client.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>go to client 1</button>
    </div>
  );
};

export default ClientsPage;
