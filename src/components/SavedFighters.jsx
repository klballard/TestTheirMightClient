import React, {useState, useEffect} from 'react';
import {Card, Row, Col} from 'reactstrap';
import FighterList from './SavedFighterList';


const SavedFighters = (props) => {

    const [fighters, setFighters] = useState([]);

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

    return(
        <div>
            <Card body className='ml-auto mr-auto mt-5 col-7'>
                <Row>
                    <Col>
                    <FighterList fighters={fighters} fetchFighters={fetchFighters}/>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default SavedFighters;