import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';





export default class Createuser extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            Resp: ""
        };
    }
    setUsername(event) {
        this.setState({ username: event.target.value })
    }
    setEmail(event) {
        this.setState({ email: event.target.value })
    }
    setPassword(event) {
        this.setState({ password: event.target.value })
    }
    setConfirmPassword(event) {
        this.setState({ confirm_password: event.target.value })
    }

    register(event) {
        event.preventDefault();
        const token = localStorage.getItem('token')
        const { history } = this.props;
        console.log("hiii", this.state.email, this.state.password)
        const body = {
            "username": this.state.username,
            "email": this.state.email,
            "password": this.state.password,
            "confirm_password": this.state.confirm_password
        }
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        fetch(proxyUrl + "http://196.29.238.100/auth/register/", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(body),
        }).then((response) => response.json())
            .then((res) => {
                console.log(res, "hiiii")
                if (res.token) {
                    history.push('/Home')
                } else {
                    console.log(res.errors)
                }
            })
    }
    render() {
        return (
            <div>
                <>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/Home">Digital Signage</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/Register">Create User</Nav.Link>
                            {/* <Nav.Link href="#pricing">Assign Layout</Nav.Link> */}
                        </Nav>
                    </Navbar>
                    <div className="bodyform">
                        <form>
                            <h3 style={{ color: "white" }}>Create User</h3>
                            <div className="form-group">
                                <label style={{ color: "white" }}>User name</label>
                                <input type="text" autoComplete='on' className="form-control" placeholder="Enter Username" onChange={(event) => this.setUsername(event)} />
                            </div>
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
                        </form>
                        {this.state.Resp}
                    </div>
                </>
            </div>
        );
    }
}