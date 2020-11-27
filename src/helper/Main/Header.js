import React from 'react'
class Header extends React.Component {
    render() {
        return (
            <header className="header" id="HOME">
                {/* navigation bar*/}
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#loso-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" href="#">
                                <img src="images/logo-small.png" alt="logo" />
                            </a>
                        </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="loso-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#HOME" className="nav-item">HOME</a></li>
                                <li><a href="#ABOUT" className="nav-item">ABOUT</a></li>
                                <li><a href="#FEATURES" className="nav-item">FEATURES</a></li>
                                <li><a href="#SCREENS" className="nav-item">SCREENS</a></li>
                                <li><a href="#DOWNLOAD" className="nav-item">DOWNLOAD</a></li>
                                <li><a href="#CONTACT" className="nav-item">CONTACT</a></li>
                            </ul>
                        </div>{/* /.navbar-collapse */}
                    </div>{/* /.container-fluid */}
                </nav>
                <div className="header-overlay">
                    <div className="container header-container">
                        <div className="row">
                            <div className="col-md-12">
                                {/* Logo */}
                                <div className="logo text-center">
                                    <img src="images/logo.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="header-text">
                                    {/* Title & Description */}
                                    <h1> A clean and modern looking reponsive website</h1>
                                    <p> Built with great Passion!</p>
                                </div>
                                <div className="header-btns">
                                    {/* Header buttons */}
                                    <a className="btn btn-download wow fadeInLeft" href="#">Download</a>
                                    <a className="btn btn-tour wow fadeInRight" href="#"> Take A Tour
              <i className="fa fa-angle-down" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3 col-md-offset-1">
                                <div className="header-iphone">
                                    {/* Header iPhone */}
                                    <img src="images/iphone-header.png" alt="header iphone" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;