import Pin from './Pin'
import React from 'react'
import styled from 'styled-components'
import '../styles/PinTemplate.css'

export default function TodayTemplate(props) {

    let { pins } = props;

  return (
    <Wrapper>
        {/* <p>Today's Pins</p> */}
        <Container className='media-query-template'>
            {
                pins.map((pin, index) => {
                    let {urls} = pin;
                    return <Pin key={index} urls={urls}/>
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
    column-gap: 5px;
    margin: 0 auto;
    height: 100%;
    background-color: white;
`