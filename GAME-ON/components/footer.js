
// yo can find css for these footer file here="style/footer.css".
// you have to simply link that stylesheet in your heading part
// for these file make one footer with id="footer" and make innerHtml for imported function
function footer()
{
    return `<div id="infooter">
    <div id="div1">
        <div id="weblogo">
            <a href="index.html"><img src="images/logo.png" alt="logo" width="100%" height="100%"></a>
        </div>
        <div id="playstore">
            <a href="">
                <img src="images/android.png" >
            </a>
            <a href="">
                <img src="images/ios.png" >
            </a>
        </div>
        <div id="copyright">
            <p>Project Group 16<span></span></p>
        </div>
        <div id="loweritems">
            <a href=""><p>FAQs</p></a>
            <a href=""><p>Privacy POlicy</p></a>
            <a href=""><p>Terms Of Service</p></a>
            <a href=""><p>Cancellation & Refund Policy</p></a>
        </div>
    </div>
    <div id="div2">
        <a href="about.html"><p>About Us</p></a>
        <a href="partner.html"><p>Partner With Us</p></a>
        <a href="brandact.html"><p>Brand Activations</p></a>
        <a href="corporate.html"><p>Corporate Offerings</p></a>
        <a href="contact.html"><p>contact Us</p></a>
    </div>
    <div id="div3">
        <a href="venues.html"><p>Book Venues</p></a>
        <a href="activities.html"><p>Activities</p></a>
        <a href="blog.html"><p>Blog</p></a>
        <a href="faq.html"><p>FAQ's</p></a>
    </div>
</div>`
}

export default footer 