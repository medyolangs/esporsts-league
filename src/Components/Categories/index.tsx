import React from "react"

import './style.css'

const Categories: React.FC = () => {
  return <div className="cat-wrapper">
    <div className="container"> 
      <div className="cat-main">
        <ul className="cat-sidenav">
          <li className="cat-title">Categories</li>
          <li className="cat-games">
            <a href="#dota">Dota 2</a>
          </li>
          <li className="cat-games">
            <a href="#lol">League of Legends</a>
          </li>
          <li className="cat-games">
            <a href="#ml">Mobile Legends</a>
          </li>
          <li className="cat-games">
            <a href="#etc">Others</a>
          </li>
        </ul>
        <div className="content">
          <h3>Esports League</h3>
          <p>Esports matches and live streams that you can watch </p>
        </div>
      </div>
    </div>

  </div>
}

export default Categories
