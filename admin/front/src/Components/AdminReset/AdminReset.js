import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/js/bootstrap';

class AdminREset extends Component {
    state = {}
    render() {
        return (
            <div className="col-md-9 reset">
                <p><b>Réinitialiser le system maintenant</b></p>
                <button><i className="fas fa-redo-alt"></i> Restart Now</button>
            </div>
        );
    }
}

export default (AdminREset);