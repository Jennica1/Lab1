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
          <details>
            <summary>Recess</summary>
            <p>hello</p>
            <p>hello</p>
          </details>

          <details>
            <summary>Recess</summary>
            <p>hello</p>
            <p>hello</p>
          </details>

          <details>
            <summary>good luck have fun</summary>
            <p>hello</p>
            <p>hello</p>
          </details>
        </div>
      </body>


    </>
  )
}

export default App
