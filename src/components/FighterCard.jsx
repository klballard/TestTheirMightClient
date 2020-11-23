import React, {useState} from 'react';
import {Button, Card, CardBody, CardImg, CardGroup, CardSubtitle, CardText, CardTitle, Modal, ModalBody, ModalHeader} from 'reactstrap';

const FighterCard = (props) => {
    
    const saveFighter = (e) => {
        e.preventDefault();
        fetch('https://testtheirmightheroku.herokuapp.com/fighter/save', {
            method:'POST',
            body: JSON.stringify
        })
    }
}