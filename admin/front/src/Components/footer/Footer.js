import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/js/bootstrap';
import './footer.css';

class Footer extends Component {
    state = {  }
    render() {
        return (
            <footer id="footer" className="fixed-bottom">
            <p>Copyright ESTE-Learning, &copy; 2018</p>
          </footer> 
        );
    }
}

export default Footer;

