import ClientComponent from './ClientComponent'
import { Suspense } from 'react'


export default function Home() {
  return (
    <>
    
    <h1>DON'T wrap in suspense</h1>
      {[...Array(10)].map((e, i) =>
        <ClientComponent num={i}></ClientComponent>
      )}


    <h1>Wrap ALL with a SINGLE suspense</h1>
      <Suspense>
      {[...Array(10)].map((e, i) =>
        <ClientComponent num={10+i}></ClientComponent>
      )}
      </Suspense>
      

    <h1>Wrap EACH with its OWN suspense</h1>
      {[...Array(10)].map((e, i) =>
      <Suspense>
        <ClientComponent num={20+i}></ClientComponent>
      </Suspense>
      )}
    </>
  )
}
