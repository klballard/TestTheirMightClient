import React, {useState} from 'react';
import {Button, Card, CardBody, CardImg, CardGroup, CardSubtitle, CardText, CardTitle, Col, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {List, ListItem} from '@material-ui/core';
import APIURL from '../helpers/environment';



const FighterCard = (props) => {
    console.log(props.results);
    console.log(props.results.name);
    console.log(props.results.powerstats);
    console.log(props.results.powerstats.intelligence);
    console.log(props.image);
    

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
            <Col className='col-12'>
                <CardGroup className='card-group m-3'>
                    <Card className='card overflow-auto' style={{maxWidth: "250px", maxHeight:"1000px", minHeight:"425px"}}>
                        <CardTitle>
                            <b>{props.results.name}</b>
                        </CardTitle>
                        <CardImg top width="100%" src={props.results.image.url} alt="Fighter pic"/>
                        <CardBody>
                            <b>Stats:</b>
                            <List>
                                <ListItem>Intelligence: {props.results.powerstats.intelligence}</ListItem>
                                <ListItem>Strength: {props.results.powerstats.strength}</ListItem>
                                <ListItem>Speed: {props.results.powerstats.speed}</ListItem>
                                <ListItem>Durability: {props.results.powerstats.durability}</ListItem>
                                <ListItem>Power: {props.results.powerstats.power}</ListItem>
                                <ListItem>Combat: {props.results.powerstats.combat}</ListItem>
                            </List>
                            <Button className='mt-2' onClick={saveFighter}>Add Fighter to Roster</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </Col>
        </div>
    )
}


export default FighterCard;


                