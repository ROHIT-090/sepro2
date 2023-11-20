import React from 'react';
import './cart.css'
import { Link } from 'react-router-dom';
function Cart() 
{
  return (
    <div className="cart">
        <h5>Select Booking Cart</h5>
            <p><h9><b>For 1  Person</b></h9><br></br>
             Amount : 750<br></br>              
              GST+CGST(20%) : 150<br></br>               
            -------------------<br></br>
             TotalAmount : 900<br></br>
             -------------------<br></br>
             <Link to="/Pay1"><button>Ok</button></Link></p>
             <p><h9><b>For 2 Persons</b></h9><br></br>
             Amount : 1500<br></br>              
              GST+CGST(20%) : 300<br></br>               
            -------------------<br></br>
             TotalAmount : 1800<br></br>
             -------------------<br></br>
             <Link to="/Pay2"><button>Ok</button></Link></p>
             <p><h9><b>For 3 Persons</b></h9><br></br>
             Amount : 2250<br></br>              
              GST+CGST(20%) : 450<br></br>               
            -------------------<br></br>
             TotalAmount : 2700<br></br>
             -------------------<br></br>
            <Link to="/Pay3"><button>Ok</button></Link></p>
             <p><h9><b>For 4 Persons</b></h9><br></br>
             Amount : 3000<br></br>              
              GST+CGST(20%) : 600<br></br>               
            -------------------<br></br>
             TotalAmount : 3600<br></br>
             -------------------<br></br>
            <Link to="/Pay4"><button>Ok</button></Link></p>
            <p><h9><b>For 5 Persons</b></h9><br></br>
             Amount : 3750<br></br>              
              GST+CGST(20%) : 750<br></br>               
            -------------------<br></br>
             TotalAmount : 4500<br></br>
             -------------------<br></br>
            <Link to="/Pay5"><button>Ok</button></Link></p>
            <p><h9><b>For 6 Persons</b></h9><br></br>
             Amount : 4500<br></br>              
              GST+CGST(20%) : 900<br></br>               
            -------------------<br></br>
             TotalAmount : 5400<br></br>
             -------------------<br></br>
            <Link to="/Pay6"><button>Ok</button></Link></p>
            <p><h9><b>For 7 Persons</b></h9><br></br>
             Amount : 5250<br></br>              
              GST+CGST(20%) : 1050<br></br>               
            -------------------<br></br>
             TotalAmount : 6300<br></br>
             -------------------<br></br>
            <Link to="/Pay7"><button>Ok</button></Link></p>
            <p><h9><b>For 8 Persons</b></h9><br></br>
             Amount : 6000<br></br>              
              GST+CGST(20%) : 1200<br></br>               
            -------------------<br></br>
             TotalAmount : 7200<br></br>
             -------------------<br></br>
            <Link to="/Pay8 "><button>Ok</button></Link></p>
            <p><h9><b>For 9 Persons</b></h9><br></br>
             Amount : 6750<br></br>              
              GST+CGST(20%) : 1350<br></br>               
            -------------------<br></br>
             TotalAmount : 8100<br></br>
             -------------------<br></br>
            <Link to="/Pay9"><button>Ok</button></Link></p>
            <p><h9><b>For 10 Persons</b></h9><br></br>
             Amount : 7500<br></br>              
              GST+CGST(20%) : 1500<br></br>               
            -------------------<br></br>
             TotalAmount : 9000<br></br>
             -------------------<br></br>
            <Link to="/Pay10"><button>Ok</button></Link></p>
              </div>
    );
}

export default Cart;



  