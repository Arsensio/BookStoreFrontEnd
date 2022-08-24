import React, {Component} from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <footer className="footer_section">
                <div className="container">
                    <p>
                        &copy; <span id="displayYear"></span> All Rights Reserved By
                        <a href="https://www.instagram.com/arsensio_20"> Arsensio_20</a>
                    </p>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;