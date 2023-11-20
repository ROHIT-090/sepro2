import React from 'react'
import './Serve.css'
import { Link } from 'react-router-dom';
function DryGames() {
  return (
    <div className="Water">
      <h5>Dry Games
      </h5><br></br>
      <p>
      Dry games in a theme park refer to non-water-based attractions that provide entertainment without the need for aquatic elements.<br></br>
      Dry games, these could include a variety of attractions like amusement rides, carnival-style games, and interactive experiences that don't involve water.<br></br>
      There are diffrent types of games like Giant Wheel,Dashing Car,Marigo-Round,3D Theater,Illusion Path,RollerCoaster.<br></br>
      Video games such as VR playing,Car Racing,Visual Shooting etc...
      </p> <br></br>
     <h6>Have Fun and Enjoy...</h6><br></br><br></br>
     <img src="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/amusement-park-hyderabad.jpg" alt="img" ></img>/
     <br></br><br></br><br></br><Link to="/WaterGames"><btn>Next</btn></Link> <Link to="/RollerCoaster"><btn>Back</btn></Link>
      <br></br>
      <br></br>
    </div>
       
  );
}

export default DryGames;
