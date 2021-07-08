import React, {useState,useEffect} from 'react';
import {Card, Col, Row, Button, CardTitle, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../../helpers/environment';


const CreateTeam = (props) => {
    const [fighters, setFighters] = useState([]);
    const [teamName, setTeamName] = useState('');
    const [fighterOne, setFighterOne] = useState([]);
    const [selectOne, setSelectOne] = useState([]);
    const [fighterTwo, setFighterTwo] = useState([]);
    const [selectTwo, setSelectTwo] = useState([]);
    const [fighterThree, setFighterThree] = useState([]);
    const [selectThree, setSelectThree] = useState([]);
    const [fighterFour, setFighterFour] = useState([]);
    const [selectFour, setSelectFour] = useState([]);
    const [fighterFive, setFighterFive] = useState([]);
    const [selectFive, setSelectFive] = useState([]);
    const accessToken = localStorage.getItem('token');
    const fetchFighterOne = () => {
        fetch(`${APIURL}/fighter/${selectOne}`, {
            method: 'GET',
            mode: 'no-cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            })
        }).then((res) => res.json())
        .then((listData) => {
            setFighterOne(listData);
        })
    }

    const fetchFighterTwo = () => {
        fetch(`${APIURL}/fighter/${selectTwo}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then((res) => res.json())
        .then((listData) => {
            setFighterTwo(listData);
        })
    }

    const fetchFighterThree = () => {
        fetch(`${APIURL}/fighter/${selectThree}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then((res) => res.json())
        .then((listData) => {
            setFighterThree(listData);
        })
    }

    const fetchFighterFour = () => {
        fetch(`${APIURL}/fighter/${selectFour}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then((res) => res.json())
        .then((listData) => {
            setFighterFour(listData);
        })
    }

    const fetchFighterFive = () => {
        fetch(`${APIURL}/fighter/${selectFive}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then((res) => res.json())
        .then((listData) => {
            setFighterFive(listData);
        })
    }

    const fetchFighters = () => {
        fetch(`${APIURL}/fighter/getall`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then((res) => res.json())
        .then((listData) => {
            setFighters(listData);
        })
    }

    useEffect(() => {
        fetchFighters();
    },[])
    
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

    const SaveTeam = () => {
        fetch(`${APIURL}/team/saveteam`, {
            method:'POST',
            body: JSON.stringify({teamName: teamName,
                fighterOne: fighterOne.fighterName, fighterOnePL: sum([fighterOne.intelligence, fighterOne.strength, fighterOne.speed, fighterOne.durability, fighterOne.power, fighterOne.combat]), fighterOneImg: fighterOne.image,
                fighterTwo: fighterTwo.fighterName, fighterTwoPL: sum([fighterTwo.intelligence, fighterTwo.strength, fighterTwo.speed, fighterTwo.durability, fighterTwo.power, fighterTwo.combat]), fighterTwoImg: fighterTwo.image,
                fighterThree: fighterThree.fighterName, fighterThreePL: sum([fighterThree.intelligence, fighterThree.strength, fighterThree.speed, fighterThree.durability, fighterThree.power, fighterThree.combat]), fighterThreeImg: fighterThree.image,
                fighterFour: fighterFour.fighterName, fighterFourPL: sum([fighterFour.intelligence, fighterFour.strength, fighterFour.speed, fighterFour.durability, fighterFour.power, fighterFour.combat]), fighterFourImg: fighterFour.image,
                fighterFive: fighterFive.fighterName, fighterFivePL: sum([fighterFive.intelligence, fighterFive.strength, fighterFive.speed, fighterFive.durability, fighterFive.power, fighterFive.combat]), fighterFiveImg: fighterFive.image
        }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then((res) => res.json())
        .then((team) => {
            console.log(team);
        })
    }
    
    return(
        <div>
            <div style={{ marginTop:'100px', textAlign:'center'}}><h4>Form your teams from saved fighters for bigger battles!</h4>
                <br/>
                <br/>
                <Form>
                    <FormGroup>
                        <Label htmlFor='teamName'>Enter a name for your team:</Label>
                        <Input style={{width: '300px', marginLeft:'auto', marginRight:'auto', border:'2px solid black'}} name='teamName' value={teamName} onChange={(e) => setTeamName(e.target.value)}/>
                    </FormGroup>
                </Form>
                <div style={{border:'3px solid black', backgroundColor:'white', width:'180px', marginLeft:'auto', marginRight:'auto'}}>
                    <h5>Team power: <span style={{fontFamily:'Open Sans'}}><b>{sum([fighterOne.intelligence, fighterOne.strength, fighterOne.speed, fighterOne.durability, fighterOne.power, fighterOne.combat, fighterTwo.intelligence, fighterTwo.strength, fighterTwo.speed, fighterTwo.durability, fighterTwo.power, fighterTwo.combat, fighterThree.intelligence, fighterThree.strength, fighterThree.speed, fighterThree.durability, fighterThree.power, fighterThree.combat, fighterFour.intelligence, fighterFour.strength, fighterFour.speed, fighterFour.durability, fighterFour.power, fighterFour.combat, fighterFive.intelligence, fighterFive.strength, fighterFive.speed, fighterFive.durability, fighterFive.power, fighterFive.combat])}</b></span></h5>
                    
                </div>
                <br/>
            </div>
            <div>
            <Card style={{backgroundColor:'transparent', border:'0px', textAlign:'center', width:'80%', marginLeft:'auto', marginRight:'auto'}}>
                <Row>
                    
                    <Col>
                        <Card style={{marginLeft:'46%', border:'3px solid black', width:'160px', height:'auto'}}>
                            <CardTitle>Power level: <span style={{fontFamily:'Open Sans'}}><b>{sum([fighterOne.intelligence, fighterOne.strength, fighterOne.speed, fighterOne.durability, fighterOne.power, fighterOne.combat])}</b></span></CardTitle>
                            <Col>
                                <table key={fighterOne.id}>
                                <tr><img alt='' src={fighterOne.image} style={{ width:'100%', height:'auto'}}></img></tr>
                                </table>
                            </Col>
                            <Col>
                                <select value={selectOne}  onChange={e => setSelectOne(e.currentTarget.value)}>{fighters.map(fighter => (
                                <option key={fighter.id} value={fighter.id}>{fighter.fighterName}</option>
                                ))}</select>
                                <br/>
                                <Button style={{border:'3px solid black', color:'black', backgroundColor:'white'}} onClick={fetchFighterOne}>Load Fighter #1</Button>
                            </Col>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{border:'3px solid black', width:'160px', height:'auto', marginLeft:'30%'}}>
                        <CardTitle>Power level: <span style={{fontFamily:'Open Sans'}}><b>{sum([fighterTwo.intelligence, fighterTwo.strength, fighterTwo.speed, fighterTwo.durability, fighterTwo.power, fighterTwo.combat])}</b></span></CardTitle>
                            <Col>
                                <table key={fighterTwo.id}>
                                    <tr><img alt='' src={fighterTwo.image} style={{ width:'100%', height:'auto'}}></img></tr>
                                </table>
                            </Col>
                            <Col>
                                <select value={selectTwo}  onChange={e => setSelectTwo(e.currentTarget.value)}>{fighters.map(fighter => (
                                <option key={fighter.id} value={fighter.id}>{fighter.fighterName}</option>
                                ))}</select>
                                <br/>
                                <Button style={{border:'3px solid black', color:'black', backgroundColor:'white'}} onClick={fetchFighterTwo}>Load Fighter #2</Button>
                            </Col>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{border:'3px solid black', width:'160px', height:'auto', marginLeft:'auto', marginRight:'auto'}}>
                        <CardTitle>Power level: <span style={{fontFamily:'Open Sans'}}><b>{sum([fighterThree.intelligence, fighterThree.strength, fighterThree.speed, fighterThree.durability, fighterThree.power, fighterThree.combat])}</b></span></CardTitle>
                            <Col>
                                <table key={fighterThree.id}>
                                    <tr><img alt='' src={fighterThree.image} style={{ width:'100%', height:'auto'}}></img></tr>
                                </table>
                            </Col>
                            <Col>
                                <select value={selectThree}  onChange={e => setSelectThree(e.currentTarget.value)}>{fighters.map(fighter => (
                                <option key={fighter.id} value={fighter.id}>{fighter.fighterName}</option>
                                ))}</select>
                                <br/>
                                <Button style={{border:'3px solid black', color:'black', backgroundColor:'white'}} onClick={fetchFighterThree}>Load Fighter #3</Button>
                            </Col>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{border:'3px solid black', width:'160px', height:'auto', marginLeft:'-4%'}}>
                        <CardTitle>Power level: <span style={{fontFamily:'Open Sans'}}><b>{sum([fighterFour.intelligence, fighterFour.strength, fighterFour.speed, fighterFour.durability, fighterFour.power, fighterFour.combat])}</b></span></CardTitle>
                            <Col>
                                <table key={fighterFour.id}>
                                    <tr><img alt='' src={fighterFour.image} style={{ width:'100%', height:'auto'}}></img></tr>
                                </table>
                            </Col>
                            <Col>
                                <select value={selectFour}  onChange={e => setSelectFour(e.currentTarget.value)}>{fighters.map(fighter => (
                                <option key={fighter.id} value={fighter.id}>{fighter.fighterName}</option>
                                ))}</select>
                                <br/>
                                <Button style={{border:'3px solid black', color:'black', backgroundColor:'white'}} onClick={fetchFighterFour}>Load Fighter #4</Button>
                            </Col>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{marginLeft:'-20%', border:'3px solid black', width:'160px', height:'auto'}}>
                        <CardTitle>Power level: <span style={{fontFamily:'Open Sans'}}><b>{sum([fighterFive.intelligence, fighterFive.strength, fighterFive.speed, fighterFive.durability, fighterFive.power, fighterFive.combat])}</b></span></CardTitle>
                            <Col>
                                <table key={fighterFive.id}>
                                    <tr><img alt='' src={fighterFive.image} style={{ width:'100%', height:'auto'}}></img></tr>
                                </table>
                            </Col>
                            <Col>
                                <select value={selectFive}  onChange={e => setSelectFive(e.currentTarget.value)}>{fighters.map(fighter => (
                                <option key={fighter.id} value={fighter.id}>{fighter.fighterName}</option>
                                ))}</select>
                                <br/>
                                <Button style={{border:'3px solid black', color:'black', backgroundColor:'white'}} onClick={fetchFighterFive}>Load Fighter #5</Button>
                            </Col>
                        </Card>
                    </Col>
                </Row>
                </Card>
                <br/>
                <br/>
                
            </div>
            <br/>
            <div style={{marginTop:'-3%', textAlign: 'center', marginLeft:'45%'}}>
                
                <Row>
                    <Button style={{border:'3px solid black', color:'black', backgroundColor:'white', fontSize:'28px'}} onClick={SaveTeam}>Save your team!</Button>
                </Row>
            </div>
        </div>
        
    )
}

export default CreateTeam;