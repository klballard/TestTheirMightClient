import React, {useState} from 'react';
import {Form, Container, Row, Input, InputGroup, Button, Jumbotron} from 'reactstrap';
import FighterCard from './FighterCard';


const FighterSearch = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);
    const [searchMessage, setSearchMessage] = useState('')
    //let proxyURL ="https://cors-anywhere.herokuapp.com/";
    let baseURL = `https://superheroapi.com/api/10157622918662045/search/${searchQuery}`
    
    const getData = (e) => {
        e.preventDefault();
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
        if(results.length == null){
            setSearchMessage('That fighter will be future DLC. Try again!')
        } else {
            setSearchMessage('')
        }
    };

    

    const onSubmit = () => {
        getData();
    }

    const onChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return(
        <div style={{padding:'40px'}}>
            <div style={{width: '60%', textAlign:'center', opacity:'90%', height:'8em'}} className='main ml-auto mr-auto mt-5 mb-5 p-2 col-8 bg-white rounded'>
                <div style={{marginRight: 'auto', marginLeft:'auto'}} className='mainDiv'>
                    <h3 className='search mb-3 p-1'><a href='https://superheroapi.com/ids.html' target='_blank'>Search</a> for a fighter!</h3>
                    <Form style={{marginLeft:'30%'}} className='form' onSubmit={onSubmit}>
                        <InputGroup size='lg'>
                            <Input style={{height: '60px', border:'3px solid black', color:'black', backgroundColor:'white'}} className='input col-6' type='text' onChange={onChange} value={searchQuery} placeholder='By name (ex: Batman, Predator)'/>
                            <div className='input-group-append'>
                                <Button style={{borderLeft: '0px', border:'3px solid black', color:'black', backgroundColor:'white'}} className='btn' type='submit'>Search</Button>
                            </div>
                        </InputGroup>
                    </Form>
                    <br/>
                    <br/>
                </div>
            </div>
            <div style={{marginTop:'-3%'}}>
                <Container>
                    <Row>
                        {results.length == null ? (
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