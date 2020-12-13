import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'




export default class Layout8 extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            image1: null,
            image2: null,
            image3: null,
            image4: null,
            Temp_name: "",
            heading_1: "",
            heading_2: "",
            heading_3: "",
            heading_4: "",
            text1: "",
            text2: "",
            text3: "",
            text4: "",
            text5: "",
            text6: "",
            text7: "",
            text8: "",
            text9: "",
            text10: "",
            text11: "",
            text12: "",
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

    handleImageChange1 = (e) => {
        this.setState({
            image1: e.target.files[0]
        })
    };
    handleImageChange2 = (e) => {
        this.setState({
            image2: e.target.files[0]
        })
    };
    handleImageChange3 = (e) => {
        this.setState({
            image3: e.target.files[0]
        })
    };
    handleImageChange4 = (e) => {
        this.setState({
            image4: e.target.files[0]
        })
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        const { image1, image2, image3, image4, Temp_name, heading_1, heading_2, heading_3, heading_4, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, time } = this.state

        let fd = new FormData()
        fd.append("image1", image1);
        fd.append("image2", image2);
        fd.append("image3", image3);
        fd.append("image4", image4);
        fd.append("name", Temp_name);
        fd.append("heading1", heading_1);
        fd.append("heading2", heading_2);
        fd.append("heading3", heading_3);
        fd.append("heading4", heading_4);
        fd.append("text1", text1);
        fd.append("text2", text2);
        fd.append("text3", text3);
        fd.append("text4", text4);
        fd.append("text5", text5);
        fd.append("text6", text6);
        fd.append("text7", text7);
        fd.append("text8", text8);
        fd.append("text9", text9);
        fd.append("text10", text10);
        fd.append("text11", text11);
        fd.append("text12", text12);

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
                    <div style={{ width: "25%", backgroundColor: "white", display: "flex", flexDirection: "column", padding: "2%" }}>
                        <label style={{ color: "black", fontWeight: "bold", paddingTop: 50 }}>Image 1</label>
                        <input type="file" style={{ paddingBottom: 10 }}
                            id="image"
                            accept="image/png, image/jpeg" onChange={(e) => this.handleImageChange1(e)} required />
                        <label style={{ color: "black", fontWeight: "bold" }}>Image 2</label>
                        <input type="file" style={{ paddingBottom: 10 }}
                            id="image"
                            accept="image/png, image/jpeg" onChange={(e) => this.handleImageChange2(e)} required />
                        <label style={{ color: "black", fontWeight: "bold" }}>Image 3</label>
                        <input type="file" style={{ paddingBottom: 10 }}
                            id="image"
                            accept="image/png, image/jpeg" onChange={(e) => this.handleImageChange3(e)} required />
                        <label style={{ color: "black", fontWeight: "bold" }}>Image 4</label>
                        <input type="file" style={{ paddingBottom: 10 }}
                            id="image"
                            accept="image/png, image/jpeg" onChange={(e) => this.handleImageChange4(e)} required />
                        <label style={{ color: "black", fontWeight: "bold" }}>Teamplate Name</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setTeampName(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Heading 1</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setHeading_1(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Heading 2</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setHeading_2(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Heading 3</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setHeading_3(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Heading 4</label>
                        <input webkitdirectory type="text" onChange={(event) => this.setHeading_4(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Text 1</label>
                        <input webkitdirectory type="text" onChange={(event) => this.Text_1(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Text 2</label>
                        <input webkitdirectory type="text" onChange={(event) => this.Text_2(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Text 3</label>
                        <input webkitdirectory type="text" onChange={(event) => this.Text_3(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Text 4</label>
                        <input webkitdirectory type="text" onChange={(event) => this.Text_4(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Text 5</label>
                        <input webkitdirectory type="text" onChange={(event) => this.Text_5(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Text 6</label>
                        <input webkitdirectory type="text" onChange={(event) => this.Text_6(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Text 7</label>
                        <input webkitdirectory type="text" onChange={(event) => this.Text_7(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Text 8</label>
                        <input webkitdirectory type="text" onChange={(event) => this.Text_8(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Text 9</label>
                        <input webkitdirectory type="text" onChange={(event) => this.Text_9(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Text 10</label>
                        <input webkitdirectory type="text" onChange={(event) => this.Text_10(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Text 11</label>
                        <input webkitdirectory type="text" onChange={(event) => this.Text_11(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Text 12</label>
                        <input webkitdirectory type="text" onChange={(event) => this.Text_12(event)} />
                        <label style={{ color: "black", fontWeight: "bold" }}>Timming ( In Minute )</label>
                        <input webkitdirectory type="text" onChange={(event) => this.settime(event)} />
                        <button style={{ background: "#17BAA1", border: "none", marginTop: 20 }} onClick={(e) => this.handleSubmit(e)}> submit </button>
                    </div>
                    <div style={{ width: "75%", flexDirection: "column", display: "flex", height: window.innerHeight, position: "fixed", right: 0, paddingLeft: "10%", paddingRight: "10%" }}>
                        <div style={{width:"100%", height:"60%"}}>

                        </div>
                        <div style={{width:"100%", height:"40%"}}>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}