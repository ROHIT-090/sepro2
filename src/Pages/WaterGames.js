import React from 'react'
import './Serve.css'
import { Link } from 'react-router-dom';
function WaterGames() {
  return (
    <div className="Water">
      <h5>Water Games
      </h5><br></br>
      <p>
      Water games in our theme park provide a splash of enjoyment for visitors of all ages.<br></br> 
      These attractions often include interactive water features, spray zones, and water playgrounds where families and friends can cool off and have fun.<br></br> 
      From fountains and water cannons to tipping buckets and wet play structures, water games offer a refreshing break from traditional rides.<br></br>
      These areas are designed to engage visitors in water-based play, fostering a playful and enjoyable atmosphere.<br></br>
      Follow the Safety measures are implemented to ensure a secure environment, and the water games contribute to the overall appeal of a theme park by providing a wet and wonderful way to beat the heat.
      </p> <br></br>
     <h6>Cool and Relax</h6><br></br><br></br>
     <img src="https://newsmeter.in/h-upload/2022/04/10/319374-new-project-2022-04-10t104846845.jpg" alt="img" ></img>
     <br></br><br></br><br></br><Link to="/DryGames"><btn>Back</btn></Link> <br></br> <br></br><Link to="/Home"><button>Home</button></Link>
      <br></br>
      <br></br>
    </div>
       
  );
}

export default WaterGames;
