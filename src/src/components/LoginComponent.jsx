import React, {Component} from 'react';
import Axios from "axios";


class LoginComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',

            isLogin: false
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    onChangeUsername = (event) => {
        this.setState({username: event.target.value});
        console.log(this.state.username);
    }

    onChangePassword = (event) => {
        this.setState({password: event.target.value});
        console.log(this.state.password);
    }

    loginUser = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password}
        console.log(JSON.stringify(user));


        if (this.state.username !== '' && this.state.password !== '') {
            Axios.post('http://localhost:4000/auth/login', JSON.stringify(user), {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                localStorage.setItem("jwtToken", response.data.token);
                localStorage.setItem("role", response.data.role);
                localStorage.setItem("username", response.data.username);
                this.setState({isLogin: true})
                this.props.history.push("/");
                window.location.reload();
            }).catch(this.isLogin)
        }

    }

    isLogin = () => {
        alert("INVALID USERNAME OR PASSWORD")
        window.location.reload();
    }


    render() {
        return (
            <div style={{
                margin: "0",
                padding: "0",
                boxSizing: "border-box",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/001/925/945/original/education-book-concept-free-vector.jpg)",
                backgroundSize: "cover"
            }}>
                <div className="login">
                    <h1 className="text-center">Hello Again</h1>
                    <form className="needs-validation">
                        <div className="form-group was-validated">
                            <label className="form-label" form="email">Username</label>
                            <input className="form-control" type="text" id="email" onChange={this.onChangeUsername}
                                   required/>
                            <div className="invalid-feedback">
                                Please enter your username
                            </div>
                        </div>
                        <div className="form-group was-validated">
                            <label className="form-label" form="password">Password</label>
                            <input className="form-control" type="password" id="password"
                                   onChange={this.onChangePassword} required/>
                            <div className="invalid-feedback">
                                Please enter your password
                            </div>
                        </div>
                        <input className="btn btn-success w-100" type="submit"
                               style={{marginBottom: "10px", marginTop: "20px"}} value="SIGN IN"
                               onClick={this.loginUser}/>
                        <div className="form-group form-check text-center"
                             style={{marginBottom: "-2px", paddingTop: "10px"}}>
                            <label className="form-label ">New to Flup.kz? </label><a href="/register"
                                                                                      style={{color: "#2085ff"}}> Create
                            an account .</a>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default LoginComponent;