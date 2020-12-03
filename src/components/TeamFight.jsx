import React, {useState, useEffect} from 'react';
import {Card, Col, Row, Button} from 'reactstrap';
import APIURL from '../helpers/environment';

const TeamFight = (props) => {
    const [teams, setTeams] = useState([]);
    const [teamOne, setTeamOne] = useState([]);
    const [teamTwo, setTeamTwo] = useState([]);
    const [firstSelect, setFirstSelect] = useState([]);
    const [secondSelect, setSecondSelect] = useState([]);

    const fetchTeamOne = () => {
        fetch(`${APIURL}/team/${firstSelect}`, {
            method:'GET',
            //body: JSON.stringify(),
            headers: new Headers({
                //"Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": localStorage.token
            })
        }).then((res) => res.json())
        .then((listData) => {
            setTeamOne(listData);
        })
    }

    const fetchTeamTwo = () => {
        fetch(`${APIURL}/team/${secondSelect}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then((res) => res.json())
        .then((listData) => {
            setTeamTwo(listData);
        })
    }

    const fetchTeams = () => {
        fetch(`${APIURL}/team/getall`, {
            method:'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then((res) => res.json())
        .then((listData) => {
            setTeams(listData);
        })
    }

    useEffect(() => {
        fetchTeams();
    }, [])

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
        <div>
            <div style={{ marginTop:'120px', textAlign:'center'}}>
                <h4>Team battle!</h4>
            </div>
            <div>
                <Row>
                    <Col>
                        <Card>
                            <Col>
                                <table key={teamOne.id}>
                                    <tr>
                                        <th><img alt='' src={teamOne.fighterOneImg}/></th>
                                        <th><img alt='' src={teamOne.fighterTwoImg}/></th>
                                        <th><img alt='' src={teamOne.fighterThreeImg}/></th>
                                        <th><img alt='' src={teamOne.fighterFourImg}/></th>
                                        <th><img alt='' src={teamOne.fighterFiveImg}/></th>
                                    </tr>
                                    <tr>
                                        <td>{teamOne.fighterOne}</td>
                                        <td>{teamOne.fighterTwo}</td>
                                        <td>{teamOne.fighterThree}</td>
                                        <td>{teamOne.fighterFour}</td>
                                        <td>{teamOne.fighterFive}</td>
                                    </tr>
                                </table>
                            </Col>
                            <Row>
                            <select value={firstSelect} onChange={e => setFirstSelect(e.currentTarget.value)}>{teams.map(team => (
                                <option key={team.id} value={team.id}>{team.teamName}</option>
                            ))}</select>
                            <br/>
                            <Button onClick={fetchTeamOne}>Load Team 1</Button>
                            </Row>
                        </Card>
                    </Col>
                    <div style={{marginTop:'350px'}}>
                        <h3>VS.</h3>
                        <br/>
                        <Button>FIGHT!</Button>
                    </div>
                    <Col>
                        <Card>
                            <Col>
                                <table key={teamTwo.id}>
                                    <tr>
                                        <th><img alt='' src={teamTwo.fighterOneImg}/></th>
                                        <th><img alt='' src={teamTwo.fighterTwoImg}/></th>
                                        <th><img alt='' src={teamTwo.fighterThreeImg}/></th>
                                        <th><img alt='' src={teamTwo.fighterFourImg}/></th>
                                        <th><img alt='' src={teamTwo.fighterFiveImg}/></th>
                                    </tr>
                                    <tr>
                                        <td>{teamTwo.fighterOne}</td>
                                        <td>{teamTwo.fighterTwo}</td>
                                        <td>{teamTwo.fighterThree}</td>
                                        <td>{teamTwo.fighterFour}</td>
                                        <td>{teamTwo.fighterFive}</td>
                                    </tr>
                                </table>
                            </Col>
                            <Row>
                            <select value={secondSelect} onChange={e => setSecondSelect(e.currentTarget.value)}>{teams.map(team => (
                                <option key={team.id} value={team.id}>{team.teamName}</option>
                            ))}</select>
                            <br/>
                            <Button onClick={fetchTeamTwo}>Load Team 2</Button>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default TeamFight;