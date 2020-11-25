import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {makeStyles} from '@material-ui/core';
import {Route,Switch} from 'react-router-dom';
import {Button,Collapse,Navbar,NavbarBrand,NavbarToggler,NavItem,Nav,NavLink,NavbarText} from 'reactstrap';
import Homepage from './Homepage';
import Auth from '../auth/Auth';
import FighterSearch from './FighterSearch';
import SavedFighters from './SavedFighters';
import SingleFight from './SingleFight';


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
                            {localStorage.getItem('token') !== null ? <NavLink href='/search'>Search</NavLink>: null}
                        </NavItem>
                        <NavItem>
                            {localStorage.getItem('token') !== null ? <NavLink href='/1v1'>1 v 1</NavLink>: null}
                        </NavItem>
                        <NavItem>
                            {localStorage.getItem('token') !== null ? <NavLink href='/5v5'>5 v 5</NavLink>: null}
                        </NavItem>
                        <NavItem>
                            {localStorage.getItem('token') !== null ? <NavLink href='/savedfighters'>Saved Fighters</NavLink>: null}
                        </NavItem>
                        <NavItem>
                            {localStorage.getItem('token') !== null ? <NavLink href='/savedteams'>Saved Teams</NavLink>: null}
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
                <Route exact path='/search'><FighterSearch/></Route>
                <Route exact path='/1v1'><SingleFight/></Route>
                <Route exact path='/5v5'></Route>
                <Route exact path='/savedfighters'><SavedFighters/></Route>
                <Route exact path='/savedteams'></Route>
                <Route path='*' component={Homepage}/>
            </Switch>
        </div>
    )
}

export default MightNavbar;