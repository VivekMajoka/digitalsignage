import React, { Component } from "react";




export default class AppRegisterPage extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            confirmed_password: "",
            alertemail: false,
            alertpassword: false
        };
    }

    setEmail(event) {
        this.setState({ email: event.target.value })
    }
    setPassword(event) {
        this.setState({ password: event.target.value })
    }
    setConfirmPassword(event) {
        this.setState({ confirmed_password: event.target.value })
    }


    register(event) {
        this.setState({ alertemail: false, alertpassword: false })
        event.preventDefault();
        const { history } = this.props;
        console.log("hiii", this.state.email, this.state.password)
        const body = {
            "email": this.state.email,
            "password": this.state.password,
            "confirmed_password": this.state.confirmed_password
        }
        // var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        fetch("https://iptv-mgmt.ecntv.net/api/v2/auth/register/", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(body),
        }).then((response) => response.json())
            .then((res) => {
                console.log(res)
                if (res.data) {
                    localStorage.setItem('email', res.data.user.email)
                    history.push('/Register/OTP')
                } else {
                    console.log(res.errors.email)
                    if (res.errors.email) {
                        this.setState({ alertemail: true })
                    } else {
                        this.setState({ alertpassword: true })
                    }
                }
            })
    }
    render() {
        const { alertpassword, alertemail} = this.state
        return (
            <div className="bodyform">
                <form>
                    <h3 style={{ color: "white" }}>Register</h3>
                    <div className="form-group">
                        <label style={{ color: "white" }}>Email address</label>
                        <input type="email" autoComplete='on' className="form-control" placeholder="Enter email" onChange={(event) => this.setEmail(event)} />
                    </div>
                    <div className="form-group">
                        <label style={{ color: "white" }}>Password</label>
                        <input type="password" autoComplete='on' className="form-control" placeholder="Enter password" onChange={(event) => this.setPassword(event)} />
                    </div>
                    <div className="form-group">
                        <label style={{ color: "white" }}>Confirm Password</label>
                        <input type="password" autoComplete='on' className="form-control" placeholder="Enter password" onChange={(event) => this.setConfirmPassword(event)} />
                    </div>
                    <button style={{ background: "#17BAA1", border: "none" }} className="btn btn-primary btn-block" onClick={(event) => this.register(event)}>Submit</button>
                    {alertemail ?
                        <label style={{ color: "red", marginTop: 20 }}>*user with this email already exists.</label>
                        :
                        null
                    }
                    {alertpassword ?
                        <label style={{ color: "red", marginTop: 20 }}>*Password doesn't match</label>
                        :
                        null
                    }
                </form>
                {this.state.Resp}
            </div>
        );
    }
}