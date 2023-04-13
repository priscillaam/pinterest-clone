import Pin from './Pin.js';
import React from 'react';
import avatar from '../assets/avatar.jpg';
import styled from 'styled-components'
import '../styles/PinTemplate.css';
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

export default function ProfileTemplate(props) {

    let { pins } = props;

  return (
    <>
    <ProfileContainer>
        <AvatarContainer>
        <img alt='avatar' src={avatar} />
        </AvatarContainer>
        <ProfileName>
            Profile Name
        </ProfileName>
        <UserName>
            @username
        </UserName>
        <FollowingText>
            0 Following
        </FollowingText>
        <ProfileButtonsContainer>
            <a>Share</a>
            <a>Edit Profile</a>
        </ProfileButtonsContainer>
    </ProfileContainer>
    <Wrapper>
    <ProfileWidgetsWrapper>
        <IconButton>
        <TuneIcon />
        </IconButton>
        <IconButton>
        <AddIcon />
        </IconButton>
    </ProfileWidgetsWrapper>
    </Wrapper>
    <Wrapper>
        <Container>
            {
                pins.map((pin, index) => {
                    let {urls} = pin;
                    let show = true;
                    return <Pin key={index} urls={urls} profilePin={show}/>
                })
            }
        </Container>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    width: 100%;
    margin: 0 20px;
    justify-content: center;
`

const Container = styled.div`
    column-gap: 1px;
    margin: 0 auto;
    height: 100%;
    background-color: white;
    column-count: 3;
    position: relative;
    @media (max-width: 854px) {
        column-count: 2;
    }
`
const ProfileContainer = styled.div`
    background-color: white;
    height: 400px;
    width: 100%;
    margin-top: 20px;
`
const AvatarContainer = styled(Wrapper)`
    img {
    height: 120px;
    box-shadow: 0 0 1px 1px rgba(225, 225, 225);
    border-radius: 50%;
    }
`
const ProfileName = styled(Wrapper)`
    font-weight: 600;
    font-size: 32px;
    margin-top: 10px;
`
const UserName = styled(Wrapper)`
    font-weight: 400;
    font-size: 14px;
    margin-top: 5px;
    color: #808080;
`
const FollowingText = styled(Wrapper) `
    margin-top: 10px;
`
const ProfileButtonsContainer = styled(Wrapper)`
    margin-top: 15px;
    display: flex;
    a {
        font-weight: 500;
        font-size: 16px;
        text-decoration: none;
        padding: 14px;
        text-align: center;
        border-radius: 24px;
        cursor: pointer;
        background-color: #f2f3f5;
        margin: 5px;
    }
`
const ProfileWidgetsWrapper = styled(Wrapper)`
    justify-content: space-between;
    height: 36px;
    margin: 0 auto;
    width: 95%;
`
