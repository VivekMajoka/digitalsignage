import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Background from '../Assets/BI2.jpg'
import logo from '../Assets/LOGO.png'
import DI from '../Assets/DI.jpeg'




export default class Layout2 extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }

    }


    componentDidMount() {
        const token = localStorage.getItem('token')
        console.log(token, "abc")
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        fetch(proxyUrl + "http://196.29.238.100/auth/users/list/", {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
            },
        }).then((response) => response.json())
            .then((res) => {
                console.log(res, "hiiii")
                this.setState({ data: res })
                //     if(res) {
                //     }else{
                //     console.log(res.errors)
                // }
            })
    }

    logout(event) {
        event.preventDefault();
        this.props.history.push('/');
        localStorage.clear();
    }


    render() {
        const { data } = this.state
        return (
            <div>
                <>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/Home">Back</Navbar.Brand>
                    </Navbar>
                </>
                <div className="bodyform1">
                    <div style={{ width: "25%", backgroundColor: "white" }}>

                    </div>
                    <div style={{ width: "75%", backgroundImage: `url("${Background}")`, backgroundSize: "contain", backgroundRepeat: "no-repeat", flexDirection: "row", display: "flex" }}>
                        <div style={{ width: "50%", height: "100%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                            <img style={{ width: "50%", height: "35%" }} src={logo} />
                        </div>
                        <div style={{ width: "50%", height: "100%", flexDirection: "row",  display: "flex", flexWrap:"wrap" }}>
                            <div style={{ width: "48%", height: "40%", backgroundColor: "rgba(0, 0, 0, 0.498)", margin: "1%" }}>
                                <div style={{ width: "100%", height: "50%" }}>
                                    <div style={{ width: "100%", height: "30%", justifyContent: "center", alignItems: "center", display:"flex" }}>
                                        <p style={{ color: "white", fontSize: 20 }}>
                                            Heading 1
                            </p>
                                    </div>
                                    <div style={{ width: "100%", height: "70%", justifyContent: "center", alignItems: "center", display:"flex" }}>
                                        <p style={{ color: "white", fontSize: 15 }}>
                                            Description 1
                            </p>
                                    </div>
                                </div>
                                <div style={{ width: "100%", height: "50%" }}>
                                    <img style={{ width: "100%", height: "100%" }} src={DI} />
                                </div>
                            </div>
                            <div style={{ width: "48%", height: "40%", backgroundColor: "rgba(0, 0, 0, 0.498)", margin: "1%" }}>
                                <div style={{ width: "100%", height: "50%" }}>
                                    <div style={{ width: "100%", height: "30%", justifyContent: "center", alignItems: "center", display:"flex" }}>
                                        <p style={{ color: "white", fontSize: 20 }}>
                                            Heading 1
                            </p>
                                    </div>
                                    <div style={{ width: "100%", height: "70%", justifyContent: "center", alignItems: "center", display:"flex" }}>
                                        <p style={{ color: "white", fontSize: 15 }}>
                                            Description 1
                            </p>
                                    </div>
                                </div>
                                <div style={{ width: "100%", height: "50%" }}>
                                    <img style={{ width: "100%", height: "100%" }} src={DI} />
                                </div>
                            </div>
                            <div style={{ width: "48%", height: "40%", backgroundColor: "rgba(0, 0, 0, 0.498)", margin: "1%" }}>
                                <div style={{ width: "100%", height: "50%" }}>
                                    <div style={{ width: "100%", height: "30%", justifyContent: "center", alignItems: "center", display:"flex" }}>
                                        <p style={{ color: "white", fontSize: 20 }}>
                                            Heading 1
                            </p>
                                    </div>
                                    <div style={{ width: "100%", height: "70%", justifyContent: "center", alignItems: "center", display:"flex" }}>
                                        <p style={{ color: "white", fontSize: 15 }}>
                                            Description 1
                            </p>
                                    </div>
                                </div>
                                <div style={{ width: "100%", height: "50%" }}>
                                    <img style={{ width: "100%", height: "100%" }} src={DI} />
                                </div>
                            </div>
                            <div style={{ width: "48%", height: "40%", backgroundColor: "rgba(0, 0, 0, 0.498)", margin: "1%" }}>
                                <div style={{ width: "100%", height: "50%" }}>
                                    <div style={{ width: "100%", height: "30%", justifyContent: "center", alignItems: "center", display:"flex" }}>
                                        <p style={{ color: "white", fontSize: 20 }}>
                                            Heading 1
                            </p>
                                    </div>
                                    <div style={{ width: "100%", height: "70%", justifyContent: "center", alignItems: "center", display:"flex" }}>
                                        <p style={{ color: "white", fontSize: 15 }}>
                                            Description 1
                            </p>
                                    </div>
                                </div>
                                <div style={{ width: "100%", height: "50%" }}>
                                    <img style={{ width: "100%", height: "100%" }} src={DI} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}