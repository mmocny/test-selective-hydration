import { Suspense } from 'react'

export default function SuspenseTestPage({ Component } : { Component: any }) {
  return (
    <>
      <h1>DON'T wrap in suspense</h1>
      {[...Array(10)].map((e, i) =>
        <Suspense fallback={"Loading"}>
          <Component num={i}></Component>
        </Suspense>
      )}

      <h1>Wrap ALL with a SINGLE suspense</h1>
      <Suspense fallback={"Loading"}>
      {[...Array(10)].map((e, i) =>
        <Component num={10+i}></Component>
      )}
      </Suspense>
      
      <h1>Wrap EACH with its OWN suspense</h1>
      {[...Array(10)].map((e, i) =>
        <Suspense fallback={"Loading"}>
          <Component num={20+i}></Component>
        </Suspense>
      )}
    </>
  )
}
