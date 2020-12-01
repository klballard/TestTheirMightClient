import React from 'react';
import {Admin, Resource, ListGuesser} from 'react-admin';
import APIURL from '../helpers/environment';

const dataProvider = APIURL;

const AdminPage = () => {
    return(
        <Admin dataProvider={dataProvider}>
            <Resource name='users' list={ListGuesser}/>
        </Admin>
    );
}

export default AdminPage;