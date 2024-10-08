import { useRouter } from "next/router";
import React from "react";

const ClientsIDPage = () => {
  const router = useRouter();
  const clientID = router.query.id;

  const loadProjectHandler = () => {
    // NOTE: absolute path: /....     relative path:   ... (no / start)
    // router.push(`${clientID}/projecta`)
    // router.push(`/clients/${clientID}/projecta`)

    // another way:
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: clientID, clientprojectid: "projecta" },
    });
  };

  return (
    <div>
      <h1>ClientsIDPage</h1>
      <p>client ID: {clientID}</p>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientsIDPage;
