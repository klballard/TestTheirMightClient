import React from 'react';
import {Button,Table,Card} from 'reactstrap';
import APIURL from '../../helpers/environment';

const UserList = (props) => {
    const accessToken = localStorage.getItem('token');
    const deleteUser = (id) => {
        fetch(`${APIURL}/user/${id}`, {
            method:'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            })
        }).then(() => props.fetchUsers())
    }

    const userMap = () => {
        return props.users.map((user) => {
            return(
                <tr style={{marginTop:'5%'}} key={user.id}>
                    <th scope='row'>{user.email}</th>
                    <td>********</td>
                    <td style={{fontFamily:'Open Sans'}}>{user.createdAt}</td>
                    <td><Button color='danger' onClick={() => {deleteUser(user)}}>X</Button></td>
                </tr>
            )
        })
    }

    return(
        <div style={{marginTop:'0%', backgroundColor:'transparent'}}>
        <Card style={{padding:'10px', border:'5px solid black', width:'100%'}}>
        <br/>
        <h3>Registered Users</h3>
        <Table>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Created at: </th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {userMap()}
            </tbody>
        </Table>
        </Card>
        </div>
    )
}

export default UserList;