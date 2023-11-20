import React from 'react'
import './Serve.css'
import { Link } from 'react-router-dom';
function SeaWave() {
  return (
    <div className="Water">
      <h5>SeaWave
      </h5><br></br>
      <p>
      "Seawave" in our theme park you will experience the waves like ocean waves.<br></br>
      In a wave pool the artificial waves are generated at regular intervals to simulate the experience of ocean waves. <br></br>
      Wave pools are popular features in our theme parks and provide visitors with a beach-like experience within the park.
    </p> <br></br>
     <h6>Lets Be Chill and Fun </h6><br></br><br></br>
     <img src="https://splashmountainoc.com/app/uploads/2018/12/IMG_8055.jpg" alt="img" ></img>/
     <br></br><br></br><br></br><Link to="/Bungee"><btn>Next</btn></Link> <Link to="/WaterSlide"><btn>Back</btn></Link>
      <br></br>
      <br></br>
    </div>
       
  );
}

export default SeaWave;
