import TodayArticle from './TodayArticle';
import React from 'react'
import styled from 'styled-components'
import '../styles/PinTemplate.css'

export default function TodayTemplate(props) {

    let { pins } = props;
    

  return (
    <Wrapper>
        
        <Container>
            
            {
                pins.map((pin, index) => {
                    let {urls} = pin;
                    console.log(index);
                    return <TodayArticle key={index} urls={urls}/>
                })
            }
        </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background-color: white; 
    display: flex;
    width: 100%;
    margin-top: 15px;
    justify-content: center;
`

const Container = styled.div`
    column-gap: 1px;
    margin: 0 auto;
    height: 100%;
    background-color: white;
    column-count: 2; 
`