import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LineGraph from './components/LineGraph'
import BarGraph from './components/BarGraph'
import { PieGraph } from './components/PieGraph'

function App() {

  return (
    <div className=' flex flex-col space-y-10 justify-center items-center w-1/2 mx-auto p-20 my-20 '>
      {/* <h1 className='text-3xl font-bold underline'>Vite + React</h1> */}

      <LineGraph />

      <hr/>

      <BarGraph/>

      <hr/>
      <PieGraph />

    </div>
  )
}

export default App
