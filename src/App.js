import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid app-container">
                <div className="row">
                    <div className="col-md-3">
                        <ListGroup className="sidebar">
                            <ListGroupItem><Link to="/dashboard" activeClassName="active">Dashboard</Link></ListGroupItem>
                            <ListGroupItem><Link to="/contracts" activeClassName="active">Contracts</Link></ListGroupItem>
                            <ListGroupItem><Link to="/holidays" activeClassName="active">Holidays</Link></ListGroupItem>
                        </ListGroup>
                    </div>
                    <div className="col-md-9">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default App

