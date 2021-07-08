import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, Button, Input, Label, Form, FormGroup} from 'reactstrap';
import APIURL from '../helpers/environment';

function RegisterPlayer(props){

    const [registerModal, setRegisterModal] = useState(false);
    const toggle = () => setRegisterModal(!registerModal);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    let handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/user/register`, {
            method:'POST',
            mode: 'no-cors',
            body: JSON.stringify({email:email, password:password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
            props.updateUserRole(data.user.isAdmin.toString());
        }).then(alert('Your account has been created!'))
    };

    return(
        <div>
            {localStorage.getItem('token') === null ? <Button style={{border:'3px solid black', color:'black', backgroundColor:'white'}} type='button' onClick={toggle}>Register</Button>: null}
            <Modal isOpen={registerModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create an account and begin fighting!</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor='email'>Email: </Label>
                            <Input style={{border:'2px solid black'}} onChange={(e) => setEmail(e.target.value)} name='email' type='email' value={email}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='password'>Password: </Label>
                            <Input style={{border:'2px solid black'}} onChange={(e) => setPassword(e.target.value)} name='password' type='password' value={password}/>
                        </FormGroup>
                        <FormGroup>
                            <Button style={{border:'3px solid black', color:'black', backgroundColor:'white'}} type='submit' onClick={toggle}>Create account</Button>{' '}
                            <Button style={{border:'3px solid black', color:'black', backgroundColor:'white'}} onClick={toggle}>Cancel</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default RegisterPlayer;