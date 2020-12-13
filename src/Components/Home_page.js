import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




export default class Homepage extends Component {
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
            <Navbar.Brand href="/Homepage">Digital Signage</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/Layouts">Edit Layouts</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Button onClick={(event) => this.logout(event)}>Logout</Button>
              </Nav>
          </Navbar>
        </>
        <div className="bodyform1">
          
        </div>

      </div>
    );
  }
}