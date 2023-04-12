import TodayArticle from './TodayArticle';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import '../styles/PinTemplate.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function TodayTemplate(props) {

    let { pins } = props;
    let newDate = new Date().toLocaleString("en-US", { month: "long", day : '2-digit', year:"numeric"});
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
      };

  return (
    <>
    <DateContainer>
        <p>{newDate}</p>
    </DateContainer>
    <Phrase>
        <p>Stay Inspired</p>
    </Phrase>
    <Wrapper >
        <Container>
            {
                pins.map((pin, index) => {
                    let {urls} = pin;
                    return <TodayArticle key={index} urls={urls} index={index}/>;
                })
            }
        </Container>
    </Wrapper>
    <CheckSvg>
        <CheckCircleIcon sx={{ fontSize: "32px" }}/>
    </CheckSvg>
    <FooterText1>
        <p>That's all for today!</p>
    </FooterText1>
    <FooterText2>
        <p>Come back tomorrow for more inspiration</p>
    </FooterText2>
    <ButtonWrapper>
        <Button onClick={handleSubmit}>
            Go to home feed
        </Button>
    </ButtonWrapper>
    </>
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
    position: relative;
`
const DateContainer = styled(Wrapper)`
    font-weight: 500;
    font-size: 20px;
`
const Phrase = styled(Wrapper)`
    font-weight: 600;
    font-size: 34px;
`
const CheckSvg = styled(Wrapper)`
    margin-top: 75px;
`
const FooterText1 = styled(Wrapper)`
    font-weight: 400;
    font-size: 15px;
`
const FooterText2 = styled(Wrapper)`
    font-weight: 500;
    font-size: 20px;
    margin-top: 0;
`
const ButtonWrapper = styled(Wrapper)`
    margin-bottom: 100px;
`
const Button = styled.button`
    background: #F2F3F5;
	color: inherit;
	border: none;
	padding: 10px 12px;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    border-radius: 32px;
    margin-top: 40px;
    margin-bottom: 75px;
`
