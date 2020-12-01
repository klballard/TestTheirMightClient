import React, {useState,useEffect} from 'react';
import {Card,Row,Col} from 'reactstrap';
import APIURL from '../helpers/environment';
import UserList from './UserList';


const AdminPage = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        fetch(`${APIURL}/user/getall`, {
            method:'GET',
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization':localStorage.token
            })
        }).then((res) => res.json())
        .then((listData) => {
            setUsers(listData);
        })
    }

    useEffect(() => {
        fetchUsers();
    },[])

    return(
        <div>
            <Card body className='ml-auto mr-auto mt-5 col-7'>
                <Row>
                    <Col>
                    <UserList users={users} fetchUsers={fetchUsers}/>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default AdminPage;