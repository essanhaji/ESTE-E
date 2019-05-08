import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/js/bootstrap';
import axios from 'axios';

class AdminPRof extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    DelateProf = (iid) => {
        axios.delete('http://localhost:8080/api/prof/'+ iid)
            .then(result => {
                if (result.success === false) {
                    alert("Oh user not removed");
                } else {
                    alert("Oh user  removed");
                }
            })
            .catch((error) => {
                console.log('====================================');
                console.log(error);
                console.log('====================================');
            });

    }
    componentDidMount = () => {
        axios.get('http://localhost:8080/api/usersProf')
            .then(res => {
                console.log(res);
                this.setState({ users: res.data });
            })
            .catch((error) => {
                console.log('====================================');
                console.log(error);
                console.log('====================================');
            });
    }
    render() {
        let st = { width: "100%" }
        return (
            <div className="col-md-9 bd mb-5">
                <h3 className="mt-3 mr-2 mb-5">Gestion des professeurs</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table id="mytable" className="table table-bordred table-striped">
                                <thead>
                                    <tr>
                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>Email</th>
                                        <th>Delete</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {this.state.users.map(item => {
                                        return (
                                            <tr key={item._id}>
                                                <td>{item.nom}</td>
                                                <td>{item.prenom}</td>
                                                <td>{item.email}</td>
                                                <td className="btn-refuse"><p><button
                                                    className="btn btn-danger"
                                                    onClick={() => this.DelateProf(item._id)}>
                                                    <span className="fas fa-times">
                                                    </span> Supprimer</button>
                                                </p>
                                                </td>
                                            </tr>
                                            )
                                    }

                                    )
                                    }

                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>


                <div className="modal fade" id="edit" tabIndex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                                <h4 className="modal-title custom_align" id="Heading">Edit Your Detail</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <input className="form-control " type="text" placeholder="Mohsin" />
                                </div>
                                <div className="form-group">

                                    <input className="form-control " type="text" placeholder="Irshad" />
                                </div>
                                <div className="form-group">
                                    <textarea rows="2" className="form-control" placeholder="CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan"></textarea>


                                </div>
                            </div>
                            <div className="modal-footer ">
                                <button type="button" className="btn btn-warning btn-lg" style={st}><span className="glyphicon glyphicon-ok-sign"></span> Update</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

export default (AdminPRof); 