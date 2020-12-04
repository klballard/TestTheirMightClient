import React, {useState} from 'react';
import {Button, Card, CardBody, CardImg, CardGroup, CardSubtitle, CardText, CardTitle, Col, Modal, ModalBody, ModalHeader, DropdownToggle,Dropdown,DropdownMenu,DropdownItem} from 'reactstrap';
import {List, ListItem} from '@material-ui/core';
import APIURL from '../helpers/environment';



const FighterCard = (props) => {
    console.log(props.results);
    console.log(props.results.name);
    console.log(props.results.powerstats);
    console.log(props.results.powerstats.intelligence);
    console.log(props.image);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    //const [results, setResults] = useState(props.results);
    const saveFighter = (e) => {
        //props.results.map(() => {
            e.preventDefault();
            fetch(`${APIURL}/fighter/save`, {
                method:'POST',
                body: JSON.stringify({fighterName: props.results.name, intelligence: props.results.powerstats.intelligence, strength: props.results.powerstats.strength, speed: props.results.powerstats.speed, durability: props.results.powerstats.durability, power: props.results.powerstats.power, combat: props.results.powerstats.combat, image: props.results.image.url}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.token
                })
            }).then((res) => res.json())
            .then((fighter) => {
                console.log(fighter, 'it worked');
            }).catch((err) => {
                console.log(err);
            })
            
            
            
        /*}*///)
    }
    return(
        <div>
            <Col style={{marginLeft:'35%', marginRight:'auto'}} className='col-12'>
                <CardGroup className='card-group m-3'>
                    <Card className='card overflow-auto' style={{border:'5px solid black', maxWidth: "250px", maxHeight:"950px", minHeight:"425px"}}>
                        <CardTitle style={{fontSize:'30px', textAlign:'center'}}>
                            <b>{props.results.name}</b>
                        </CardTitle>
                        <CardImg top width="100%" style={{height:'325px'}} src={props.results.image.url} alt="Fighter pic"/>
                        <CardBody style={{textAlign:'center'}}>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle style={{border:'3px solid black', color:'black', backgroundColor:'white'}} caret>
                                Stats:
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Intelligence: {props.results.powerstats.intelligence}</DropdownItem>
                                <DropdownItem>Strength: {props.results.powerstats.strength}</DropdownItem>
                                <DropdownItem>Speed: {props.results.powerstats.speed}</DropdownItem>
                                <DropdownItem>Durability: {props.results.powerstats.durability}</DropdownItem>
                                <DropdownItem>Power: {props.results.powerstats.power}</DropdownItem>
                                <DropdownItem>Combat: {props.results.powerstats.combat}</DropdownItem>
                            </DropdownMenu>
                            </Dropdown>
                            <Button style={{border:'3px solid black', color:'black', backgroundColor:'white'}} className='mt-2' onClick={saveFighter}>Add Fighter to Roster</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </Col>
        </div>
    )
}


export default FighterCard;


                