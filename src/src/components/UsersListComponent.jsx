import React, {Component} from 'react';
import {FaEdit, FaTimes} from "react-icons/fa";
import BookService from "../services/BookService";
import UserService from "../services/UserService";

class UsersListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.changeBlockUser = this.changeBlockUser.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
    }

    componentDidMount() {

        UserService.getUsers().then(res => {
            this.setState({users: res.data});
        })
    }

    changeBlockUser = (e,id,role) => {
        console.log(e.target.value);
        console.log(id)
        console.log(role)

        let user = {
            username:'',
            password:'',
            role:role,
            blocked:e.target.value
        }

        UserService.blockUser(user,id).then(res=>{
            window.location.reload();
        })
    }

    onChangeRole = (e,id,blocked)=>{

        let user = {
            username:'',
            password:'',
            role:e.target.value,
            blocked:blocked
        }

        UserService.blockUser(user,id).then(res=>{
            window.location.reload();
        })


    }

    render() {
        return (
            <section className="authors">
                <div className="container">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-xs-5">
                                        <h2>User <b>Management</b></h2>
                                    </div>
                                </div>
                            </div>
                            <table className="table table-striped table-hover">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>{
                                    this.state.users.map(user => (
                                        <tr>
                                            <td>{user.id}</td>
                                            <td><a href="#"><img style={{paddingRight: "20px"}} width={45}
                                                                 src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
                                                                 className="avatar"
                                                                 alt=""/>{user.username}</a></td>
                                            <td>
                                                <select
                                                    className="form-select form-select-lg"
                                                    onChange={(event)=>this.onChangeRole(event,user.id,user.blocked)}
                                                    aria-label="Default select example" defaultValue={user.role}>
                                                    <option value="ADMIN">ADMIN</option>
                                                    <option value="USER">USER</option>
                                                </select>

                                            </td>
                                            <td>
                                                <span className="status text-success"
                                                      style={{paddingRight: "5px"}}>&bull;</span>
                                                <select onChange={(event)=>this.changeBlockUser(event,user.id,user.role)}
                                                    className="form-select form-select-lg"
                                                    aria-label="Default select example">
                                                    <option value={user.blocked}>{String(user.blocked)}</option>
                                                    <option value={!user.blocked}>{String(!user.blocked)}</option>
                                                </select>
                                            </td>
                                            <td>
                                                <a href="#" className="settings" title="Settings" data-toggle="tooltip"><FaEdit/></a>
                                                <a href="#" className="delete" title="Delete"
                                                   data-toggle="tooltip"><FaTimes/></a>
                                            </td>
                                        </tr>
                                    ))
                                }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default UsersListComponent;