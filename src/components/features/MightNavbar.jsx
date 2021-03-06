import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route,Switch} from 'react-router-dom';
import {Button,Collapse,Navbar,NavbarBrand,NavbarToggler,NavItem,Nav,NavLink,DropdownToggle,UncontrolledDropdown,DropdownMenu,DropdownItem} from 'reactstrap';
import Homepage from './Homepage';
import Auth from '../../auth/Auth';
import FighterSearch from '../features/FighterSearch';
import SavedFighters from '../fighters/SavedFighters';
import SingleFight from '../fighters/SingleFight';
import CreateTeam from '../teams/CreateTeam';
import SavedTeams from '../teams/SavedTeams';
import TeamFight from '../teams/TeamFight';
import AdminPage from './AdminPage';



const MightNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
 //   const classes = useStyles();
    const [userRole, setUserRole] = useState('');

    const [sessionToken, setSessionToken] = useState('');
    const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
        console.log(sessionToken);
    };

    const userRoles = (newRole) => {
        localStorage.setItem('role', newRole);
        setUserRole(newRole);
        console.log(newRole);
    };

    const logOut = () => {
        localStorage.clear('token');
        setSessionToken('');
        alert('You have been logged out.')
    };
    return(
        <div>
            <Navbar fixed='top' light expand='md' color='light' style={{border:'5px solid black'}}>
                <NavbarBrand style={{fontSize:'24px'}} href='/home'>TEST THEIR MIGHT</NavbarBrand>
                <NavbarToggler onClick ={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem style={{fontSize:'24px'}}>
                            {localStorage.getItem('token') !== null ? <NavLink style={{paddingLeft:'30em'}} href='/search'>Search</NavLink>: null}
                        </NavItem>
                        <NavItem style={{fontSize:'24px'}}>
                            {localStorage.getItem('token') !== null ? <UncontrolledDropdown nav inNavbar>
                                                                      <DropdownToggle nav caret>Fight</DropdownToggle>
                                                                      <DropdownMenu style={{fontSize:'24px', textAlign:'center'}} right>
                                                                      <DropdownItem href='1v1'>1 v 1</DropdownItem>
                                                                      <DropdownItem href='5v5'>5 v 5</DropdownItem>
                                                                      </DropdownMenu>
                                                                      </UncontrolledDropdown>: null}
                        </NavItem>
                        <NavItem style={{fontSize:'24px'}}>
                            {localStorage.getItem('token') !== null ? <UncontrolledDropdown nav inNavbar>
                                                                      <DropdownToggle nav caret>Roster</DropdownToggle>
                                                                      <DropdownMenu style={{fontSize:'24px', textAlign:'center'}} right>
                                                                      <DropdownItem href='/savedfighters'>Saved Fighters</DropdownItem>
                                                                      <DropdownItem href='/createteam'>Create a Team</DropdownItem>
                                                                      <DropdownItem href='/savedteams'>Saved Teams</DropdownItem>
                                                                      </DropdownMenu>
                                                                      </UncontrolledDropdown>: null}
                        </NavItem>
                        {localStorage.getItem("role") == "true" ? (
                            <NavItem style={{fontSize:'24px'}}>
                                {localStorage.getItem('token') !== null ? (
                                    <NavLink style={{}} href='/admin'>
                                        Admin
                                    </NavLink>
                                ) :null}
                            </NavItem>
                        ) :null}
                        <NavItem>
                            <Auth updateToken={updateToken} updateUserRole={userRoles}/>
                        </NavItem>
                        <NavLink href='/home'>
                            {localStorage.getItem('token') !== null ? <Button style={{marginRight: 20, border:'3px solid black', color:'black', backgroundColor:'white'}} onClick={logOut}>Log out</Button>: null}
                        </NavLink>
                    </Nav>
                </Collapse>
            </Navbar>
            <Switch>
                <Route exact path='/home'><Homepage/></Route>
                <Route exact path='/search'><FighterSearch/></Route>
                <Route exact path='/1v1'><SingleFight/></Route>
                <Route exact path='/5v5'><TeamFight/></Route>
                <Route exact path='/createteam'><CreateTeam/></Route>
                <Route exact path='/savedfighters'><SavedFighters/></Route>
                <Route exact path='/savedteams'><SavedTeams/></Route>
                <Route exact path='/admin'><AdminPage/></Route>
                <Route path='*' component={Homepage}/>
            </Switch>
        </div>
    )
}

export default MightNavbar;