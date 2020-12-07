import React, {useState, useEffect} from 'react';
import {Card, CardTitle, Col, Row, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';

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

    const teamFightResults = () => {
        if(sum([teamOne.fighterOnePL, teamOne.fighterTwoPL, teamOne.fighterThreePL, teamOne.fighterFourPL, teamOne.fighterFivePL]) > sum([teamTwo.fighterOnePL, teamTwo.fighterTwoPL, teamTwo.fighterThreePL, teamTwo.fighterFourPL, teamTwo.fighterFivePL])){
            alert(`\n                    ${teamOne.teamName}'s power level: ${sum([teamOne.fighterOnePL, teamOne.fighterTwoPL, teamOne.fighterThreePL, teamOne.fighterFourPL, teamOne.fighterFivePL])}
                    ${teamTwo.teamName}'s power level: ${sum([teamTwo.fighterOnePL, teamTwo.fighterTwoPL, teamTwo.fighterThreePL, teamTwo.fighterFourPL, teamTwo.fighterFivePL])}\n
                    ${teamOne.teamName} wins!`)
        }
        else if(sum([teamOne.fighterOnePL, teamOne.fighterTwoPL, teamOne.fighterThreePL, teamOne.fighterFourPL, teamOne.fighterFivePL]) < sum([teamTwo.fighterOnePL, teamTwo.fighterTwoPL, teamTwo.fighterThreePL, teamTwo.fighterFourPL, teamTwo.fighterFivePL])){
            alert(`\n                    ${teamOne.teamName}'s power level: ${sum([teamOne.fighterOnePL, teamOne.fighterTwoPL, teamOne.fighterThreePL, teamOne.fighterFourPL, teamOne.fighterFivePL])}
                    ${teamTwo.teamName}'s power level: ${sum([teamTwo.fighterOnePL, teamTwo.fighterTwoPL, teamTwo.fighterThreePL, teamTwo.fighterFourPL, teamTwo.fighterFivePL])}\n
                    ${teamTwo.teamName} wins!`)
        }
        else if(sum([teamOne.fighterOnePL, teamOne.fighterTwoPL, teamOne.fighterThreePL, teamOne.fighterFourPL, teamOne.fighterFivePL]) === sum([teamTwo.fighterOnePL, teamTwo.fighterTwoPL, teamTwo.fighterThreePL, teamTwo.fighterFourPL, teamTwo.fighterFivePL])){
            alert(`\n                    ${teamOne.teamName}'s power level: ${sum([teamOne.fighterOnePL, teamOne.fighterTwoPL, teamOne.fighterThreePL, teamOne.fighterFourPL, teamOne.fighterFivePL])}
                    ${teamTwo.teamName}'s power level: ${sum([teamTwo.fighterOnePL, teamTwo.fighterTwoPL, teamTwo.fighterThreePL, teamTwo.fighterFourPL, teamTwo.fighterFivePL])}\n
                    It's a draw! Good fight.`)
        }
    }

    return(
        <div>
            <div style={{ marginTop:'120px', textAlign:'center'}}>
                <h4>Team battle!</h4>
            </div>
            <div style={{textAlign:'center'}}>
                <Row>
                    <Col>
                        <Card style={{border:'3px solid black', height:'23em'}}>
                            <CardTitle style={{fontSize:'32px'}}>{teamOne.teamName}</CardTitle>
                            <Col>
                                <table style={{textAlign:'center'}} key={teamOne.id}>
                                    <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    </tr>
                                    <tr>
                                        <th><img width='100%' height='200px' alt='' src={teamOne.fighterOneImg}/></th>
                                        <th><img width='100%' height='200px' alt='' src={teamOne.fighterTwoImg}/></th>
                                        <th><img width='100%' height='200px' alt='' src={teamOne.fighterThreeImg}/></th>
                                        <th><img width='100%' height='200px' alt='' src={teamOne.fighterFourImg}/></th>
                                        <th><img width='100%' height='200px' alt='' src={teamOne.fighterFiveImg}/></th>
                                    </tr>
                                    <tr style={{fontSize:'20px'}}>
                                        <td>{teamOne.fighterOne}</td>
                                        <td>{teamOne.fighterTwo}</td>
                                        <td>{teamOne.fighterThree}</td>
                                        <td>{teamOne.fighterFour}</td>
                                        <td>{teamOne.fighterFive}</td>
                                    </tr>
                                </table>
                            </Col>
                            <Row></Row>
                            <Row style={{marginLeft:'auto', marginRight:'auto'}}>
                            <select value={firstSelect} onChange={e => setFirstSelect(e.currentTarget.value)}>{teams.map(team => (
                                <option key={team.id} value={team.id}>{team.teamName}</option>
                            ))}</select>
                            <br/>
                            <Button style={{border:'3px solid black', color:'white', backgroundColor:'black'}} onClick={fetchTeamOne}>Ready Team 1?</Button>
                            </Row>
                        </Card>
                    </Col>
                    <div style={{marginTop:'350px'}}>
                        <h1>VS.</h1>
                        <br/>
                        <Button style={{border:'3px solid black', color:'black', backgroundColor:'red', fontSize:'28px'}} onClick={teamFightResults}>FIGHT!</Button>
                    </div>
                    <Col>
                        <Card style={{border:'3px solid black', height:'23em'}}>
                            <CardTitle style={{fontSize:'32px'}}>{teamTwo.teamName}</CardTitle>
                            <Col>
                                <table style={{textAlign:'center'}} key={teamTwo.id}>
                                    <tr>
                                        <th><img width='100%' height='200px' alt='' src={teamTwo.fighterOneImg}/></th>
                                        <th><img width='100%' height='200px' alt='' src={teamTwo.fighterTwoImg}/></th>
                                        <th><img width='100%' height='200px' alt='' src={teamTwo.fighterThreeImg}/></th>
                                        <th><img width='100%' height='200px' alt='' src={teamTwo.fighterFourImg}/></th>
                                        <th><img width='100%' height='200px' alt='' src={teamTwo.fighterFiveImg}/></th>
                                    </tr>
                                    <tr style={{fontSize:'20px'}}>
                                        <td>{teamTwo.fighterOne}</td>
                                        <td>{teamTwo.fighterTwo}</td>
                                        <td>{teamTwo.fighterThree}</td>
                                        <td>{teamTwo.fighterFour}</td>
                                        <td>{teamTwo.fighterFive}</td>
                                    </tr>
                                </table>
                            </Col>
                            <Row></Row>
                            <Row style={{marginLeft:'auto', marginRight:'auto'}}>
                            <Button style={{border:'3px solid black', color:'white', backgroundColor:'black'}} onClick={fetchTeamTwo}>Ready Team 2?</Button>
                            <br/>
                            <select value={secondSelect} onChange={e => setSecondSelect(e.currentTarget.value)}>{teams.map(team => (
                                <option key={team.id} value={team.id}>{team.teamName}</option>
                            ))}</select>
                            
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default TeamFight;