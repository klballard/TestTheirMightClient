import React from 'react';
import {Button,Table} from 'reactstrap';
import APIURL from '../helpers/environment';


const TeamList = (props) => {

    const deleteTeam = (team) => {
        fetch(`${APIURL}/team/${team.id}`, {
            method:'DELETE',
            headers:new Headers({
                'Content-Type':'application/json',
                'Authorization':props.sessionToken
            })
        }).then(() => props.fetchTeams())
    }

    const teamMap = () => {
        return props.teams.map((team, index) => {
            return(
                <tr key={index}>
                    <th scope='row'>{team.teamName}</th>
                    <td>{team.fighterOne}</td>
                    <td>{team.fighterTwo}</td>
                    <td>{team.fighterThree}</td>
                    <td>{team.fighterFour}</td>
                    <td>{team.fighterFive}</td>
                    <td><b>{sum([team.fighterOnePL, team.fighterTwoPL, team.fighterThreePL, team.fighterFourPL, team.fighterFivePL])}</b></td>
                    <td><Button color='warning' onClick={() => {props.teamEditUpdate(team); props.updateOn()}}></Button></td>
                    <td><Button className='listButton m-1' color='danger' onClick={() => {deleteTeam(team)}}></Button></td>
                </tr>
            )
        })
    }

    function sum(input){
        if(toString.call(input) !== "[object Array]")
            return false;
        var total = 0;
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
        <h3>Saved Teams</h3>
        <hr/>
        <Table>
            <thead>
                <tr>
                    <th>Team Name</th>
                    <th>#1</th>
                    <th>#2</th>
                    <th>#3</th>
                    <th>#4</th>
                    <th>#5</th>
                    <th>Total: </th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {teamMap()}
            </tbody>
        </Table>
        </>
    )
}

export default TeamList;