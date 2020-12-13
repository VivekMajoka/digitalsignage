import React, { Component } from "react";
import { Navbar, Container } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import DatePicker from 'react-date-picker';



export default class Userpackage extends Component {
    constructor(props) {
        super(props);
        console.log(props.location.query.value)
        this.state = {
            data: [],
            datatemp: [],
            datascr: [],
            valscr: [],
            valtemp: [],
            screens: [],
            templates: [],
            valstartdate: "",
            valenddate: "",
            rud: "",
            user: "",
            id: "",
            value: props.location.query.value
        }

    }





    async componentDidMount() {
        const token = await localStorage.getItem('token')
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        await fetch(proxyUrl + "http://196.29.238.100/auth/layout/screens/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
            },
        }).then((response) => response.json())
            .then((res) => {
                console.log(res, "screen")
                this.setState({ datascr: res })
                //     if(res) {
                //     }else{
                //     console.log(res.errors)
                // }
            })
        await fetch(proxyUrl + "http://196.29.238.100/auth/layout/templatetypes/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
            },
        }).then((response) => response.json())
            .then((res) => {
                console.log(res, "templates")
                this.setState({ datatemp: res })
                //     if(res) {
                //     }else{
                //     console.log(res.errors)
                // }
            })
        await fetch(proxyUrl + this.state.value, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
            },
        }).then((response) => response.json())
            .then((res) => {
                if (res.id) {
                    console.log(res, "hiiii")
                    res.screens.map((item) => this.state.screens.push(item.id))
                    res.templates.map((item) => this.state.templates.push(item.id))
                    // console.log()
                    this.setState({
                        rud: res.rud,
                        user: res.user,
                        id: res.id,
                        valscr: this.state.screens,
                        valtemp: this.state.templates,
                        valstartdate: new Date(res.package_start),
                        valenddate: new Date(res.package_end)
                    })
                } else {
                    console.log(res.errors)
                }
            })
    }

    screen_change(val) {
        console.log(val)
        const place = this.state.valscr.findIndex((v, i) => v === val)
        place === -1 ? this.state.screens.push(val) : this.state.screens.splice(place, 1)
        this.setState({ valscr: this.state.screens })
        console.log(this.state.valscr)
    }

    template_change(val) {
        console.log(val)
        const place = this.state.valtemp.findIndex((v, i) => v === val)
        place === -1 ? this.state.templates.push(val) : this.state.templates.splice(place, 1)
        this.setState({ valtemp: this.state.templates })
        console.log(this.state.valtemp)
    }

    onChange(val) {
        console.log(val)
        this.setState({ valstartdate: val })
    }

    onChangeend(val) {
        console.log(val)
        this.setState({ valenddate: val })
    }


    submit(event) {
        const token = localStorage.getItem('token')
        console.log(token)
        const { rud, user, id, valscr, valtemp, valstartdate, valenddate } = this.state
        event.preventDefault();
        const { history } = this.props;
        const body = {
            "user": user,
            "id": id,
            "screens": valscr,
            "templates": valtemp,
            "package_start": moment(valstartdate).format("YYYY-MM-DD"),
            "package_end": moment(valenddate).format("YYYY-MM-DD"),
        }
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        fetch(proxyUrl + rud, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token

            },
            body: JSON.stringify(body),
        }).then((response) => response.json())
            .then((res) => {
                console.log(res, "hiiii")
                if (res.id) {
                    alert("Package Updated")
                    //   console.log(res)
                    //   localStorage.setItem('token', "Token "+res.token )
                    //   history.push('/Home')
                } else {
                    console.log(res.errors)
                }
            })
    }

    render() {
        const { datatemp, datascr, valscr, valtemp, valstartdate, valenddate } = this.state
        return (
            <div>
                <>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/Home">Back</Navbar.Brand>
                    </Navbar>
                </>
                <div className="bodyform1">
                    <Container>
                        <h3 style={{ color: "white", padding: "2%" }}>Package Assigned</h3>
                        <h5 style={{ color: "white", padding: "2%" }}>Screens</h5>
                        {datascr.map((item, key) =>
                            <label style={{ color: "white", paddingLeft: "2%", width: "20%" }}>
                                <input style={{ marginRight: "2%" }} type="checkbox"
                                    checked={valscr.find((v) => v === item.id ? true : false)}
                                    onChange={() => this.screen_change(item.id)}
                                />
                                {item.screen_name}
                            </label>
                        )}
                        <h5 style={{ color: "white", padding: "2%" }}>Templates</h5>
                        {datatemp.map((item, key) =>
                            <label style={{ color: "white", paddingLeft: "2%", width: "20%" }}>
                                <input style={{ marginRight: "2%" }} type="checkbox"
                                    checked={valtemp.find((v) => v === item.id ? true : false)}
                                    onChange={() => this.template_change(item.id)}
                                />
                                {item.template_name}
                            </label>
                        )}
                        <h5 style={{ color: "white", padding: "2%" }}>Start Date</h5>
                        <DatePicker
                            onChange={(value) => this.onChange(value)}
                            value={valstartdate}
                            format={"y-MM-dd"}
                        />
                        <h5 style={{ color: "white", padding: "2%" }}>End Date</h5>
                        <DatePicker
                            onChange={(value) => this.onChangeend(value)}
                            value={valenddate}
                            format={"y-MM-dd"}
                        />
                        <button style={{ background: "#17BAA1", border: "none", marginTop: "2%", width: "20%" }} className="btn btn-primary btn-block" onClick={(event) => this.submit(event)}>Submit</button>
                    </Container>
                </div>

            </div>
        );
    }
}