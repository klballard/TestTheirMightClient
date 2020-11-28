import React, {useState} from 'react';
import {Form, Container, Row, Input, InputGroup, Button, Jumbotron} from 'reactstrap';
import {makeStyles} from '@material-ui/core';
import FighterCard from './FighterCard';


const FighterSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
   
    //let proxyURL ="https://cors-anywhere.herokuapp.com/";
    let baseURL = `https://superheroapi.com/api/10157622918662045/search/${searchQuery}`
    
    const getData = () => {
        let url = baseURL;
        fetch(url)
        .then(res => res.json())
        .then(data => setResults(data.results))
        .catch(err => console.log(err));
        console.log(setResults);
        console.log(results);
    }

    

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
                            <Input className='input col-6' type='text' onChange={onChange} value={searchQuery} placeholder='By name (ex: Batman, Predator)'/>
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
                            {results.slice(0,1).map((results) =>
                            <FighterCard results={results} fighterName={results.name} intelligence={results.powerstats.intelligence} strength={results.powerstats.strength} speed={results.powerstats.speed} durability={results.powerstats.durability} power={results.powerstats.power} combat={results.powerstats.combat} image={results.image.url}/>)}
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default FighterSearch;