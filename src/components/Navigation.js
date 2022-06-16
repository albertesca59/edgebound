import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container">
                    <div className="container-fluid">
                        <Link className="navbar-brand col-sm-4 col-md-4 col-lg-2" to="/">
                            <img className="img-fluid" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fpokemon-logo-png-pokemon-logo-text-png-1428-1390.png&f=1&nofb=1" alt=""/>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}
