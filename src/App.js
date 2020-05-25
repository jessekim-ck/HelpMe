import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import Index from "./routes/index";
import HelpMe from "./routes/help_me";
import HelpHim from "./routes/help_him";
import MyPage from "./routes/my_page";
import PageNotFound from "./routes/page_not_found";

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Navbar expand="lg">
                    <Navbar.Brand href="/">HelpME</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link href="/help_me">Help Me</Nav.Link>
                            <Nav.Link href="/help_him">Help Him</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/my_page">My Page</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
    
                <div className="app-container">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Index}/>
                            <Route path="/help_me" component={HelpMe}/>
                            <Route path="/help_him" component={HelpHim}/>
                            <Route path="/my_page" component={MyPage}/>
                            <Route component={PageNotFound}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
