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
        console.log('before')
        //props.results.map(() => {
            e.preventDefault();
            console.log('middle')
            fetch(`${APIURL}/fighter/save`, {
                method:'POST',
                body: JSON.stringify({fighter:{fighterName: props.fighterName, intelligence: props.intelligence, strength: props.strength, speed: props.speed, durability: props.durability, power: props.power, combat: props.combat, image: props.image.url}}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.sessionToken,
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
                            <Button type='submit' className='mt-2' onSubmit={saveFighter}>Add Fighter to Roster</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </Col>
        </div>
    )
}


export default FighterCard;


                