// Navbar.js
import React  from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const  Navbar=()=> {
  const { loginWithRedirect } = useAuth0();
  const  { logout, isAuthenticated,user } = useAuth0();

  return (
    <nav class="navbar">
      <ul>
  <li class="abc"id='ag'><h3><a href="http://localhost:3000/?"style={{color:"#f7af14"}}>HostelStay</a></h3></li>      
  <li id='ag'><a class="active" href="#home">Home</a></li>
  <li id='ag'><a href="#about"onClick={window.location}>About</a></li>
  <li id='ag'><a href="#services">Services</a></li>
  <li id='ag'><a href="#contact">Contact</a></li>
  <li id='ag'><a href="http://localhost/php/form.php" target="_blank" rel="noopener noreferrer" >Show list</a></li>
  <li>{isAuthenticated && <p href='#gd'class="aqe"><img src={user.picture} alt={user.name}height="40px"/></p>}</li>
  {isAuthenticated ? (
  <li><a href='#logout'class="dev"><button onClick={() => logout({ returnTo: window.location.origin } )}>Logout</button></a></li> 
  
  ):(<li><a href='#login'class="def"><button onClick={() => loginWithRedirect()}>Login</button></a></li>
  )}
</ul>
</nav>
  );
}


export default Navbar;
