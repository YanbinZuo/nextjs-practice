import { useRouter } from 'next/router';
import React from 'react';

const SlugsPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>SlugsPage</h1>
    </div>
  )
}

export default SlugsPage