import React, { Component } from "react";




export default class AppLoginPage extends Component {
    constructor(){
        super();
        this.state = {
            email:"",
            password:"",
            Resp:""
        };
    }

    setEmail(event){
        this.setState({email:event.target.value})
    }
    setPassword(event){
        this.setState({password:event.target.value})
    }

    login(event){
      event.preventDefault();
      const { history } = this.props;
        console.log("hiii",this.state.email,this.state.password)
        const body = {
            "username": this.state.email ,
            "password": this.state.password
        }
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        fetch(proxyUrl+"http://196.29.238.100/auth/login/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(body),
        }).then((response) => response.json())
            .then((res) => {
                console.log(res,"hiiii")
                if(res) {
                    if(res.super_status === 200) {
                localStorage.setItem('token', "Token "+res.token )
                history.push('/Home') 
                    }else{
                localStorage.setItem('token', "Token "+res.token )
                        history.push('/Homepage')
                    }

                }else{
                console.log(res.errors)
            }
            })
    }
    render() {
        return (
            <div className="bodyform">
            <form>
                <h3 style={{color:"white"}}>Log In</h3>
                <div className="form-group">
                    <label style={{color:"white"}}>Email address</label>
                    <input  type="email" autoComplete='on' className="form-control" placeholder="Enter email" onChange={(event) => this.setEmail(event)} />
                </div>
                <div className="form-group">
                    <label style={{color:"white"}}>Password</label>
                    <input type="password" autoComplete='on' className="form-control" placeholder="Enter password" onChange={(event) => this.setPassword(event)} />
                </div>
               <button style={{background:"#17BAA1", border:"none"}} className="btn btn-primary btn-block" onClick={(event)=> this.login(event)}>Submit</button>
            </form>
            {this.state.Resp}
            </div>
        );
    }
}