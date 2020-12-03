import React, {useState} from 'react';
import {Form, Container, Row, Input, InputGroup, Button, Jumbotron} from 'reactstrap';
import {makeStyles} from '@material-ui/core';
import FighterCard from './FighterCard';


const FighterSearch = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [searchMessage, setSearchMessage] = useState('')
    //let proxyURL ="https://cors-anywhere.herokuapp.com/";
    let baseURL = `https://superheroapi.com/api/10157622918662045/search/${searchQuery}`
    
    const getData = () => {
        fetch(baseURL)
            .then((res) => res.json())
            /*
            .then((data) => {
                console.log(data);
                setResults(data.results);
                setSearchQuery('');
                if(data.response === 'error'){
                    setSearchMessage('That fighter will be future DLC. Try again!')
                } else {
                    setSearchMessage('')
                }
            });*/


        
        .then(data => setResults(data.results))
        .catch(err => console.log(err));
        console.log(setResults);
        console.log(results);
        setSearchQuery('');
        if(results.length === null){
            setSearchMessage('That fighter will be future DLC. Try again!')
        } else {
            setSearchMessage('')
        }
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
                    <h3 className='search mb-3 p-1'><a href='https://superheroapi.com/ids.html'>Search</a> for a fighter!</h3>
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
                        {results.length === null ? (
                            <div id="searchResult" className="ml-auto mr-auto">
                                <Jumbotron>
                                    <h3 className="jumbo">{searchMessage}</h3>
                                </Jumbotron>
                            </div>
                        ) : (
                            results.slice(0,6).map((results) =>
                                <FighterCard results={results} fighterName={results.name} intelligence={results.powerstats.intelligence} strength={results.powerstats.strength} speed={results.powerstats.speed} durability={results.powerstats.durability} power={results.powerstats.power} combat={results.powerstats.combat} image={results.image.url}/>)
                        )}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default FighterSearch;