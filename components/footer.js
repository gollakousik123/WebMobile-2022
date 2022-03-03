
// you can find css for these footer file here="style/footer.css".
// you have to simply link that stylesheet in your heading part
// for these file make one footer with id="footer" and make innerHtml for imported function
function footer() {
    return `<div id="infooter">
    <div id="div1">
        <div id="weblogo">
            <a href="index.html"><img src="logo.png" alt="logo" width="100%" height="100%"></a>
        </div>
        <div id="playstore">
            <a href="">
                <img src="android.png"?auto=format,compress " >
            </a>
            <a href="">
                <img src="ios.png"?auto=format,compress" >
            </a>
        </div>
        <div id="copyright">
            <p>Group 16@<span> All Rights Reserved.</span></p>
        </div>
        <div id="loweritems">
            <a href="faq.html"><p>FAQs</p></a>
            <a href=""><p>Privacy POlicy</p></a>
            <a href=""><p>Terms Of Service</p></a>
            <a href=""><p>Cancellation & Refund Policy</p></a>
        </div>
    </div>
    <div id="div2">
        <a href="about.html"><p>About Us</p></a>
        <a href="contact.html"><p>contact Us</p></a>
    </div>
    <div id="div3">
        <a href="venues.html"><p>Book Venues</p></a>
        <a href="activities.html"><p>Activities</p></a>
        <a href="blog.html"><p>Blog</p></a>
        <a href="faq.html"><p>FAQ's</p></a>
    </div>
    <div id="div4">
        <a href=""><p>Facebook</p></a>
        <a href=""><p>Twitter</p></a>
        <a href=""><p>Instagram</p></a>
        <a href=""><p>LinkdIn</p></a>
    </div>
</div>`
}

export default footer 