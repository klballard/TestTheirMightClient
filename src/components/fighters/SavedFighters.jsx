import React, {useState, useEffect} from 'react';
import {Card, Row, Col} from 'reactstrap';
import FighterList from './SavedFighterList';
import EditFighter from './EditFighter';
import APIURL from '../../helpers/environment';



const SavedFighters = (props) => {

    const [fighters, setFighters] = useState([]);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [fighterToEdit, setFighterToEdit] = useState({});
    const accessToken = localStorage.getItem('token');
    
    const fetchFighters = () => {
        fetch(`${APIURL}/fighter/getall`, {
            method: 'GET',
            //mode: 'no-cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            })
        }).then((res) => res.json())
        .then((listData) => {
            setFighters(listData);
        })
    }

    useEffect(() => {
        fetchFighters();
    },[])

    const updateOn = () => {
        setUpdateOpen(true);
    }

    const updateOff = () => {
        setUpdateOpen(false);
    }

    const fighterEditUpdate = (fighter) => {
        setFighterToEdit(fighter);
    }


    return(
        <div>
            <div style={{marginTop:'5%'}}>
            <Card style={{border:'5px solid black'}} body className='ml-auto mr-auto mt-5 col-7'>
                <Row>
                    <Col>
                    <FighterList fighters={fighters} fetchFighters={fetchFighters} fighterEditUpdate={fighterEditUpdate} updateOn={updateOn}/>
                    </Col>
                    {updateOpen ? <EditFighter fighterToEdit={fighterToEdit}
                        updateOff={updateOff} fetchFighters={fetchFighters}/> : <></>}
                </Row>
            </Card>
            </div>
        </div>
    )
}

export default SavedFighters;