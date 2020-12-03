import React from 'react';
import {Container, Col} from 'reactstrap';
import RegisterPlayer from './Register';
import LoginPlayer from './Login';
import "bootstrap/dist/css/bootstrap.min.css";

const Auth = (props) => {
    return(
        <Container className='authcontainer'>
            <Col>
                <RegisterPlayer updateToken={props.updateToken} updateUserRole={props.updateUserRole}/>
            </Col>
            <Col/>
            <Col>
                <LoginPlayer updateToken={props.updateToken} updateUserRole={props.updateUserRole}/>
            </Col>
        </Container>
    )
}

export default Auth;