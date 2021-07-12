import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, Button, Input, Label, Form, FormGroup} from 'reactstrap';
import APIURL from '../helpers/environment';



const LoginPlayer = (props) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginModal, setLoginModal] = useState(false);
    const toggle = () => setLoginModal(!loginModal);

    let handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method:'POST',
            //mode: 'no-cors',
            body: JSON.stringify({email:email, password:password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
            //props.updateUserRole(data.user.isAdmin.toString());
        }).then(alert('Welcome back.'))
    };

    return(
        <div>
            {localStorage.getItem('token') === null ? <Button style={{border:'3px solid black', color:'black', backgroundColor:'white'}} onClick={toggle}>Login</Button>: null}
            <Modal isOpen={loginModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Welcome back!</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="email">Email: </Label>
                            <Input style={{border:'2px solid black'}} onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email}/>
                    
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password: </Label>
                            <Input style={{border:'2px solid black'}} onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password}/>
                        </FormGroup>
                        <FormGroup>
                            <Button type='submit' style={{border:'3px solid black', color:'black', backgroundColor:'white'}} onClick={toggle}>Login</Button>{' '}
                            <Button style={{border:'3px solid black', color:'black', backgroundColor:'white'}} onClick={toggle}>Cancel</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default LoginPlayer;