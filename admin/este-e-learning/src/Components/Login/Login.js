import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthHelperMethods from '../../AuthHelperMethods/AuthHelperMethods';
import Axios from 'axios';


 class Login extends Component {
    constructor(){
        super();
        this.state={ 
            email: '',
            password: '',
        }
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
      onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        Axios.post('http://localhost:8080/api/signin', { email, password })
        .then((result) => {
            console.log('====================================');
            console.log(result);
            console.log('====================================');
          localStorage.setItem('user', result.data.email);
          alert("hay"+result.data.firstName);
        })
        .catch((error) => {
              alert("error"+error);
        });
      }
    
    render() {
        const { email, password } = this.state;
        return (
            <div>
                  <section  className="h-100">
            <div  className="container h-100">
                <div  className="row justify-content-md-center h-100">
                    <div  className="card-wrapper">
                        <div  className="card fat">
                            <div  className="card-body">
                                <h4  className="card-title">Login</h4>
                                <form method="POST" onSubmit={this.onSubmit}>
                                    <div  className="form-group">
                                        <label  htmlFor="email">E-Mail Address</label>
    
                                        <input id="email" type="email"  className="form-control" 
                                               name="email" value={email} onChange={this.onChange} required
                                                autoFocus />
                                    </div>
    
                                    <div  className="form-group">
                                        <label  htmlFor="password">Password
                                            
                                        </label>
                                        <input id="password" type="password"  className="form-control" 
                                               name="password" required value={password}  onChange={this.onChange}
                                        data-eye/>
                                    </div>
    
                                    <div  className="form-group">
                                        <label>
                                            <input type="checkbox" name="remember"/> Remember Me
                                        </label>
                                    </div>
    
                                    <div  className="form-group no-margin">
                                        <button type="submit"  className="btn btn-primary btn-block">
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div  className="footer">
                            Copyright &copy; EST Learning
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
        );
    }
}

export default (Login);