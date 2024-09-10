import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {

  return (
    <>
      
      <body className='main'>
      <header className='header'>
        <h1 className='title'>bbno$'s Top Albums</h1>
      </header>
        <div className='split left'>
          <img src="/images/bbno$_profile.webp" alt='bbno$' />
        </div>
        <div className='split right'>

          <div>
          <details>
            <summary>eat ya veggies</summary>
            <p>hello</p>
            <p>hello</p>
          </details>

          <details>
            <summary>Baby Gravy 2 (2020)</summary>
            <p>Welcome to Chillis</p>
            <p>Cadbury Creme</p>
            <p>Shining on my ex</p>
          </details>

          <details>
            <summary>recess (2019)</summary>
            <p>nursery</p>
            <p>bunk</p>
            <p>chess</p>
          </details>
          </div>
        </div>
      </body>


    </>
  )
}

export default App
