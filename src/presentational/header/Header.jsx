
import React from 'react';
import { MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink } from 'mdbreact';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ toggleCollapse, isOpen }) => {

    return (<>

        <MDBNavbar color="black" dark expand="md">
            <MDBContainer>
                <MDBNavbarBrand>
                    <strong className="white-text"></strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <div className="d-none d-md-inline">Launches</div>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                    <MDBDropdownItem><Link to="/launches/upcoming">Upcoming</Link> </MDBDropdownItem>
                                    <MDBDropdownItem><Link to="/launches/previous">Previous</Link> </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem>
                            <NavLink className='nav-link' to='/agencies'>Agencies</NavLink>
                        </MDBNavItem>
                        {/* <MDBNavItem active>
                                <MDBNavLink to="#!">Home</MDBNavLink>
                            </MDBNavItem> */}
                        {/* <MDBNavItem>
                                <MDBNavLink to="#!">Features</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Pricing</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline">Dropdown</div>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem> */}
                    </MDBNavbarNav>
                    <MDBNavbarNav right>

                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="/">
                                <MDBIcon fab icon="twitter" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="/">
                                <MDBIcon fab icon="google-plus-g" />
                            </MDBNavLink>
                        </MDBNavItem>
                        {/* <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <MDBIcon icon="user" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem> */}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    </>)
}

export default Header;