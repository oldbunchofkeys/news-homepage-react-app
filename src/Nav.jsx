//import { useState } from 'react'
import './Nav.css'

function Nav() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex nav'>
        <img src="https://placekitten.com/64/40" alt="" />
        <div>
          <ul className='flex nav-items'>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav
