import React, {useState, useEffect} from 'react';
import {Card, Col, Row, Button} from 'reactstrap';

const SingleFight = (props) => {
    const [fighter, setFighter] = useState([]);
    const [fighters, setFighters] = useState([]);
    const [selectValue, setSelectValue] = useState([]);
    const [secondValue, setSecondValue] = useState([]);

    const fetchFighter = (fighter) => {
        fetch(`https://testtheirmightheroku.herokuapp.com/fighter/${fighter.id}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then((res) => res.json())
        .then((listData) => {
            setFighter(listData);
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

    return(
        <div>
            <Row>
            <Col>
            <Card style={{ marginTop:'200px'}}>
            <Col>
            <select value={selectValue} onChange={e => setSelectValue(e.currentTarget.value)}>{fighters.map(fighter => (
                <option key={fighter.id} value={fighter.id}>{fighter.fighterName}</option>
            ))}</select>
            </Col>
            <Col>
            <Button /*onClick={fetchFighterOne}*/>Load Fighter One</Button>
            </Col>
            <Col>
            <h3>test</h3>
            {fighters.map(fighter => (
                <tr key={fighter.id}>
                <th><img src={fighter.image} width='50' height='50'></img></th>
                <td>{fighter.name}</td>
                <td>{fighter.intelligence}</td>
                <td>{fighter.strength}</td>
                <td>{fighter.speed}</td>
                <td>{fighter.durability}</td>
                <td>{fighter.power}</td>
                <td>{fighter.combat}</td>
                </tr>
            ))}
            </Col>
            </Card>
            </Col>

            <Col>
            <Card style={{ marginTop:'200px'}}>
            <Col>
            <select value={secondValue} onChange={e => setSecondValue(e.currentTarget.value)}>{fighters.map(fighter => (
                <option key={fighter.id} value={fighter.id}>{fighter.fighterName}</option>
            ))}</select>
            </Col>
            <Col>
            <Button /*onClick={fetchFighterTwo}*/>Load Fighter Two</Button>
            </Col>
            <Col>
            
            </Col>
            </Card>
            </Col>
            </Row>
        </div>
    )
}

export default SingleFight;