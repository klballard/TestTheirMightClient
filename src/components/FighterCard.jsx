import React, {useState} from 'react';
import {Button, Card, CardBody, CardImg, CardGroup, CardSubtitle, CardText, CardTitle, Col, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {List, ListItem} from '@material-ui/core';
const FighterCard = (props) => {

    const [results, setResults] = useState(props.results);
    const saveFighter = () => {
        results.map((results) => {
            //e.preventDefault();
            fetch('https://testtheirmightheroku.herokuapp.com/fighter/save', {

                method:'POST',
                body: JSON.stringify({fighterName: results.name, intelligence: results.powerstats.intelligence, strength: results.powerstats.strength, speed : results.powerstats.speed, durability: results.powerstats.durability, power: results.powerstats.power, combat: results.powerstats.combat, image: results.image.url}),
                headers: new Headers({
                    'Content-Type': 'text/plain',
                    'Authorization': localStorage.token
                })
            }).then((res) => res.json())
            .then((fighter) => {
                console.log(fighter);
            })
            
            
            
        })
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
                            <Button className='mt-2' onClick={saveFighter}>Save Fighter</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </Col>
        </div>
    )
}


export default FighterCard;


                