import React, {useState, useEffect} from 'react';
import {Card,Col,Row} from 'reactstrap';
import TeamList from './SavedTeamList';
import EditTeam from './EditTeam';
import APIURL from '../../helpers/environment';


const SavedTeams = (props) => {
    const [teams, setTeams] = useState([]);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [teamToEdit, setTeamToEdit] = useState({});
    const accessToken = localStorage.getItem('token');
    const fetchTeams = (props) => {
        fetch(`${APIURL}/team/getall`, {
            method:'GET',
            //mode: 'no-cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            })
        }).then((res) => res.json())
        .then((listData) => {
            setTeams(listData);
        })
    }

    useEffect(() => {
        fetchTeams();
    }, [])

    const updateOn = () => {
        setUpdateOpen(true);
    }

    const updateOff = () => {
        setUpdateOpen(false);
    }

    const teamEditUpdate = (team) => {
        setTeamToEdit(team);
    }

    return(
        <div style={{marginTop:'5%'}}>
            <Card style={{border:'5px solid black'}} body className='ml-auto mr-auto mt-5 col-7'>
                <Row>
                    <Col>
                        <TeamList teams={teams} fetchTeams={fetchTeams} teamEditUpdate={teamEditUpdate} updateOn={updateOn}/>
                    </Col>
                    {updateOpen ? <EditTeam teamToEdit={teamToEdit}
                        updateOff={updateOff} fetchTeams={fetchTeams}/> : <></>}
                </Row>
            </Card>
        </div>
    )
}

export default SavedTeams;