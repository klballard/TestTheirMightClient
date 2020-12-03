import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, Input, Label, Form, FormGroup} from 'reactstrap';
import {makeStyles} from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.min.css";
import APIURL from '../helpers/environment';
import { Button, notification, Space } from 'antd';

function RegisterPlayer(props){
    const {buttonLabel, className} = props;
    const [registerModal, setRegisterModal] = useState(false);
    const toggle = () => setRegisterModal(!registerModal);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    let handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/user/register`, {
            method:'POST',
            body: JSON.stringify({user:{email:email, password:password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
            props.updateUserRole(data.user.isAdmin.toString());
        })
    };

    const openNotificationWithIcon = type => {
        notification[type]({
          message: 'Success!',
          description:
            'Your account has been created!',
        });
      };

    return(
        <div>
            {localStorage.getItem('token') === null ? <Button type='button' onClick={toggle}>Register</Button>: null}
            <Modal isOpen={registerModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create an account and begin the fights!</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor='email'>Email: </Label>
                            <Input onChange={(e) => setEmail(e.target.value)} name='email' type='email' value={email}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='password'>Password: </Label>
                            <Input onChange={(e) => setPassword(e.target.value)} name='password' type='password' value={password}/>
                        </FormGroup>
                        <FormGroup>
                            <Space>
                            <Button type='submit' onClick={() => openNotificationWithIcon('success'), toggle}>Create account</Button>{' '}
                            </Space>
                            <Button onClick={toggle}>Cancel</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default RegisterPlayer;