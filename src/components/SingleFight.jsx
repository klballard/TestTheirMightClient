import React, {useState, useEffect} from 'react';
import {Card, Col, Row, Button} from 'reactstrap';

const SingleFight = (props) => {

    const [fighterOne, setFighterOne] = useState([]);
    const [fighterTwo, setFighterTwo] = useState([]);
    const [fighters, setFighters] = useState([]);
    const [selectValue, setSelectValue] = useState([]);
    const [secondValue, setSecondValue] = useState([]);

    const fetchFighterOne = () => {
        fetch(`https://testtheirmightheroku.herokuapp.com/fighter/${selectValue}`, {
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
        fetch(`https://testtheirmightheroku.herokuapp.com/fighter/${secondValue}`, {
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
        fetch('https://testtheirmightheroku.herokuapp.com/fighter/getall', {
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
            <Card style={{ textAlign:'center', height:'auto', width:'300px', marginTop:'50px', marginLeft:'auto', marginRight:'120px'}}>
                <Col>
                    <table key={fighterOne.id}>
                    <tr><img alt='Select first fighter..' src={fighterOne.image} width='100%' height='300px'></img></tr>
                    </table>
                </Col>
                <Col>
                    <select value={selectValue}  onChange={e => setSelectValue(e.currentTarget.value)}>{fighters.map(fighter => (
                    <option key={fighter.id} value={fighter.id}>{fighter.fighterName}</option>
                    ))}</select>
                <br/>
            <Button onClick={fetchFighterOne}>Ready Player One?</Button>
            </Col>
            </Card>
            </Col>
            <div style={{marginTop:'350px'}}>
            <h3>VS.</h3>
            <br/>
            <Button onClick={fightResults}>FIGHT!</Button>
            </div>
            <Col>
            <Card style={{ textAlign:'center', height:'auto', width:'300px', marginTop:'50px', marginLeft:'120px', marginRight:'auto'}}>
                <Col>
                <table key={fighterTwo.id}>
                <tr><img alt='Select second fighter..' src={fighterTwo.image} width='100%' height='300px'></img></tr>
                </table>
                </Col>
                <Col>
                    <select value={secondValue} onChange={e => setSecondValue(e.currentTarget.value)}>{fighters.map(fighter => (
                        <option key={fighter.id} value={fighter.id}>{fighter.fighterName}</option>
                    ))}</select>
                    <br/>
                <Button onClick={fetchFighterTwo}>Ready Player Two?</Button>
                </Col>
            </Card>
            </Col>
            </Row>
            </div>
        </div>
    )
}

export default SingleFight;