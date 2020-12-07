import React, {useState} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import APIURL from '../../helpers/environment';

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
            <Modal style={{textAlign:'center'}} isOpen={true}>
                <ModalHeader style={{marginLeft:'auto', marginRight:'auto'}}>Edit Fighter</ModalHeader>
                <ModalBody>
                    <Form onSubmit={fighterNameUpdate}>
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



export default EditFighter;
