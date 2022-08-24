import React, {Component} from 'react';
import UserService from "../services/UserService";

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            check:false,
            isLogin: false
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeBox = this.onChangeBox.bind(this);
    }

    onChangeUsername = (event) => {
        this.setState({username: event.target.value});
        console.log(this.state.username);
    }

    onChangePassword = (event) => {
        this.setState({password: event.target.value});
        console.log(this.state.password);
    }

    onChangeBox = (event)=>{
        this.setState({check:!this.state.check});
        console.log(this.state.check);
    }

    onRegisterUser = (e) => {
        e.preventDefault();
        if (this.state.username!==''&& this.state.password!==''&&this.state.check!==false){
            let newUser = {

                username: this.state.username,
                password: this.state.password,
                role: '',
                blocked: ''
            }
            console.log(JSON.stringify(newUser));
            UserService.createUser(JSON.stringify(newUser)).then(res=>{
                console.log(res.data)
                this.props.history.push("/login");
                window.location.reload();
            }).catch(this.alertUser)
        }


    }
    alertUser = (e)=>{
        alert("USERNAME ALREADY EXIST")
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
                backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/001/925/928/large_2x/digital-homework-concept-free-vector.jpg)",
                backgroundSize: "cover"
            }}>
                <div className="login">
                    <h1 className="text-center">Registration</h1>
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
                        <div className="form-group form-check">
                            <input className="form-check-input" onChange={this.onChangeBox} type="checkbox" id="check" required/>
                            <label className="form-check-label" htmlFor="check" style={{fontSize: "14.5px"}}>I accept
                                the <a href="/" style={{color: "#2085ff"}}>Term of User</a> & <a href="/"
                                                                                                 style={{color: "#2085ff"}}>Term
                                    of User</a></label>
                        </div>
                        <input className="btn btn-success w-100" type="submit" style={{marginBottom: "10px"}}
                               value="SIGN IN" onClick={this.onRegisterUser}/>
                        <div className="form-group form-check text-center"
                             style={{marginBottom: "-2px", paddingTop: "10px"}}>
                            <label className="form-label ">Already have account? </label><a href="/login"
                                                                                            style={{color: "#2085ff"}}> Login.</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterComponent;