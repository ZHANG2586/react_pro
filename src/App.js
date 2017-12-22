import React from "react";
import {createStore} from "redux";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import styles from "./styles/style.css";
import Login from "./views/Login";
import Regin from "./views/Regin";
import ToEmail from "./views/ToEmail";
const App=(props)=>{
    return (
        <div className={styles.container}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/regin" component={Regin}/>
                    <Route exact path="/toEmail" component={ToEmail} />
                </Switch>
            </Router>
        </div>
    );
}
export default App;