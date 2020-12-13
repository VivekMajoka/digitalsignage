import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Background from '../Assets/BI3.jpg'
import logo from '../Assets/LOGO.png'
import DI from '../Assets/DI.jpeg'
import axios from "axios";





export default class Layout3 extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            image: null,
            Temp_name: "",
            heading_1: "",
            heading_2: "",
            heading_3: "",
            subheading_1: "",
            subheading_2: "",
            subheading_3: "",
            subheading_4: "",
            subheading_5: "",
            description_1: "",
            description_2: "",
            description_3: "",
            description_4: "",
            description_5: "",
            time: 0
        }
        this.onPick = this.onPick.bind(this)
    }

    setTeampName(event) {
        this.setState({ Temp_name: event.target.value })
    }
    setHeading_1(event) {
        this.setState({ heading_1: event.target.value })
    }
    setHeading_2(event) {
        this.setState({ heading_2: event.target.value })
    }
    setHeading_3(event) {
        this.setState({ heading_3: event.target.value })
    }
    setSubheading_1(event) {
        this.setState({ subheading_1: event.target.value })
    }
    setSubheading_2(event) {
        this.setState({ subheading_2: event.target.value })
    }
    setSubheading_3(event) {
        this.setState({ subheading_3: event.target.value })
    }
    setSubheading_4(event) {
        this.setState({ subheading_4: event.target.value })
    }
    setSubheading_5(event) {
        this.setState({ subheading_5: event.target.value })
    }
    setdescription_1(event) {
        this.setState({ description_1: event.target.value })
    }
    setdescription_2(event) {
        this.setState({ description_2: event.target.value })
    }
    setdescription_3(event) {
        this.setState({ description_3: event.target.value })
    }
    setdescription_4(event) {
        this.setState({ description_4: event.target.value })
    }
    setdescription_5(event) {
        this.setState({ description_5: event.target.value })
    }
    settime(event) {
        this.setState({ time: event.target.value })
    }

    onPick(image) {
        this.setState({ image })
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
        const { image, Temp_name, heading_1, heading_2, heading_3, description_1, description_2, description_3, description_4, description_5, subheading_1, subheading_2, subheading_3, subheading_4, subheading_5, time } = this.state

        let fd = new FormData()
        fd.append("image1", image);
        fd.append("name", Temp_name);
        fd.append("heading1", heading_1);
        fd.append("heading2", heading_2);
        fd.append("heading3", heading_3);
        fd.append("subheading1", subheading_1);
        fd.append("subheading2", subheading_2);
        fd.append("subheading3", subheading_3);
        fd.append("subheading4", subheading_4);
        fd.append("subheading5", subheading_5);
        fd.append("text1", description_1);
        fd.append("text2", description_2);
        fd.append("text3", description_3);
        fd.append("text4", description_4);
        fd.append("text5", description_5);
        fd.append("timming", time);
        fd.append("types", 3);
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
                    <div style={{ width: "25%", backgroundColor: "white", display: "flex", flexDirection: "column", padding: "2%"}}>
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
                        <label style={{ color: "black", fontWeight: "bold" }}>Heading 3</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setHeading_3(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Sub Heading 1</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setSubheading_1(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Sub Heading 2</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setSubheading_2(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Sub Heading 3</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setSubheading_3(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Sub Heading 4</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setSubheading_4(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Sub Heading 5</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setSubheading_5(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Description 1</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setdescription_1(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Description 2</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setdescription_2(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Description 3</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setdescription_3(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Description 4</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setdescription_4(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Description 5</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setdescription_5(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Timming ( In Minute )</label>
                        <input webkitdirectory type="text" onChange={(event) => this.settime(event)} />
                        <button style={{ background: "#17BAA1", border: "none", marginTop: 20 }} onClick={(e) => this.handleSubmit(e)}> submit </button>
                    </div>
                    <div style={{ width: "75%", backgroundImage: `url("${Background}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", flexDirection: "row", display: "flex", height: window.innerHeight, position: "fixed", right: 0 }}>
                        <div style={{ width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                            <div style={{ width: "100%", height: "20%", flexDirection: "row", display: "flex" }}>
                                <div style={{ width: "25%", height: "100%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                    <p style={{ color: "white", fontSize: 25 }}>
                                        MAY 20-25
                        </p>
                                </div>
                                <div style={{ width: "50%", height: "90%", justifyContent: "center", alignItems: "center", borderBottomWidth: 1, borderColor: "white", borderTopWidth: 1, marginTop: "2%", display: "flex", borderBottom: '1px solid white' }}>
                                    <p style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>
                                        WEEKLY MENU
                               </p>
                                </div>
                                <div style={{ width: "25%", height: "100%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                    <p style={{ color: "white", fontSize: 25 }}>
                                        12:42 p.m.
                               </p>
                                </div>
                            </div>
                            <div style={{ width: "100%", height: "75%", marginTop: "5%", flexDirection: "row", display: "flex" }}>

                                <div style={{ width: "20%", height: "80%", borderRight: "1px solid white", alignItems: "center", display: "flex", flexDirection: "column" }}>
                                    <div style={{ width: "100%", height: "30%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                        <p style={{ color: "orange", fontSize: 35, fontWeight: "bold" }}>
                                            Mon
                               </p>
                                    </div>
                                    <div style={{ width: "100%", height: "70%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                        <p style={{ color: "white", fontSize: 25 }}>
                                            Italian
                               </p>
                                    </div>
                                </div>
                                <div style={{ width: "20%", height: "80%", borderRight: "1px solid white", alignItems: "center", display: "flex", flexDirection: "column" }}>
                                    <div style={{ width: "100%", height: "30%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                        <p style={{ color: "orange", fontSize: 35, fontWeight: "bold" }}>
                                            Tue
                               </p>
                                    </div>
                                    <div style={{ width: "100%", height: "70%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                        <p style={{ color: "white", fontSize: 25 }}>
                                            Italian
                               </p>
                                    </div>
                                </div>
                                <div style={{ width: "20%", height: "80%", borderRight: "1px solid white", alignItems: "center", display: "flex", flexDirection: "column" }}>
                                    <div style={{ width: "100%", height: "30%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                        <p style={{ color: "orange", fontSize: 35, fontWeight: "bold" }}>
                                            Wed
                               </p>
                                    </div>
                                    <div style={{ width: "100%", height: "70%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                        <p style={{ color: "white", fontSize: 25 }}>
                                            Italian
                               </p>
                                    </div>
                                </div>
                                <div style={{ width: "20%", height: "80%", borderRight: "1px solid white", alignItems: "center", display: "flex", flexDirection: "column" }}>
                                    <div style={{ width: "100%", height: "30%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                        <p style={{ color: "orange", fontSize: 35, fontWeight: "bold" }}>
                                            Thurs
                               </p>
                                    </div>
                                    <div style={{ width: "100%", height: "70%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                        <p style={{ color: "white", fontSize: 25 }}>
                                            Italian
                               </p>
                                    </div>
                                </div>
                                <div style={{ width: "20%", height: "80%", borderRight: "1px solid white", alignItems: "center", display: "flex", flexDirection: "column" }}>
                                    <div style={{ width: "100%", height: "30%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                        <p style={{ color: "orange", fontSize: 35, fontWeight: "bold" }}>
                                            Fri
                               </p>
                                    </div>
                                    <div style={{ width: "100%", height: "70%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                        <p style={{ color: "white", fontSize: 25 }}>
                                            Italian
                               </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}