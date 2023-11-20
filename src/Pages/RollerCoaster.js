import React from 'react'
import './Serve.css'
import { Link } from 'react-router-dom';
function RollerCoaster() {
  return (
    <div className="Water">
      <h5>RollerCoaster
      </h5><br></br>
      <p>
      A roller coaster in a theme park is an iconic and exhilarating amusement ride that offers riders a thrilling experience of twists, turns, drops, and loops.<br></br> 
      Typically consisting of a series of tracks and support structures, roller coasters use gravity and mechanical propulsion systems to propel trains of cars along the track at high speeds.<br></br>
      The design of roller coasters can vary widely, with some featuring steep drops for intense acceleration, inversions for upside-down experiences, and helix turns for spiraling excitement.<br></br>
      The unique combination of speed, height, and unexpected twists have an memorable and electrifying experience.
      </p> <br></br>
     <h6>Ride...Speed...Thrilling...</h6><br></br><br></br>
     <img src="https://travellersworldwide.com/wp-content/uploads/2022/06/shutterstock_1769310011.png.webp" alt="img" ></img>/
     <br></br><br></br><br></br><Link to="/DryGames"><btn>Next</btn></Link> <Link to="/Bungee"><btn>Back</btn></Link>
      <br></br>
      <br></br>
    </div>
       
  );
}

export default RollerCoaster;
