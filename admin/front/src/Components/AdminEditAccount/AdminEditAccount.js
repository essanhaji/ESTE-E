
import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/js/bootstrap';

class AdminEDitACcount extends Component {
    state = {}
    render() {
        return (
            <div className="col-md-9 editAccount-Admin">
                <div className="title mt-5">
                    <h4>Update account</h4>
                </div>
                <div className="inputs row">
                    <div className="form-group col-6">
                        <label htmlFor="recipient-name" className="control-label">First Name:</label>
                        <input className="form-control required" id="recipient-name" placeholder="First Name" type="text" />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="recipient-name" className="control-label">Last Name:</label>
                        <input className="form-control required" id="recipient-name" placeholder="Last Name" type="text" />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="recipient-name" className="control-label">Password:</label>
                        <input className="form-control required" id="recipient-name" placeholder="Password" type="text" />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="recipient-name" className="control-label">Repeat Password:</label>
                        <input className="form-control required" id="recipient-name" placeholder="Repeat Password" type="text" />
                    </div>

                </div>
                <div className="btn-save">
                    <button className="btn btn-default mb-4 float-right">Save</button>
                </div>
            </div>



        );
    }
}

export default (AdminEDitACcount);