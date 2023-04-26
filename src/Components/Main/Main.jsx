import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <div className='Main'>
      <div className="MainLeft">
        <h1>Header</h1>
        <h1>Footer</h1>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius veniam unde nam?  reiciendis? Voluptate itaque neque a minima maxime?</p>
      <div className="bottom">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
      </div>
      <div className="MainRight">
        <img src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
    </div>
  )
}

export default Main