import React from 'react'
class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div id="copyright">
                                <p>Copyright © 2020 <a href="#"><br/> THE E-Guardians</a></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="scroll-top">
                                <a href="#HOME" id="scroll-to-top"><i className="fa fa-angle-up" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}
export default Footer;