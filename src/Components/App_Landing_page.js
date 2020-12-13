import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




export default class AppLoginPage extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }

  }


  componentDidMount() {
    const token = localStorage.getItem('token')
    console.log(token,"abc")
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

  logout(event){
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
            <Navbar.Brand href="/Home">Digital Signage</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/Register">Create User</Nav.Link>
              <Button onClick={(event) => this.logout(event)}>Logout</Button> 
            </Nav>

          </Navbar>
        </>
        <div className="bodyform1">
          <Container>
            <h3 style={{ color: "white", padding: "2%" }}>Users</h3>
            <Row style={{ paddingLeft: "2%", borderWidth: 10, borderColor: "white" }}>
              <Col >
                <p style={{ color: "white" }}>ID</p>
              </Col>
              <Col>
                <p style={{ color: "white" }}>User Name</p>
              </Col>
              <Col>
                <p style={{ color: "white" }}>Email</p>
              </Col>
              <Col>
                <p style={{ color: "white" }}>Package</p>
              </Col>
            </Row>
            {data.map((item, key) => (
              <Row key={key} style={{ paddingLeft: "2%", borderWidth: 10, borderColor: "white" }}>
                <Col >
                  <p style={{ color: "white" }}>{item.id}</p>
                </Col>
                <Col>
                  <p style={{ color: "white" }}>{item.username}</p>
                </Col>
                <Col>
                  <p style={{ color: "white" }}>{item.email}</p>
                </Col>
                <Col>
                  <button style={{ color: "#167bff", borderRadius: 10 }}>
                    <Link to={{ pathname: '/Package', query: { value: item.user_package  } }}>
                      More
                </Link>
                  </button>
                </Col>
              </Row>
            ))}
          </Container>
        </div>

      </div>
    );
  }
}