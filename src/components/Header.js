import React, { Component } from 'react';

class Header extends Component {
    sidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-hidden');
    }

    mobileSidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-mobile-show');
    }

    asideToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('aside-menu-hidden');
    }

    render() {
        return (
            <header className="app-header navbar">
                <button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
                <a className="navbar-brand" href="#"></a>
                <ul className="nav navbar-nav hidden-md-down">
                    <li className="nav-item px-1">
                        <a className="nav-link" href="#">Dashboard</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link" href="#">Analysis</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link" href="#">Credentials</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link" href="#">SQL</a>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header;
