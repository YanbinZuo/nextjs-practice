import { useRouter } from 'next/router'
import React from 'react'

const ClientsProjectIdPage = () => {
  const router = useRouter();
  const clientProjectId = router.query.clientprojectid;
  const clientID = router.query.id;

  console.log("router query: ", router.query)
  return (
    <div>
      <h1>ClientsProjectIdPage</h1>
      <p>Client ID: {clientID}</p>
      <p>Client Project ID: {clientProjectId}</p>
    </div>
  )
}

export default ClientsProjectIdPage