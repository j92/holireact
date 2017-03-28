import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                    <li><a href="#">Contracts</a></li>
                    <li><a href="#">Holidays</a></li>
                </ul>
            </div>
        )
    }
}

export default SideBar;