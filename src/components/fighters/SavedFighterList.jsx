import React from 'react';
import {Button,Table} from 'reactstrap';
import APIURL from '../../helpers/environment';


const FighterList = (props) => {
    const accessToken = localStorage.getItem('token');
    const deleteFighter = (fighter) => {
        fetch(`${APIURL}/fighter/${fighter.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            })
        }).then(() => props.fetchFighters())
    }

    const fighterMap = () => {
        return props.fighters.map((fighter, index) => {
            return(
                <tr key={index}>
                    <th scope='row'><img alt='fighterthumbnail' src={fighter.image} width='50' height='50'></img><br/>{fighter.fighterName}</th>
                    <td style={{fontFamily:'Open Sans'}}>{fighter.intelligence}</td>
                    <td style={{fontFamily:'Open Sans'}}>{fighter.strength}</td>
                    <td style={{fontFamily:'Open Sans'}}>{fighter.speed}</td>
                    <td style={{fontFamily:'Open Sans'}}>{fighter.durability}</td>
                    <td style={{fontFamily:'Open Sans'}}>{fighter.power}</td>
                    <td style={{fontFamily:'Open Sans'}}>{fighter.combat}</td>
                    <td style={{fontFamily:'Open Sans'}}><b>{sum([fighter.intelligence, fighter.strength, fighter.speed, fighter.durability, fighter.power, fighter.combat])}</b></td>
                    <td><Button color='warning' onClick={() => {props.fighterEditUpdate(fighter); props.updateOn()}}></Button></td>
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
        <Table style={{fontSize:'20px'}}>
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
                    <th>Edit</th>
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