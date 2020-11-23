import React, {useState} from 'react';
import {Form, Container, Row, Input, InputGroup, Button, Jumbotron} from 'reactstrap';
import {makeStyles} from '@material-ui/core';

let apiKey = 10157622918662045;
let baseUrl = 'https://superheroapi.com/api/';

const FighterSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [fighters, setFighters] = useState([]);
    const [searchMessage, setSearchMessage] = useState(`Find a combatant!`);

    const url = `${baseUrl}${apiKey}/search/${searchQuery}`
    
    const getData = () => {
        let data = fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setFighters(data.hits);
            setSearchQuery('');
            if (fighters.length === 0) {
                setSearchMessage(`That character does not exist in the API - sorry!`)
            } else {
                setSearchMessage(`Find a combatant!`)
            }
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        getData();
    }

    const onChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return(
        <div style={{padding:'40px'}}>
            <div className='main ml-auto mr-auto mt-5 mb-5 p-2 col-8 bg-white rounded'>
                <div className='mainDiv'>
                    <h3 className='search mb-3 p-1'>Search for a fighter!</h3>
                    <Form className='form' onSubmit={onSubmit}>
                        <InputGroup size='lg'>
                            <Input className='input col-6' type='text' onChange={onChange} value={searchQuery} placeholder='By name (ex: Batman, Terminator)'/>
                            <div className='input-group-append'>
                                <Button className='btn' type='submit'>Search</Button>
                            </div>
                        </InputGroup>
                    </Form>
                    <br/>
                    <br/>
                </div>
            </div>
            <div>
                <Container>
                    <Row>
                        {fighters.length === 0 ? (
                            <div id='searchResult' className='ml-auto mr-auto'>
                                <Jumbotron>
                                    <h3 className='jumboMessage'>{searchMessage}</h3> 
                                </Jumbotron>
                            </div>
                        ) : (
                            fighters.slice(0,3).map((fighter) =>
                            <FighterCard/>)
                        )}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default FighterSearch;