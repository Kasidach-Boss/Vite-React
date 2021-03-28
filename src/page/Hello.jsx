import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import WordArt from 'react-wordart'

function Hello(){
    const [count,setCount] = useState(0);
    const diviedtwo = () =>{
        setCount((count)=> count/2)
       
    }
    const Power =() =>{
        setCount((count)=> count*count)
        
    }
    console.log(count);
    return (
        <Jumbotron fluid>
            <Container>
                <br></br>
                <center><WordArt text='Hello, Vite+React!!!!!!' theme={`slate`} fontSize={50}></WordArt></center>
                <br></br>
                <Card>
                 <Card.Body><h2 style={{color:'black'}}>count: {count}</h2>   </Card.Body> 
                </Card>
                <br></br>
                <Button variant="primary" onClick={()=>setCount((count)=> count+1)}>Increase</Button>
                <Button  variant="info" onClick={()=>setCount((count)=> count-1)}>Decrease</Button>
                <Button variant="danger" onClick={diviedtwo}>Divied2</Button>
                <Button variant="success" onClick={()=>setCount((count)=> count=0)}>Reset</Button>
                <Button variant="secondary" onClick={Power}>Power</Button>
            </Container>
                     
        </Jumbotron>
        
        
    )
   
}

export default Hello