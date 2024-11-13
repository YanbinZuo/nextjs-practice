"use client";
import React from 'react'

function ErrorPage({error}) {
  console.log("Error: ", error)
  return (
    <main className='error'>
      <h1>An error occurred!</h1>
      <p>Failed to create meal.</p>
    </main>
  )
}

export default ErrorPage