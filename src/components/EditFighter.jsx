import React from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import APIURL from '../helpers/environment';

const EditFighter = (props) => {
    const [editName, setEditName] = useState(props.fighterToEdit.fighterName);

    const fighterNameUpdate = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/fighter/${props.fighterToEdit.id}`, {
            method:'PUT',
            body: JSON.stringify({fighterName: editName}),
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': localStorage.token
            })
        }).then((res) => {
            props.fetchFighters();
            props.updateOff();
        })
    }

    return(
        <div>
            <Modal isOpen={true}>
                <ModalHeader>Edit Fighter</ModalHeader>
                <ModalBody>
                    <Form onSubmit={fighterNameUpdate}>
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



export default EditFighter;
