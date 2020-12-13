import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Background from '../Assets/BI1.jpg'
import ImagePicker from 'react-image-picker'
import axios from "axios";
import 'react-image-picker/dist/index.css'




export default class Layout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      image: null,
      Temp_name:"",
      heading_1: "",
      heading_2: "",
      heading_3: "",
      description_1: "",
      description_2: "",
      time:0
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
  setdescription_1(event) {
    this.setState({ description_1: event.target.value })
  }
  setdescription_2(event) {
    this.setState({ description_2: event.target.value })
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
    fetch(proxyUrl + "http://196.29.238.100/layout/template/lc/", {

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
    fd.append("text2", description_2);
    fd.append("timming", time);
    fd.append("types", 1);
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
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/Home">Back</Navbar.Brand>
          </Navbar>
        </>
        <div className="bodyform1">
          <div style={{ width: "25%", backgroundColor: "white", display: "flex", flexDirection: "column", padding: "2%" }}>
            <label style={{ color: "black", fontWeight: "bold" }}>Background Image</label>
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
            <label style={{ color: "black", fontWeight: "bold" }}>Description 1</label>
            <input webkitdirectory type="text" onChange={(event) => this.setdescription_1(event)} />
            <label style={{ color: "black", fontWeight: "bold" }}>Description 2</label>
            <input webkitdirectory type="text" onChange={(event) => this.setdescription_2(event)} />
            <label style={{ color: "black", fontWeight: "bold" }}>Timming ( In Minute )</label>
            <input webkitdirectory type="text" onChange={(event) => this.settime(event)} />
            <button style={{ background: "#17BAA1", border: "none", marginTop: 20 }} onClick={(e) => this.handleSubmit(e)}> submit </button>
          </div>
          <div style={{ width: "75%", backgroundImage: `url("${Background}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div style={{ width: "50%", height: "50%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
              <p style={{ fontWeight: "bold", fontSize: 40 }}>
                PREVENT
                    </p>
              <p style={{ fontWeight: "bold", fontSize: 40 }}>
                WORKPLACE
                    </p>
              <p style={{ fontWeight: "bold", fontSize: 40 }}>
                INJURY
                    </p>
            </div>
            <div style={{ width: "50%", height: "50%", flexDirection: "row", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
              <div style={{ marginRight: 20 }}>
                {/* <Image style={{width:60, height:60}} source={require('../../assests/h1/II.png')} /> */}
              </div>
              <div>
                <p style={{ fontWeight: "bold", fontSize: 25 }}>BACKS STRAIGHT</p>
                <p style={{ fontWeight: "bold", fontSize: 25 }}>LEGS BENT</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}