import React from 'react';
import img from './Logo1.jpeg'
import './Home.css';
import { Link } from 'react-router-dom';
function Home1() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Code Convent Foundation</title>
        <link rel="stylesheet" href="./App.css" />
        <link rel="stylesheet" href="./res.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
      </head>
      <body>
        <div className="fixed-top">
          <header>
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#home">
                          Saturn ThemePark               
                </a> 
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link to="/Book">Booking</Link>
                     {/*} <a className="nav-link" href="/Book">
                        Booking
  </a>*/}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link to="/Home">Logout</Link>
                      {/*<a className="nav-link" href="/Home">
                        Logout
  </a>*/}
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
        </div>
        <section className="home-sec" id="home">
            <div className="home-content">
              <div className="row">
                <div className="col-lg-6 align-item-center">
                  <div className="home-info">
                    <br></br>
                    <br></br>
                    <h2>
                             Welcome To <span> SaturnThemePark </span>
                    </h2>
                    <p>
                      Hope you lover our ThemePark Suroundings and games.
                    </p>
                    <div className="buttons">
                      <a href="/KMP" className="btn1">
                        To know more.
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-first order-lg-last">
                  <div className="img-sec">
                    <img
                      src={img}                   
                      alt=""/>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className="don-sec" id="donation">
          <div className="container">
            <div className="heading">
              <h2>Games</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="don-box">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.sI_YpJfVmjR9bNSuoWJEIAHaFj&pid=Api&P=0&h=180"
                    alt="img"
                  />
                  <h3>WaterSlide</h3>
                  <Link to="/WaterSlide" className="btn1">
                    Know More
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img
                   src="https://tse2.mm.bing.net/th?id=OIP.PDnFVUtRxh_bpEZ6zOS5uwHaEK&pid=Api&P=0&h=180"
                   alt="img"
                  /><br />
                  <h3>SeaWave</h3><br />
                  <Link to="/Seawave" className="btn1">
                    Know More
                  </Link><br />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img
                  src="https://tse2.mm.bing.net/th?id=OIP.I20xnKNGruOb9TYPaZSmgAHaE5&pid=Api&P=0&h=180"
                    alt="img"
                  /><br />
                  <h3>bungee jumping</h3><br></br>
                  <Link to="/Bungee" className="btn1">
                    Know More
                  </Link><br/>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img src="https://www.intamin.com/wp-content/uploads/2019/09/2018-09-06-12-23-41-D850_JAY_0376-0382-Large-1170x658.jpg" alt="img" />
                  <h3>RollerCoaster</h3><br></br>
                  <Link to="/RollerCoaster" className="btn1">
                      Know More
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.se0u8yKSPDJCpZBmcbt6MwHaEK&pid=Api&P=0&h=180" alt="img" />
                  <h3>Dry Games</h3><br></br>
                  <Link to="/DryGames" className="btn1">
                    Know More
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img src="https://tse2.mm.bing.net/th?id=OIP.cMv4bKi5bbl-mtsAoU7hPwHaE6&pid=Api&P=0&h=180" alt="img" />
                  <h3>Water Games</h3><br></br>
                
                  <Link to="/WaterGames" className="btn1">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-id" id="about">
          <div className="container">
            <div className="heading">
              <h2>About US</h2>
              <p>
              <span>Our Theme park is a thrilling and immersive entertainment destination that captivates visitors with a carefully curated blend of rides, attractions, and experiences all centered around a specific theme or concept. These whimsical wonderlands offer a diverse array of adventures, from heart-pounding roller coasters and enchanting fairy tale worlds to water slides and live entertainment shows. Theme parks are designed to transport guests to fantastical realms, sparking joy, excitement, and a sense of wonder in people of all ages. Whether it's the magical castles of a fairy tale kingdom, the adrenaline rush of a daring coaster, or the laughter of a family enjoying a day together, theme parks create unforgettable memories and provide a brief escape from the everyday world.
              </span></p>
            </div>
            <div className="gallery-sec">
              <div className="container">
                <div className="image-container">
                  <div className="image">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.2s1aQIOX57RjM7U0sFkhZwHaE9&pid=Api&P=0&h=180" alt="img" />
                  
                  </div>
                  <div className="image">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.9OZkwWGbVVB4EhKxats1CwHaE8&pid=Api&P=0&h=180" alt="img" />
                  
                  </div>
                  <div className="image">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.9CbPgA9OVKmxMtCZKJtO0wHaD0&pid=Api&P=0&h=180" alt="img" />
                  
                  </div>
                  <div className="image">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.cXrFgG59Fzg7K6UM1rsK5QHaC9&pid=Api&P=0&h=180" alt="img" />
                  
                  </div>
                  <div className="image">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.xHXPWgZnbYqsoyoXRM2rNwHaE5&pid=Api&P=0&h=180" alt="img" />
                  </div>
                  <div className="image">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.z0SDsuVJ3m4RulxPLYk8wQHaE2&pid=Api&P=0&h=180" alt="img" />
                  </div>
                </div>
              </div>
              <div className="pop-image">
                <span>&times;</span>
                <img src="img/gallery/1.jpg" alt="gallery-img" />
              </div>
            </div>
          </div>
        </section>
        <section className="Instructions" id="instructions">
          <div className="container">
            <div className="heading">
              <h2>Instructions</h2> Please Do Follow Kindly...
              <p>
              <b>1.Entrance:</b> Begin your adventure by entering through the main gate. Present your tickets or passes for a quick and efficient entry process.<br></br>

              <b>2.Map Exploration:</b> Grab a park map at the entrance and take a moment to familiarize yourself with the layout. Highlight key attractions, shows, and dining spots to plan your day effectively.<br></br>

              <b>3.Schedule Check:</b> Consult the daily schedule for shows, parades, and character meet-and-greets. Plan your day around these events to make the most of your visit.<br></br>

              <b>4.Height Restrictions:</b> Before queuing up for rides, check height restrictions to ensure that everyone in your group meets the criteria. Safety is a priority.<br></br>

              <b>5.Queue Etiquette:</b> Be courteous to fellow visitors in ride queues. Follow the designated lines, and respect the instructions of park staff. This helps maintain a positive and enjoyable atmosphere.<br></br>

              <b>6.Hydration and Snacks:</b> Stay hydrated throughout the day, especially in warmer weather. Carry water bottles and light snacks to keep energy levels up.<br></br>

              <b>7.Photography Guidelines:</b> Capture magical moments but be mindful of the park's photography policies. Some areas or rides may have restrictions for the safety and enjoyment of all guests.<br></br>

              <b>8.Rest Areas:</b> Take breaks in designated rest areas to recharge. Some parks have themed relaxation spots where you can unwind away from the crowds.<br></br>

              <b>9.Lost and Found:</b> If you misplace any belongings, contact the park's Lost and Found. Provide detailed descriptions, and they will assist in reuniting you with your items.<br></br>

              <b>10.Closing Time:</b> Be aware of the park's closing time. Plan to wrap up your day a bit earlier to allow for final rides or purchases. Follow exit signs and directions from staff for a smooth departure.<br></br>
              </p>
            </div>
           </div>
          </section>  
        <footer>
        <section className="Association" id="Association">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="col-one">
                  <h4>Saturn ThemePark </h4>
                  <p>
                    Address : Saturn ThemePark,<br></br>  SathyRoad,Erode-638004.
                    {' '}
                  </p>
                  <p>
                    Contact No :{' '}
                    <a href="Ph: +91 9488833243 ">9488833243</a>
                  </p>
                  <p>Email : <a href="mailto:foundation@code.com">Saturnthemepark@gmail.com</a></p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="col-two">
                  <h4>Link</h4>
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#donation">Types Of Games</a>
                    </li>
                    <li>
                      <a href="#mission-id">About US</a>
                    </li>
                    <li>
                      <a href="#instructions">Instructions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="col-one">
                  <p>Copyright &copy; 2023 | All Right Reserved</p>
                </div>
              </div>
            </div>
          </div>
          </section>
        </footer>

        <script src="js/script.js"></script>
      </body>
    </html>
  );
}

export default Home1;


