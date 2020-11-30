import React, {useState} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';

const EditTeam = (props) => {
    const [editName, setEditName] = useState(props.teamToEdit.teamName);
    const [editFighterOne, setEditFighterOne] = useState(props.teamToEdit.fighterOne);
    const [editFighterTwo, setEditFighterTwo] = useState(props.teamToEdit.fighterTwo);
    const [editFighterThree, setEditFighterThree] = useState(props.teamToEdit.fighterThree);
    const [editFighterFour, setEditFighterFour] = useState(props.teamToEdit.fighterFour);
    const [editFighterFive, setEditFighterFive] = useState(props.teamToEdit.fighterFive);
    
    const teamNameUpdate = (event) => {
        event.preventDefault();
        fetch(`https://testtheirmightheroku.herokuapp.com/team/${props.teamToEdit.id}`, {
            method:'PUT',
            body: JSON.stringify({userId: 4, teamName: editName}),
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': localStorage.token
            })
        }).then((res) => {
            props.fetchTeams();
            props.updateOff();
        })
    }

    return(
        <div>
            <Modal isOpen={true}>
                <ModalHeader>Edit Team</ModalHeader>
                <ModalBody>
                    <Form onSubmit={teamNameUpdate}>
                        <FormGroup>
                            <Label htmlFor='name'>Edit name</Label>
                            <Input name='name' value={editName} onChange={(e) => setEditName(e.target.value)}/>
                        </FormGroup>
                        <Button type='submit'>Update</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )


}



export default EditTeam;