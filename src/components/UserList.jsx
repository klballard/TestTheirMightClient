import React from 'react';
import {Button,Table} from 'reactstrap';
import APIURL from '../helpers/environment';

const UserList = (props) => {

    const deleteUser = (user) => {
        fetch(`${APIURL}/user/${user.id}`, {
            method:'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then(() => props.fetchUsers())
    }

    const userMap = () => {
        return props.users.map((user) => {
            return(
                <tr key={user.id}>
                    <th scope='row'>{user.email}</th>
                    <td>********</td>
                    <td>{user.createdAt}</td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Registered Users</h3>
        <hr/>
        <Table>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Created at: </th>
                </tr>
            </thead>
            <tbody>
                {userMap()}
            </tbody>
        </Table>
        </>
    )
}

export default UserList;