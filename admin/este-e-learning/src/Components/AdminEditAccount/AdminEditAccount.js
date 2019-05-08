
import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/js/bootstrap';
import Axios from 'axios';
import decode from "jwt-decode";


class AdminEDitACcount extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            firstName:"",
            password:"",
            repPassword:""
        }
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
      onSubmit = (e) => {
        e.preventDefault();
        const decoded = (localStorage.getItem('user'));
        console.log(decode);
        const { email, firstName,password,repPassword } = this.state;
        Axios.put('http://localhost:8080/api/editAccount/'+decoded, {email, firstName,password,repPassword })
        .then((result) => {
            console.log(result);
            alert(result.data.msg);
        })
        .catch((error) => {
           console.error(error);
        });
      }
    render() {
        const {  email, firstName,password,repPassword } = this.state;
        return (
            
            <form className="col-md-9 editAccount-Admin" method="PUT" onSubmit={this.onSubmit}>
                <div className="title mt-5">
                    <h4>Update account</h4>
                </div>
                <div className="inputs row">
                    <div className="form-group col-6">
                        <label htmlFor="recipient-name" className="control-label">Email :</label>
                        <input className="form-control required" 
                        id="recipient-name" placeholder="Email" type="email" 
                        name="email" onChange={this.onChange} value={email}
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="recipient-name" className="control-label">First Name:</label>
                        <input className="form-control required" id="recipient-name" 
                        placeholder="First Name" type="text"
                        name="firstName" onChange={this.onChange} value={firstName} />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="recipient-name" className="control-label">Password:</label>
                        <input className="form-control required" id="recipient-name" 
                        placeholder="Password" type="text" name="password" 
                        onChange={this.onChange} value={password}/>
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="recipient-name" className="control-label">Repeat Password:</label>
                        <input className="form-control required" id="recipient-name"
                         placeholder="Repeat Password" type="text" name="repPassword" 
                         onChange={this.onChange} value={repPassword    }/>
                    </div>

                </div>
                <div className="btn-save">
                    <button className="btn btn-default mb-4 float-right">Save</button>
                </div>
            </form>



        );
    }
}

export default (AdminEDitACcount);