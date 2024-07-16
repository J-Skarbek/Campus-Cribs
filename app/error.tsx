'use client';

export default function Error({ error }) {

  return (
    <main className="error flex justify-center align-center">
      <h1 className="text-4xl">This is the error handling page</h1>
      <p>{error}</p>
    </main>
  )
}