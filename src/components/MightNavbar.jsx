import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {makeStyles} from '@material-ui/core';
import {Route,Switch} from 'react-router-dom';
import {Button,Collapse,Navbar,NavbarBrand,NavbarToggler,NavItem,Nav,NavLink,DropdownToggle,UncontrolledDropdown,DropdownMenu,DropdownItem} from 'reactstrap';
import Homepage from './Homepage';
import Auth from '../auth/Auth';
import FighterSearch from './FighterSearch';
import SavedFighters from './SavedFighters';
import SingleFight from './SingleFight';
import CreateTeam from './CreateTeam';
import SavedTeams from './SavedTeams';
import TeamFight from './TeamFight';
import AdminPage from './AdminPage';
//import user from '../../../server/models/user';



const MightNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
 //   const classes = useStyles();

    const [sessionToken, setSessionToken] = useState('');
    const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
        console.log(sessionToken);
    };
    const logOut = () => {
        localStorage.clear('token');
        setSessionToken('');
        alert('You have been logged out.')
    };
    return(
        <div>
            <Navbar fixed='top' light expand='md' color='light'>
                <NavbarBrand href='/home'>TEST THEIR MIGHT</NavbarBrand>
                <NavbarToggler onClick ={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            {localStorage.getItem('token') !== null ? <NavLink style={{paddingLeft:'50em'}} href='/search'>Search</NavLink>: null}
                        </NavItem>
                        <NavItem>
                            {localStorage.getItem('token') !== null ? <UncontrolledDropdown nav inNavbar>
                                                                      <DropdownToggle nav caret>Fight</DropdownToggle>
                                                                      <DropdownMenu right>
                                                                      <DropdownItem href='1v1'>1 v 1</DropdownItem>
                                                                      <DropdownItem href='5v5'>5 v 5</DropdownItem>
                                                                      </DropdownMenu>
                                                                      </UncontrolledDropdown>: null}
                        </NavItem>
                        <NavItem>
                            {localStorage.getItem('token') !== null ? <UncontrolledDropdown nav inNavbar>
                                                                      <DropdownToggle nav caret>Roster</DropdownToggle>
                                                                      <DropdownMenu right>
                                                                      <DropdownItem href='/savedfighters'>Saved Fighters</DropdownItem>
                                                                      <DropdownItem href='/createteam'>Create a Team</DropdownItem>
                                                                      <DropdownItem href='/savedteams'>Saved Teams</DropdownItem>
                                                                      </DropdownMenu>
                                                                      </UncontrolledDropdown>: null}
                        </NavItem>
                        <NavItem>
                            {localStorage.getItem('token') !== null ? <NavLink style={{}} href='/admin'>Admin</NavLink>: null}
                        </NavItem>
                        <NavItem>
                            <Auth updateToken={updateToken}/>
                        </NavItem>
                        <NavLink href='/home'>
                            {localStorage.getItem('token') !== null ? <Button style={{marginRight: 20}} onClick={logOut}>Log out</Button>: null}
                        </NavLink>
                    </Nav>
                </Collapse>
            </Navbar>
            <Switch>
                <Route exact path='/home'><Homepage/></Route>
                <Route exact path='/search'><FighterSearch sessionToken={sessionToken}/></Route>
                <Route exact path='/1v1'><SingleFight sessionToken={sessionToken}/></Route>
                <Route exact path='/5v5'><TeamFight sessionToken={sessionToken}/></Route>
                <Route exact path='/createteam'><CreateTeam sessionToken={sessionToken}/></Route>
                <Route exact path='/savedfighters'><SavedFighters sessionToken={sessionToken}/></Route>
                <Route exact path='/savedteams'><SavedTeams sessionToken={sessionToken}/></Route>
                <Route exact path='/admin'><AdminPage sessionToken={sessionToken}/></Route>
                <Route path='*' component={Homepage}/>
            </Switch>
        </div>
    )
}

export default MightNavbar;