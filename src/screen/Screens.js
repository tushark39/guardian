import React from 'react'
export const About = () => {
    return (
        <section id="ABOUT">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="section-title">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus ultricies nibh, vitae sodales purus. Aenean volutpat ullamcorper cursus. Duis tristique sit amet augue ac vestibulum</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose-us-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {/* about iphone*/}
                            <div className="about-iphone wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                                <img className="img-responsive" src="images/about-iphone.png" alt="iphone" />
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                            {/* this is for why choose us title*/}
                            <div className="choose-us-title">
                                <h2>Why Choose Us?</h2>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque lacus dui, interdum sit amet varius.</p>
                            </div>
                            {/* why choose us desciption*/}
                            <div className="choose-us-des">
                                <div className="choose-us-item wow fadeInUp" data-wow-duration=".5s" data-wow-delay="1s">
                                    {/* chooses icon*/}
                                    <div><i className="fa fa-bolt" /></div>
                                    {/* title and description*/}
                                    <h3>QUISQUE LACUS DUI</h3>
                                    <p> Lipsum Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque lacus dui, interdum sit amet varius a, cursus sit amet sapien. Donec eu placerat nisi.</p>
                                </div>
                                <div className="choose-us-item  wow fadeInUp" data-wow-duration=".8s" data-wow-delay="1.3s">
                                    {/* chooses icon*/}
                                    <div><i className="fa fa-bullhorn" /></div>
                                    {/* title and description*/}
                                    <h3>DONEC EU PLACERAT NISI</h3>
                                    <p> Diso Lipsum Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque lacus dui, interdum sit amet varius a, cursus sit amet sapien. Donec eu placerat nisi.</p>
                                </div>
                                <div className="choose-us-item  wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">
                                    {/* chooses icon*/}
                                    <div><i className="fa fa-flag" /></div>
                                    {/* title and description*/}
                                    <h3>PERSPICIATIS UNDE OMNIS</h3>
                                    <p> Sed ut perspiciatis Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.unde omnis iste natus error sit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export const Testimonial = () => {
    return (
        <section className="testimonial">
            <div className="testimonial-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 wow bounceInDown">
                            <div id="carousel-testimonial" className="carousel slide" data-ride="carousel">
                                {/* indicators */}
                                <ol className="carousel-indicators">
                                    <li data-target="#carousel-testimonial" data-slide-to={0} className="active" />
                                    <li data-target="#carousel-testimonial" data-slide-to={1} style={{marginLeft:14}} />
                                </ol>
                                {/* wrapper for slides */}
                                <div className="carousel-inner">
                                    {/* item 01 */}
                                    <div className="item active text-center">
                                        <img src="https://avatars1.githubusercontent.com/u/30358707?s=460&u=edbd82b8ed07aa11f4d6fff6526e5d867e7b89dc&v=4" alt="testimonial" className="center-block" style={{height:250,width:250}} />
                                        <div className="testimonial-caption">
                                            <h2>Kunal</h2>
                                            <h4><span> CEO , </span>The E-Guardians</h4>
                                            <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.”</p>
                                        </div>
                                    </div>
                                    {/* item 02 */}
                                    <div className="item text-center">
                                        <img src="https://avatars1.githubusercontent.com/u/65556368?s=400&u=9730bacc26c43d6c1d7c44c28c5c3dce72509f58&v=4" alt="testimonial" className="center-block" style={{height:250,width:250}} />
                                        <div className="testimonial-caption">
                                            <h2>TUSHAR</h2>
                                            <h4><span> Sr. Front-End Developer, </span>THE E-Guardians</h4>
                                            <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export const Features = () => {
    return (
        <section id="FEATURES" className="features">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="section-title wow fadeIn" data-wow-duration="1s">
                            <h2>Features</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features-inner-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 wow fadeInLeft" data-wow-duration="1s">
                            {/* left side feature item1*/}
                            <div className="left-feature-item">
                                {/* icon*/}
                                <div className="left-feature-item-icon">
                                    <i className="fa fa-desktop" />
                                </div>
                                {/* feature icon title and description*/}
                                <h3>RETINA READY</h3>
                                <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                            {/* left side feature item2*/}
                            <div className="left-feature-item">
                                {/* icon*/}
                                <div className="left-feature-item-icon">
                                    <i className="fa fa-mobile" />
                                </div>
                                {/* feature icon title and description*/}
                                <h3>MOBILE READY</h3>
                                <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                            {/* left side feature item3*/}
                            <div className="left-feature-item">
                                {/* icon*/}
                                <div className="left-feature-item-icon">
                                    <i className="fa fa-eye" />
                                </div>
                                {/* feature icon title and description*/}
                                <h3>EASY LAYOUT</h3>
                                <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-iphone">
                                <img className="wow bounceIn img-responsive" data-wow-duration="1s" src="images/iphone-02.png" alt="iphone image" />
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInRight" data-wow-duration="1s">
                            {/* right feaature item1*/}
                            <div className="right-feature-item">
                                {/* icon*/}
                                <div className="right-feature-item-icon">
                                    <i className="fa fa-certificate" />
                                </div>
                                {/*title and description*/}
                                <h3>CERTIFIED SOLUTION</h3>
                                <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                            {/* right feaature item2*/}
                            <div className="right-feature-item">
                                {/* icon*/}
                                <div className="right-feature-item-icon">
                                    <i className="fa fa-rss" />
                                </div>
                                {/*title and description*/}
                                <h3>CONSTANT FEED</h3>
                                <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                            {/* right feaature item3*/}
                            <div className="right-feature-item">
                                {/* icon*/}
                                <div className="right-feature-item-icon">
                                    <i className="fa fa-database" />
                                </div>
                                {/*title and description*/}
                                <h3>SECURE DATA</h3>
                                <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export const PurchaseNow = () => {
    return (
        <section className="purchase-now">
            <div className="container">
                <div className="row  wow fadeInLeftBig" data-wow-duration="1s">
                    <div className="col-md-9">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et olore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                    </div>
                    <div className="col-md-3">
                        <a className="btn btn-primary btn-purchase-now" href="#">Purchase Now</a>
                    </div>
                </div>
            </div>
        </section>

    )
}
export const Screen = () => {
    return (
        <section id="SCREENS" className="screens">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="section-title">
                            <h2>Screens</h2>
                            <p>Mauris a mauris feugiat, luctus mauris a, sollicitudin ex. Pellentesque et tortor in risus elementum aliquet. Etiam facilisis justo urna, id feugiat magna scelerisque non.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* screen slider*/}
            <div className="screen-slider  wow bounceInRight" data-wow-duration="1s">
                <div className="container">
                    <div className="row">
                        <div className="bxslider">
                            <div className="item">
                                <img src="images/screen-01.png" alt="screen1" />
                            </div>
                            <div className="item">
                                <img src="images/screen-02.png" alt="screen1" />
                            </div>
                            <div className="item">
                                <img src="images/screen-03.png" alt="screen1" />
                            </div>
                            <div className="item">
                                <img src="images/screen-04.png" alt="screen1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export const Counter = () => {
    return (
        <section class="counter">

            <div class="counter-overlay">

                <div class="container  wow bounceInLeft" data-wow-duration="1s">

                    <div class="row text-center">

                        <div class="col-md-3">

                            <div class="counter-item">

                                <div><i class="fa fa-cloud-download"></i></div>
                                <h2><span class="counter-num">4756</span><span>+</span></h2>
                                <p>Downloads</p>

                            </div>

                        </div>

                        <div class="col-md-3">

                            <div class="counter-item">

                                <div><i class="fa fa-gift"></i></div>
                                <h2><span class="counter-num">1111</span><span>+</span></h2>
                                <p>Awards</p>

                            </div>

                        </div>

                        <div class="col-md-3">

                            <div class="counter-item">

                                <div><i class="fa fa-heart-o"></i></div>
                                <h2><span class="counter-num">999</span><span>+</span></h2>
                                <p>Likes</p>

                            </div>

                        </div>

                        <div class="col-md-3">

                            <div class="counter-item">

                                <div><i class="fa fa-check"></i></div>
                                <h2><span class="counter-num">3333</span><span>+</span></h2>
                                <p>Recommended</p>

                            </div>

                        </div>


                    </div>

                </div>

            </div>


        </section>
    )
}
export const DownloadNow = () => {
    return (
        <section id="DOWNLOAD" className="download-now">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="section-title">
                            <h2>Download Now</h2>
                            <p>Vestibulum congue eros ac neque dignissim, vel imperdiet neque consectetur. Maecenas condimentum cursus maximus. Praesent eu diam efficitur,</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* for the image*/}
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2  wow fadeInUp" data-wow-duration="1s">
                        <img className="img-responsive" src="images/download-screen.png" alt="download screen" />
                    </div>
                </div>
            </div>
        </section>

    )
}
export const AvailableOn = () => {
    return (
        <section className="available-on">
            <div className="container  wow bounceInRight" data-wow-duration="1s">
                <div className="row">
                    <div className="col-md-6">
                        <div className="available-title">
                            <h2>Available On</h2>
                            <p>Curabitur vitae dolor fermentum, egestas nulla eu, varius lacus.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <a href="#">
                                <div className="col-md-4 no-padding">
                                    <div className="available-on-item">
                                        <i className="fa fa-apple" />
                                        <div className="available-on-inner">
                                            <h2>iOS</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="col-md-4 no-padding">
                                    <div className="available-on-item">
                                        <i className="fa fa-android" />
                                        <div className="available-on-inner">
                                            <h2>ANDROID</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="col-md-4 no-padding">
                                    <div className="available-on-item">
                                        <i className="fa fa-windows" />
                                        <div className="available-on-inner">
                                            <h2>WINDOWS</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export const ContactUs = () => {
    return (
        <section id="CONTACT" className="contact-us">
            <div className="container wow bounceIn">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="section-title">
                            <h2>CONTACT US</h2>
                            <p>Nulla blandit sem sed neque pretium mattis. Etiam consectetur eleifend felis porttitor porttitor. Phasellus sit amet augue fringilla, fringilla lectus at, tincidunt ante</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* form for the contact us*/}
            <div className="contact-us-form wow bounceIn">
                <div className="container">
                    <div className="form">
                        <div className="row">
                            <div className="col-md-4">
                                <input type="text" className="form-control" id="name" placeholder="Name" />
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                            </div>
                            <div className="col-md-8">
                                <textarea className="form-control" id="message" rows={25} cols={10} placeholder="Message Text.." defaultValue={""} />
                                <button type="button" className="btn btn-default submit-btn form-submit">SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* social icons*/}
            <div className="container">
                <div className="row">
                    <div className="col-md-12 wow bounceInLeft">
                        <div className="social-icons">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a href="#"><i className="fa fa-youtube" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}