import { useRouter } from 'next/router';
import React from 'react'

const ProjectPage = () => {
  const router = useRouter();
  console.log("router pathname: ", router.pathname);
  console.log("router query: ", router.query);
  const projectId = router.query.projectid;

  return (
    <div>
      <h1>portfolio Project page</h1>
      <span>Project ID: {projectId}</span>
    </div>
  )
}

export default ProjectPage;