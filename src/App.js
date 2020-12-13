import React,{Component} from 'react';
import AppLoginPage from './Components/App_Login_Page';
import AppLandingpage from './Components/App_Landing_page';
import Createuser from './Components/Create_user';
import Userpackage from './Components/User_package';
import Homepage from './Components/Home_page';
import Layout1 from './Components/Layout1';
import Layout2 from './Components/Layout2';
import Layout3 from './Components/Layout3';
import Layout4 from './Components/Layout4';
import Layout5 from './Components/Layout5';
import Layout8 from './Components/Layout8';
import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom';



class App extends Component{

  render(){
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} render={props => <AppLoginPage {...props}/>} />
        <Route exact path={'/Home'} component={AppLandingpage}/>
        <Route exact path={'/Register'} component={Createuser}/>
        <Route exact path={'/Package'} component={Userpackage}/>
        <Route exact path={'/Homepage'} component={Homepage}/>
        <Route exact path={'/Layout1'} component={Layout1}/>
        <Route exact path={'/Layout2'} component={Layout2}/>
        <Route exact path={'/Layout3'} component={Layout3}/>
        <Route exact path={'/Layout4'} component={Layout4}/>
        <Route exact path={'/Layout5'} component={Layout5}/>
        <Route exact path={'/Layout8'} component={Layout8}/>
        {/* <Route path='/roster' component={Roster}/>
        <Route path='/schedule' component={Schedule}/> */}
        </Switch>
      </Router>
  );
}
}

export default App;
