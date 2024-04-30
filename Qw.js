import React from 'react'
function form(){
  return(
    <div align="center">
    <div class="container">
      
  <form action="http://localhost:8000/connect.php"method="post">
    <div align="center">
      <h3 style={{color:"#f7af14"}}align="center" >Registration Form</h3><br></br>
  <div class="row">
    <div class="col-25">
      <label for="fname">Registration No<br></br></label>
    </div>
    <div class="col-75">
      <input type="text" id="fname"autoFocus name="Registration" placeholder="Registration No"Required/>
    </div>
  </div>
  <div class="row" >
    <div class="col-25">
      <label for="lname">Student Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="Student" placeholder="Student Name"Required/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="country">Mobile Number</label>
    </div>
    <div class="col-75">
    <input type="text" id="lname" name="Mobile" placeholder="Mobile Number"Required/>
    
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">Student Category</label>
    </div>
    <div class="col-75">    
    <input type="text" id="lname" name="Category" placeholder="Category"Required/>

    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">JEE MAINS Rank</label>
    </div>
    <div class="col-75">    
    <input type="text" id="lname" name="Rank" placeholder="JEE MAINS Rank"Required/>

    </div>
  </div><br/>
  
  <div class="row">
    <input type="Submit" value="Submit"/>
  </div>
  </div>
  </form>
</div>
</div>
)
}

export default form;