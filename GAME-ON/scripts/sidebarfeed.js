function navbarsidebar(){

    return `  <div id="navbox">

    <div id="navbox_img">
       <a href="index.html"> <img src="images/logo.png" height="100%" width="100%"/></a>
    </div>
    
    <div id="navdiv">
    <ul type="none">
        <li class="offer"><a href="#">Offer</a></li>
        <li class="offer"><a href="#">Partner with us</a></li>

        <li>
        <div id="mainmenu">
        <div id="mainm">
        <div id="top1"><img  src="images/user_blank.png" height="37"/></div>
        <div><p id="mobnum">9021553726</p></div>
        <div id="down"><img src="images/arrow_light.png" height="10" /></div>
       </div>
        <div id="menu">
        <ul type="none">
        <li class="d1"><a href="login_mybooking.html">My Profile</a></li>
        <div id="pline"></div>
        <li class="d2" id="logoutBtn">Logout</li>
        </ul>
        </div>
        
        </div>
        </li>
    
    </ul>
    </div>
   

    </div>


    <!-- bottom part -->

    <div id="Vbox">


    <div id="verticalbox1" >
        <img  src="images/user_blank.png" >
        <p id="mob">9021553726</p>
       <div id="line"></div>

       <div id="sidebtn">
     <a href="login_profile.html" >  <div id="profile">
           <img src="https://playo-website.gumlet.net/icons/edit-profile.svg" />
           <p >Profile</p>
       </div></a>
       <a href="login_mybooking.html" > <div id="profile" >
        <img src="https://playo-website.gumlet.net/icons/bullet-list.svg" />
        <p>My Booking</p>
    </div></a>
    <a href="login_feedback.html" > <div id="profile" class="feedback1">
        <img src="images/backarrow.png" />
        <p style="color:red">Feedback</p>
    </div></a>
</div>

    </div>

    <div id="verticalbox2">


    </div>

</div>`

}

export default navbarsidebar