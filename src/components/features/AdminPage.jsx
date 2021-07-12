import React, {useState,useEffect} from 'react';
import {Card,Row,Col} from 'reactstrap';
import APIURL from '../../helpers/environment';
import UserList from './UserList';


const AdminPage = (props) => {
    const [users, setUsers] = useState([]);
    const accessToken = localStorage.getItem('token');
    const fetchUsers = () => {
        fetch(`${APIURL}/user/getall`, {
            method:'GET',
            //mode: 'no-cors',
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': `Bearer ${accessToken}`
            })
        }).then((res) => res.json())
        .then((listData) => {
            setUsers(listData);
            console.log(listData);
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