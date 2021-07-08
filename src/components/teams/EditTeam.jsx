import React, {useState} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import APIURL from '../../helpers/environment';


const EditTeam = (props) => {
    const [editName, setEditName] = useState(props.teamToEdit.teamName);
    /*const [editFighterOne, setEditFighterOne] = useState(props.teamToEdit.fighterOne);
    const [editFighterTwo, setEditFighterTwo] = useState(props.teamToEdit.fighterTwo);
    const [editFighterThree, setEditFighterThree] = useState(props.teamToEdit.fighterThree);
    const [editFighterFour, setEditFighterFour] = useState(props.teamToEdit.fighterFour);
    const [editFighterFive, setEditFighterFive] = useState(props.teamToEdit.fighterFive);*/
    const accessToken = localStorage.getItem('token');
    const teamNameUpdate = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/team/${props.teamToEdit.id}`, {
            method:'PUT',
            mode: 'no-cors',
            body: JSON.stringify({teamName: editName}),
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': `Bearer ${accessToken}`
            })
        }).then((res) => {
            props.fetchTeams();
            props.updateOff();
        })
    }

    return(
        <div>
            <Modal style={{textAlign:'center'}} isOpen={true}>
                <ModalHeader style={{marginLeft:'auto', marginRight:'auto'}}>Edit Team</ModalHeader>
                <ModalBody>
                    <Form onSubmit={teamNameUpdate}>
                        <FormGroup>
                            <Label style={{fontSize:'18px'}} htmlFor='name'>Edit name</Label>
                            <Input style={{width: '300px', marginLeft:'auto', marginRight:'auto', border:'2px solid black'}} name='name' value={editName} onChange={(e) => setEditName(e.target.value)}/>
                        </FormGroup>
                        <Button style={{border:'3px solid black', color:'black', backgroundColor:'white'}} type='submit'>Update</Button>
                        <Button style={{border:'3px solid black', color:'black', backgroundColor:'white'}} isOpen={false}>Cancel</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )


}



export default EditTeam;