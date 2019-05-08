import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/js/bootstrap';

class AdminFIlierMOdul extends Component {
    state = {}

    render() {
        let st = { width: '100%' };
        return (

            <div className="filiers col-md-9 bd mb-5">
                <h3 className="mt-3 mr-2 mb-3">Gestion des Filieres</h3>
                <button className="btn btn-primary mb-3 float-right" data-toggle="modal" data-target=".bd-example-modal-lg"><i className="fas fa-plus"></i> Add new module</button>

                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Gestion des modules</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="inputs col-md-5">
                                        <div className="form-group ">
                                            <label htmlFor="recipient-name" className="control-label">Code :</label>
                                            <input className="form-control required" id="recipient-name" placeholder="Code" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="control-label">Titre:</label>
                                            <input className="form-control required" id="recipient-name" placeholder="Titre" type="text" />
                                        </div>
                                        <div className="form-group ">
                                            <label htmlFor="recipient-name" className="control-label">Semester:</label>
                                            <input className="form-control required" id="recipient-name" placeholder="Semester" type="text" />
                                        </div>
                                    </div>



                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="table-responsive">
                                                    <table id="mytable" className="table table-bordred table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th>Code</th>
                                                                <th>Titre</th>
                                                                <th>Semestre</th></tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <td>Module 1</td>
                                                                <td>Gestion de projet</td>
                                                                <td>S5</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Module 1</td>
                                                                <td>Gestion de projet</td>
                                                                <td>S5</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Module 1</td>
                                                                <td>Gestion de projet</td>
                                                                <td>S5</td>
                                                            </tr>

                                                            <tr>
                                                                <td>Module 1</td>
                                                                <td>Gestion de projet</td>
                                                                <td>S5</td>
                                                            </tr>
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




                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row table-filiers">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table id="mytable" className="table table-bordred table-striped">
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th></th>
                                        <th>| Filiere</th>
                                        <th></th>
                                        <th></th></tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>GI</td>
                                        <td>DUT</td>
                                        <td>Ginie Informatique</td>
                                        <td className="btn-accept"><p><button className="btn btn-success"><span className="fas fa-check"></span> update</button></p></td>
                                        <td className="btn-refuse"><p><button className="btn btn-warning"><span className="fas fa-times"></span> Delete</button></p></td>
                                    </tr>

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

export default (AdminFIlierMOdul);