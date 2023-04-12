import Pin from './Pin'
import React from 'react'
import styled from 'styled-components'
import '../styles/PinTemplate.css'

export default function PinTemplate(props) {

    let { pins } = props;

  return (
    <Wrapper>
        {/* <p>Home Pins</p> */}
        <Container className='media-query-template'>
            {
                pins.map((pin, index) => {
                    let {urls} = pin;
                    return <Pin key={index} urls={urls}/>
                })
            }
        </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    width: 100%;
    margin: 0 20px;
    justify-content: center;
`

const Container = styled.div`
    column-gap: 5px;
    margin: 0 auto;
    height: 100%;
    background-color: white;
`
