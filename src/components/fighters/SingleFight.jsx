import React, {useState, useEffect} from 'react';
import {Card, Col, Row, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';

const SingleFight = (props) => {

    const [fighterOne, setFighterOne] = useState([]);
    const [fighterTwo, setFighterTwo] = useState([]);
    const [fighters, setFighters] = useState([]);
    const [selectValue, setSelectValue] = useState([]);
    const [secondValue, setSecondValue] = useState([]);

    const fetchFighterOne = () => {
        fetch(`${APIURL}/fighter/${selectValue}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then((res) => res.json())
        .then((listData) => {
            setFighterOne(listData);
        })
    }

    const fetchFighterTwo = () => {
        fetch(`${APIURL}/fighter/${secondValue}`, {
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

    /*
    const fighterMap = () => {
        return props.fighters.map((fighter,index) => {
            return(<option key={index} value={fighter}>{fighter.name}</option>)
        })
    }
    */
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


    const fightResults = () => {
        if(sum([fighterOne.intelligence, fighterOne.strength, fighterOne.speed, fighterOne.durability, fighterOne.power, fighterOne.combat]) > sum([fighterTwo.intelligence, fighterTwo.strength, fighterTwo.speed, fighterTwo.durability, fighterTwo.power, fighterTwo.combat])){
            alert(`\n                    ${fighterOne.fighterName}'s power level: ${sum([fighterOne.intelligence, fighterOne.strength, fighterOne.speed, fighterOne.durability, fighterOne.power, fighterOne.combat])}
                    ${fighterTwo.fighterName}'s power level: ${sum([fighterTwo.intelligence, fighterTwo.strength, fighterTwo.speed, fighterTwo.durability, fighterTwo.power, fighterTwo.combat])}\n
                    ${fighterOne.fighterName} wins!`)
        }
        else if(sum([fighterOne.intelligence, fighterOne.strength, fighterOne.speed, fighterOne.durability, fighterOne.power, fighterOne.combat]) < sum([fighterTwo.intelligence, fighterTwo.strength, fighterTwo.speed, fighterTwo.durability, fighterTwo.power, fighterTwo.combat])){
            alert(`\n                    ${fighterOne.fighterName}'s power level: ${sum([fighterOne.intelligence, fighterOne.strength, fighterOne.speed, fighterOne.durability, fighterOne.power, fighterOne.combat])}
                    ${fighterTwo.fighterName}'s power level: ${sum([fighterTwo.intelligence, fighterTwo.strength, fighterTwo.speed, fighterTwo.durability, fighterTwo.power, fighterTwo.combat])}\n
                    ${fighterTwo.fighterName} wins!`)
        }
        else if(sum([fighterOne.intelligence, fighterOne.strength, fighterOne.speed, fighterOne.durability, fighterOne.power, fighterOne.combat]) === sum([fighterTwo.intelligence, fighterTwo.strength, fighterTwo.speed, fighterTwo.durability, fighterTwo.power, fighterTwo.combat])){
            alert(`\n                    ${fighterOne.fighterName}'s power level: ${sum([fighterOne.intelligence, fighterOne.strength, fighterOne.speed, fighterOne.durability, fighterOne.power, fighterOne.combat])}
                    ${fighterTwo.fighterName}'s power level: ${sum([fighterTwo.intelligence, fighterTwo.strength, fighterTwo.speed, fighterTwo.durability, fighterTwo.power, fighterTwo.combat])}\n
                     It's a draw! Good fight.`)
        }
    }

    return(
        <div>
            <div style={{ marginTop:'120px', textAlign:'center'}}><h4>Pit two fighters against each other and see who wins!</h4></div>
            <div>
            <Row>
            <Col>
            <Card style={{ border:'solid 3px black', textAlign:'center', height:'auto', width:'300px', marginTop:'50px', marginLeft:'auto', marginRight:'120px'}}>
                <Row>
                    <table key={fighterOne.id}>
                    <tr><img alt='' src={fighterOne.image} width='92%' height='300px'></img></tr>
                    </table>
                </Row>
                <Row style={{marginLeft:'auto', marginRight:'auto'}}>
                    <select value={selectValue}  onChange={e => setSelectValue(e.currentTarget.value)}>{fighters.map(fighter => (
                    <option key={fighter.id} value={fighter.id}>{fighter.fighterName}</option>
                    ))}</select>
                <br/>
            <Button style={{border:'3px solid black', color:'white', backgroundColor:'black'}} onClick={fetchFighterOne}>Ready Player One?</Button>
            </Row>
            </Card>
            </Col>
            <div style={{marginTop:'350px', textAlign:'center'}}>
            <h1>VS.</h1>
            <br/>
            <Button style={{border:'3px solid black', color:'black', backgroundColor:'red', fontSize:'28px'}} onClick={fightResults}>FIGHT!</Button>
            </div>
            <Col>
            <Card style={{border:'solid 3px black', textAlign:'center', height:'auto', width:'300px', marginTop:'50px', marginLeft:'120px', marginRight:'auto'}}>
                <Row>
                <table key={fighterTwo.id}>
                <tr><img alt='' src={fighterTwo.image} width='92%' height='300px'></img></tr>
                </table>
                </Row>
                <Row style={{marginLeft:'auto', marginRight:'auto'}}>
                <Button style={{border:'3px solid black', color:'white', backgroundColor:'black'}} onClick={fetchFighterTwo}>Ready Player Two?</Button>
                    <br/>
                <select value={secondValue} onChange={e => setSecondValue(e.currentTarget.value)}>{fighters.map(fighter => (
                        <option key={fighter.id} value={fighter.id}>{fighter.fighterName}</option>
                    ))}</select>
                </Row>
            </Card>
            </Col>
            </Row>
            </div>
        </div>
    )
}

export default SingleFight;