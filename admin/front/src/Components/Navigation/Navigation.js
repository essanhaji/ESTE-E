import React, { Component } from 'react';
import './Navigation.css';
import 'jquery';
import '../../../node_modules/bootstrap/dist/js/bootstrap';


class Navigation extends Component {
    render() {
        let style ={
            padding:0,
            margin:0
        };
        return (
            <div className="bdAdmin">
                <div className="navbar bg-dark navbar-dark navbar-expand-sm">
                    <div className="container">
                        <div className="navbar-brand d-none d-sm-inline-block">EST Learning</div>
                        <button type="submit" className="btn btn-outline-light">Logout</button>
                    </div>
                </div>

                <section className="breadcrumb">
                    <div className="container">
                        <ol className="breadcrumb" style={style}>
                            <li className="breadcrumb-item">System</li>
                            <li className="breadcrumb-item active">{this.props.directory}</li>
                        </ol>
                    </div>
                </section>
            </div>
        );
    }
}

export default Navigation;
