import React,{Component} from "react";
import UserService from "../services/UserService";

class ListUsersComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }
    editUser(id){
        this.props.history.push('/update-user/'+id);
    }

    componentDidMount() {
        UserService.getUsers().then((res)=>{
            console.log(res)
            this.setState({
                users: res.data
            })
        });
    }
    addUser(){
        this.props.history.push('/add-users');
    }


    render() {
        return(
            <div>
                <h2 className="text-center">Users List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addUser.bind(this)}> Add User </button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>user id</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.userName}</td>
                                            <td>{user.password}</td>
                                            <td>{user.role}</td>
                                            <td>
                                                <button onClick={()=>this.editUser(user.id)} className="btn btn-info">Update</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }

}
//
// render() {
//     this.state.books.map((book,index)=>{
//             if (index%3===0)
//                 return(
//                     <div className="row">
//                         <div className="col">{array[index]}</div>
//                         <div className="col">{array[index + 1]}</div>
//                         <div className="col">{array[index + 2]}</div>
//                     </div>
//                 )
//         }
//     )
// }

export default ListUsersComponent