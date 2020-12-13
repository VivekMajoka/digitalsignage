import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Background from '../Assets/BI4.jpg'
import logo from '../Assets/LOGO.png'
import DI from '../Assets/DI.jpeg'
import axios from 'axios'



export default class Layout4 extends Component {
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

    handleImageChange = (e) => {
        this.setState({
          image: e.target.files[0]
        })
      };
    
      handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        const { image, Temp_name, heading_1, heading_2, heading_3, description_1, description_2, time } = this.state
    
        let fd = new FormData()
        fd.append("image1", image);
        fd.append("name", Temp_name);
        fd.append("heading1", heading_1);
        fd.append("heading2", heading_2);
        fd.append("heading3", heading_3);
        fd.append("text1", description_1);
        fd.append("timming", time);
        fd.append("types", 4);
        console.log(fd)
    
    
        axios({
          method: 'POST',
          url: 'https://cors-anywhere.herokuapp.com/' + "http://196.29.238.100/layout/template/lc/",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          },
          data: fd
        })
          .then(response => {
            console.log(response)
    
          })
          .catch(error => {
            console.log('failure:' + JSON.stringify(this.state));
            console.log(error)
          })
      };
    


    render() {
        const { data } = this.state
        return (
            <div>
                <>
                    <Navbar style={{ position: "fixed", top: 0, width: "100%" }} bg="dark" variant="dark">
                        <Navbar.Brand href="/Home">Back</Navbar.Brand>
                    </Navbar>
                </>
                <div className="bodyform1">
                    <div style={{  width: "25%", backgroundColor: "white", display: "flex", flexDirection: "column", padding: "2%" }}>
                        <label style={{ color: "black", fontWeight: "bold", paddingTop:50  }}>Background Image</label>
                        <input type="file" style={{ paddingBottom: 10 }}
                            id="image"
                            accept="image/png, image/jpeg" onChange={(e) => this.handleImageChange(e)} required />
                        <label style={{ color: "black", fontWeight: "bold" }}>Teamplate Name</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setTeampName(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Heading 1</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setHeading_1(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Heading 2</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setHeading_2(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Description</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setHeading_3(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Date (or Any text)</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setdescription_1(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Timming ( In Minute )</label>
                        <input webkitdirectory type="text" onChange={(event) => this.settime(event)} />
                        <button style={{ background: "#17BAA1", border: "none", marginTop: 20 }} onClick={(e) => this.handleSubmit(e)}> submit </button>
                    </div>
                    <div style={{ width: "75%", backgroundImage: `url("${Background}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", flexDirection: "row", display: "flex", height: window.innerHeight, position: "fixed", right: 0 }}>
                        <div style={{ width: "100%", height: "100%", flexDirection: "row", display: "flex" }}>
                            <div style={{ width: "65%", height: "100%", backgroundColor: "rgba(245, 245, 66, 0.6)" }}>
                                <div style={{ width: "100%", height: "50%", justifyContent: "flex-end", alignItems: "center", display: "flex", flexDirection: "column" }}>
                                    <p style={{ color: "green", fontSize: 40, fontWeight: "bold" }}>
                                        ANNUAL SPRING
                </p>
                                    <p style={{ color: "green", fontSize: 40, fontStyle: "italic" }}>
                                        Fundraising Dinner
                </p>
                                </div>
                                <div style={{ width: "100%", height: "45%", marginTop: "5%", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                    <div style={{ width: "auto", height: "auto", borderTopWidth: 2, borderBottomWidth: 2, borderColor: "black" }}>
                                        <p style={{ color: "black", fontSize: 30 }}>
                                            Ticket on sale now: $85
                </p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "35%", height: "100%", justifyContent: "center", display: "flex", alignItems: "center" }}>
                                <div style={{ width: "50%", height: "30%", backgroundColor: "rgba(245, 245, 66, 0.6)", borderRadius: 100, justifyContent: "center", alignItems: "center", display: "flex" }}>
                                    <p style={{ color: "black", fontSize: 30, fontStyle: "italic" }}>
                                        02 April
                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}