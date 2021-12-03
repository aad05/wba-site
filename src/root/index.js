import React from 'react' 
// import Navbar from '../components/Navbar'
import Navbar from '../components/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Navbarpath } from '../utils/path'
import NotFound from '../components/NotFound'

export const Root =()=>{
    return (
        <Router>
        <Switch>
            {Navbarpath.map(({ id, path }) => (
                <Route exact key={id} component={Navbar} path={path} />
            ))}
        </Switch>
        <Switch>
            {Navbarpath.map(({ id, path,Component }) => (
                <Route exact key={id} component={Component} path={path} />
            ))} 
            <Route path="*" component={NotFound} />
        </Switch>
        </Router>
    )
}
export default Root