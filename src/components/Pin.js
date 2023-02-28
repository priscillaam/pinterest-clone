import React from 'react'
import styled from 'styled-components'

function Pin() {
    return (
      <Wrapper>
        <Container>
            <img src='https://i.pinimg.com/564x/9e/01/55/9e0155e6863cf3965c93898bd1200026.jpg' />
        </Container>
      </Wrapper>
    )
}

export default Pin

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;

    img {
        display: flex; 
        width: 100%;
        cursor: zoom0in;
        border-radius: 16px;
        object-fit: cover; 
    }

    hover: {

    }
`