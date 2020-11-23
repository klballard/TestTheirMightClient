import React from 'react';
import {Container, Col} from 'reactstrap';
import RegisterPlayer from './Register';
import LoginPlayer from './Login';
import "bootstrap/dist/css/bootstrap.min.css";

const Auth = (props) => {
    return(
        <Container className='authcontainer'>
            <Col>
                <RegisterPlayer updateToken={props.updateToken}/>
            </Col>
            <Col/>
            <Col>
                <LoginPlayer updateToken={props.updateToken}/>
            </Col>
        </Container>
    )
}

export default Auth;