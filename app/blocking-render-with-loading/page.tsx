import { Suspense } from 'react'
import ClientComponentBlockMount from '../components/ClientComponentBlockMount';
import ClientComponentUse from '../components/ClientComponentUse';
import SuspenseTestPage from '../components/SuspenseTestPage';


export default function() {
  return <SuspenseTestPage Component={ClientComponentBlockMount}></SuspenseTestPage>;
}
