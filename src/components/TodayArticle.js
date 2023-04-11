import React from 'react'
import styled from 'styled-components'

function TodayArticle(props) {

    let {urls} = props;

    let article = {
        0: {
           heading:"Seize the Day",
           phrase:"ktm-duke",
         }
        ,
        1: {
            heading:"Sweet and Soft",
            phrase:"ktm-duke",
         },
         2: {
            heading:"city 100",
            phrase:"ktm-duke",
         },
         3: {
            heading:"city 100",
            phrase:"ktm-duke",
         },
         4: {
            heading:"city 100",
            phrase:"ktm-duke",
         },
         5: {
            heading:"Recipe Remix",
            phrase:"ktm-duke",
         },
         6: {
            heading:"city 100",
            phrase:"ktm-duke",
         }
       }
    return (
      <Wrapper>
        <Container>
            <ArticleHeading>{article[props.index].heading}</ArticleHeading>
            <ArticlePhrase>{article[props.index].phrase}</ArticlePhrase>
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
const ArticleHeading = styled.div`
    width: 100%;
    color: white;
    display: flex;
    position: absolute;
    justify-content: center;
    bottom: 75px;
    font: inherit;
    font-size: 18px;
    font-weight: 400;
`
const ArticlePhrase = styled.div`
    width: 100%;
    color: white;
    display: flex;
    position: absolute;
    justify-content: center;
    bottom: 25px;
    font: inherit;
    font-size: 24px;
    font-weight: 600;
`