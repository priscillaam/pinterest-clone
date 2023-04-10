import React from 'react'
import styled from 'styled-components'

function TodayArticle(props) {

    let {urls} = props;

    return (
      <Wrapper>
        <Container>
            <img src={urls?.regular} alt='pin'/>
        </Container>
      </Wrapper>
    )
}

export default TodayArticle;

const Wrapper = styled.div`
    display: block;
    padding: 8px;
`

const Container = styled.div`
    display: flex;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    width: 400px;
    height: 300px;

    img {
        display: block; 
        width: 100%;
        cursor: zoom-in;
        border-radius: 28px;
        object-fit: cover; 
    }
`