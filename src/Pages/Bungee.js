import React from 'react'
import './Serve.css'
import { Link } from 'react-router-dom';
function Bungee() {
  return (
    <div className="Water">
      <h5>BunjeeJumping
      </h5><br></br>
      <p>
      Bungee jumping in a theme park is a thrilling and adventurous activity that offers visitors a unique and adrenaline-pumping experience within the amusement park setting.<br></br>
      This extreme activity involves jumping from a great height while attached to a secured bungee cord, creating a sensation of free-fall before the cord recoils, preventing the jumper from hitting the ground.<br></br>
      Our theme parks enhance the experience with special effects, like themed jump platforms, music, or even virtual reality elements.<br></br>
      Participants in theme park bungee jumping typically undergo a brief orientation about this and follow safety measures.<br></br> 
    </p> <br></br>
     <h6>Fly High And Jump High...</h6><br></br><br></br>
     <img src="https://www.dellaadventure.com/uploads/9693Bungee%20Trampoline%20(1).jpg" alt="img" ></img>/
     <br></br><br></br><br></br><Link to="/RollerCoaster"><btn>Next</btn></Link> <Link to="/Seawave"><btn>Back</btn></Link>
      <br></br>
      <br></br>
    </div>
       
  );
}

export default Bungee;
