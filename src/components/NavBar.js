import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <br></br>
                <Nav>
                    <NavItem>
                        <NavLink href="#" onClick={() => this.props.changeRender(0)}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={() => this.props.changeRender(1)}>Cart</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Total {this.props.total}</NavLink>
                    </NavItem>
                </Nav>
                <br></br>
            </div>
        );
    }
}