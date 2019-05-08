import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/js/bootstrap';
import { browserHistory } from 'react-router-dom';

class AdminHOme extends Component {
   
    ChangePage=()=>{
        this.props.history.push('/AdminEditAccount');
    }
    render() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
       
        return (

            <div className="col-md-9 Dashboard-home ">
                <div className=" row">
                    <h4 className="col-12">Welcome, Mr Abdelkarim ESSOUBAKI</h4>
                    <p className="col-8">This is your System Home. You can see the progress you've made with your work and manage the wesbite or assigned tasks.</p>
                </div>
                <div className="row">
                    {/* <a href="Admin_EditAccount.html"></a> */}
                    <p className="col-md-3 col-sm-4 col-lg-2 btn btn-primary ml-3"
                     onClick={this.ChangePage}
                    >
                    Update Profile
                    </p>
                </div>

                <div className="cards d-flex justify-content-between mt-4 ">
                    <div className="One-card ">
                        <i className="fas fa-user-graduate logo bg-success "></i>
                        <b className="title "><p>Etudiants</p></b>
                        <h5 className="nbr ">Nbr: 125</h5>
                        <p className="date ">
                           21- Janvier 2017
                        </p>
                    </div>
                    <div className="One-card ">
                        <i className="fas fa-user-tie logo bg-primary"></i>
                        <b className="title "><p>Professeurs</p></b>
                        <h5 className="nbr ">Nbr: 125</h5>
                        <p className="date ">23- Janvrier 2017</p>
                    </div>
                    <div className="One-card ">
                        <i className="fas fa-cube logo bg-warning "></i>
                        <b className="title "><p>Modules</p></b>
                        <h5 className="nbr ">Nbr: 125</h5>
                        <p className="date ">23- Janvrier 2017</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default (AdminHOme);