import React from 'react';
import {Button,Table} from 'reactstrap';

const FighterList = (props) => {

    const deleteFighter = (fighter) => {
        fetch(`https://testtheirmightheroku.herokuapp.com/fighter/${fighter.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then(() => props.fetchFighters())
    }

    const fighterMap = () => {
        return props.fighters.map((fighter, index) => {
            return(
                <tr key={index}>
                    <th scope='row'><img alt='fighterthumbnail' src={fighter.image} width='20' height='20'></img>   {fighter.fighterName}</th>
                    <td>{fighter.intelligence}</td>
                    <td>{fighter.strength}</td>
                    <td>{fighter.speed}</td>
                    <td>{fighter.durability}</td>
                    <td>{fighter.power}</td>
                    <td>{fighter.combat}</td>
                    <td><b>{sum([fighter.intelligence, fighter.strength, fighter.speed, fighter.durability, fighter.power, fighter.combat])}</b></td>
                    <td><Button className='listButton m-1' color='danger' onClick={() => {deleteFighter(fighter)}}>X</Button></td>
                </tr>
            )
        })
    }

    function sum(input){
             
        if (toString.call(input) !== "[object Array]")
           return false;
             
                   var total =  0;
                   for(var i=0;i<input.length;i++)
                     {                  
                       if(isNaN(input[i])){
                       continue;
                        }
                         total += Number(input[i]);
                      }
                    return total;
    }

    return(
        <>
        <h3>Saved Fighters</h3>
        <hr/>
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Intelligence: </th>
                    <th>Strength: </th>
                    <th>Speed: </th>
                    <th>Durability: </th>
                    <th>Power: </th>
                    <th>Combat: </th>
                    <th>Total: </th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {fighterMap()}
            </tbody>
        </Table>
        </>
    )
}

export default FighterList;